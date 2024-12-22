const React = require("react");
const SettingsToggle = require('../SettingsToggle');
const SectionHeader = require('../SectionHeader');

function ChatSection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
  return (
    <div className="settings-section mb-16">
      <SectionHeader title="Chat Features" />
      <div className={settings.GridView ? "settings-grid" : ""}>
      {filterSettings(
            "Custom Chat Placeholder",
            'Changes the chat placeholder to "be silly :3"',
          ) && (
            <SettingsToggle
              label="Custom Chat Placeholder"
              description='Changes the chat placeholder to "be silly :3"'
              value={settings.CustomChatPlaceholder}
              onChange={() => handleToggle("CustomChatPlaceholder")}
            />
          )}
          {filterSettings(
            "Silly Þ User Chat Placeholder",
            'Changes the chat placeholder to "be silly, use þ :3"',
          ) && (
            <SettingsToggle
              label="Silly Þ User Chat Placeholder"
              description='Changes the chat placeholder to "be silly, use þ :3"'
              value={settings.CustomChatPlaceholderAlt}
              onChange={() => handleToggle("CustomChatPlaceholderAlt")}
            />
          )}
          {filterSettings(
            "Channel Tweaks",
            "Enhances channel list with better spacing and organization",
          ) && (
            <SettingsToggle
              label="Channel Tweaks"
              description="Enhances channel list with better spacing and organization"
              value={settings.ChannelTweaks}
              onChange={() => handleToggle("ChannelTweaks")}
              helpText="This improves the channel list layout, such as a more compact and organized look"
            />
          )}
          {filterSettings(
            "Hide Timestamps",
            "Hides message timestamps until hovered",
          ) && (
            <SettingsToggle
              label="Hide Timestamps"
              description="Hides message timestamps until hovered"
              value={settings.HideTimestamps}
              onChange={() => handleToggle("HideTimestamps")}
            />
          )}
          {filterSettings(
            "Scrolling Text",
            "Adds scrolling animation to long header text",
          ) && (
            <SettingsToggle
              label="Scrolling Text"
              description="Adds scrolling animation to long header text"
              value={settings.ScrollingText}
              onChange={() => handleToggle("ScrollingText")}
            />
          )}
          {filterSettings(
            "Bigger Summaries",
            "Increases the size of forum topic summaries",
          ) && (
            <SettingsToggle
              label="Bigger Summaries"
              description="Increases the size of forum topic summaries"
              value={settings.BiggerSummaries}
              onChange={() => handleToggle("BiggerSummaries")}
            />
          )}
          {filterSettings(
            "IRC Theme",
            "Classic IRC-style chat layout (requires compact mode)",
          ) && (
            <SettingsToggle
              label="IRC Theme"
              description="Classic IRC-style chat layout (requires compact mode)"
              value={settings.IRCTheme}
              onChange={() => handleToggle("IRCTheme")}
              previewAfter="https://arcane.kitties.cat/assets/essentials/irctheme-after.png"
              onPreviewClick={handlePreviewClick}
            />
          )}
      </div>
    </div>
  );
}

module.exports = ChatSection; 