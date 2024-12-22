"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

const { cssThemes } = require('./cssThemes');
const QuickCSSTab = require('./QuickCSSTab');
const M0chaTweaksTab = require('./components/M0chaTweaksTab');



/*

Build the plugin:
npm run build

Build and copy to Nekocord plugins directory (macOS only, am lazy):
npm run build -- -c

Line count command:
find . -type f -not -path "./node_modules/*" -exec cat {} + | wc -l

*/



class Essentials {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
    this.cssThemes = cssThemes;
    Nekocord.webpackPatcher.onInitializationFinish(() => {
      this.WebpackModules = Nekocord.webpackModules;
      this.MenuGroup = Nekocord.webpackModules.commonModules.MenuGroup;
      this.MenuItem = Nekocord.webpackModules.commonModules.MenuItem;
    });

    // Add event listener for settings changes
    window.addEventListener("essentials-settings-changed", () => {
      this.tryToEnableTweaks();
    });
  }
  info = {
    name: "Essentials",
    id: "cat.kitties.arcane.Essentials",
    authors: [
      {
        name: "Mocha",
        id: "808802000224518264",
      },
    ],
    description: "Minor tweaks that make discord better!",
    version: "2.4.0",
    patches: [],
    preferences: [],
  };
  onPreferencesChange(userPreferences) {
    this.userPreferences = userPreferences;
    this.tryToEnableTweaks();
  }



  tryToEnableTweaks() {
    // Get the saved settings from preferences
    const savedPrefs = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "settings",
    );

    // Get saved QuickCSS
    const savedQuickCss = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "quickcss",
    );

    // First, get all existing essentials CSS elements
    const existingStyles = document.querySelectorAll(
      'style[id^="essentials-"]',
    );

    // Remove all existing essentials CSS
    existingStyles.forEach((style) => style.remove());

    // Apply QuickCSS if it exists
    if (savedQuickCss) {
      if (document.readyState === "complete") {
        this.applyCss(savedQuickCss, "essentials-quickcss");
      } else {
        window.addEventListener("load", () =>
          this.applyCss(savedQuickCss, "essentials-quickcss"),
        );
      }
    }

    // Check each setting and apply CSS only for enabled settings
    if (savedPrefs) {
      Object.entries(savedPrefs).forEach(([key, value]) => {
        if (value === true && this.cssThemes[key]) {
          if (document.readyState === "complete") {
            this.applyCss(this.cssThemes[key], `essentials-${key}`);
          } else {
            window.addEventListener("load", () =>
              this.applyCss(this.cssThemes[key], `essentials-${key}`),
            );
          }
        }
      });
    }
  }

  applyCss(css, id) {
    // Remove any existing style element for this specific theme
    const existingStyle = document.getElementById(id);
    if (existingStyle) {
      existingStyle.remove();
    }

    // Create and append new style element
    const styleElement = document.createElement("style");
    styleElement.id = id;
    styleElement.textContent = css;

    if (document.head) {
      document.head.appendChild(styleElement);
    }
  }
  settingsSections = [
    {
      header: "Essentials",
      divider: true,
      settings: ["mochatweaks", "quickcss"],
    },
  ];
  settingsTabs = {
    mochatweaks: {
      section: "M0chaTweaks",
      searchableTitles: ["Essentials", "Tweaks", "M0chaTweaks"],
      label: "M0chaTweaks",
      element: M0chaTweaksTab,
    },
    quickcss: {
      section: "QuickCSS",
      searchableTitles: ["Essentials", "CSS", "QuickCSS"],
      label: "QuickCSS",
      element: QuickCSSTab,
    },
  };
}
exports.default = Essentials;
