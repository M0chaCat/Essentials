"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

const QuickCSSTab = require("./QuickCSSTab");
const M0chaTweaksTab = require("./components/M0chaTweaksTab");
const { ThemeImportTab, applyThemeUrls } = require("./ThemeImportTab");
const NekoSkinsTab = require("./components/NekoSkinsTab");
const tweaks = require("./tweaks");

/*

Build the plugin:
npm run build

Build and copy to Nekocord plugins directory (macOS only, am lazy):
npm run build -- -c

Line count command:
find . -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.css" \) -not -path "./node_modules/*" -not -path "./build/*" -exec cat {} + | wc -l

*/

class Essentials {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;

    // Apply theme imports on startup
    const savedThemeUrls = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "themeimport",
    );
    if (savedThemeUrls) {
      if (document.readyState === "complete") {
        applyThemeUrls(savedThemeUrls);
      } else {
        window.addEventListener("load", () => {
          applyThemeUrls(savedThemeUrls);
        });
      }
    }

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
    version: "2.5.3",
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

    // Get saved Theme Import CSS
    const savedThemeImport = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "themeimport",
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

    // Apply Theme Import if it exists
    if (savedThemeImport) {
      if (document.readyState === "complete") {
        this.applyCss(savedThemeImport, "essentials-themeimport");
      } else {
        window.addEventListener("load", () =>
          this.applyCss(savedThemeImport, "essentials-themeimport"),
        );
      }
    }

    // Check each setting and apply CSS only for enabled settings
    if (savedPrefs) {
      tweaks.forEach((tweak) => {
        if (savedPrefs[tweak.id]) {
          if (document.readyState === "complete") {
            this.applyCss(tweak.css, `essentials-${tweak.id}`);
          } else {
            window.addEventListener("load", () =>
              this.applyCss(tweak.css, `essentials-${tweak.id}`),
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
      settings: ["mochatweaks", "quickcss", "themeimport", "onekoskins"],
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
    themeimport: {
      section: "Theme Import",
      searchableTitles: ["Essentials", "CSS", "Theme Import"],
      label: "Theme Import",
      element: ThemeImportTab,
    },
    onekoskins: {
      section: "Neko Skins",
      searchableTitles: ["Essentials", "Neko", "Skins", "Cat"],
      label: "Neko Skins",
      element: NekoSkinsTab,
    },
  };

  start() {
    // Listen for settings changes
    window.addEventListener("essentials-settings-changed", () => {
      const settings = NekocordNative.preferences.getForPlugin(
        "cat.kitties.arcane.Essentials",
        "settings",
      );

      // Apply CSS for enabled tweaks
      tweaks.forEach((tweak) => {
        if (settings[tweak.id]) {
          this.applyCss(tweak.css, `essentials-${tweak.id}`);
        } else {
          // Remove CSS if tweak is disabled
          const element = document.getElementById(`essentials-${tweak.id}`);
          if (element) element.remove();
        }
      });
    });
  }
}
exports.default = Essentials;
