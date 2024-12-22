const React = require("react");
const SettingsToggle = require('../SettingsToggle');
const SectionHeader = require('../SectionHeader');

function VisualSection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
  return (
    <div className="settings-section mb-16">
      <SectionHeader title="Visual Enhancements" />
      <div className={`${settings.GridView ? "settings-grid" : ""} mt-8`}>
        {filterSettings(
          "Discolored",
          "Colors all of Discord's SVG icons",
        ) && (
          <SettingsToggle
            label="Discolored"
            description="Colors all of Discord's SVG icons"
            value={settings.Discolored}
            onChange={() => handleToggle("Discolored")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Pastel Statuses",
          "Changes status colors to pastel variants",
        ) && (
          <SettingsToggle
            label="Pastel Statuses"
            description="Changes status colors to pastel variants"
            value={settings.PastelStatuses}
            onChange={() => handleToggle("PastelStatuses")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Large Emojis",
          "Makes emojis larger when hovered",
        ) && (
          <SettingsToggle
            label="Large Emojis"
            description="Makes emojis larger when hovered"
            value={settings.LargeEmojis}
            onChange={() => handleToggle("LargeEmojis")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Reaction Animations",
          "Adds flip animation to reaction emojis",
        ) && (
          <SettingsToggle
            label="Reaction Animations"
            description="Adds flip animation to reaction emojis"
            value={settings.ReactionAnimations}
            onChange={() => handleToggle("ReactionAnimations")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Custom New Member Badge",
          "Replaces the new member badge with a custom one",
        ) && (
          <SettingsToggle
            label="Custom New Member Badge"
            description="Replaces the new member badge with a custom one"
            value={settings.CustomNewMemberBadge}
            onChange={() => handleToggle("CustomNewMemberBadge")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Profile Status Matching",
          "Makes profile status match theme colors",
        ) && (
          <SettingsToggle
            label="Profile Status Matching"
            description="Makes profile status match theme colors"
            value={settings.ProfileThemeMatching}
            onChange={() => handleToggle("ProfileThemeMatching")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Revert Profiles",
          "Reverts user profiles to the classic layout (incompatible with Profile Status Matching)",
        ) && (
          <SettingsToggle
            label="Revert Profiles"
            description="Reverts user profiles to the classic layout (incompatible with Profile Status Matching)"
            value={settings.RevertProfiles}
            onChange={() => handleToggle("RevertProfiles")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Cool Code Blocks",
          "Pretty code blocks with snake animation and pastel gradients",
        ) && (
          <SettingsToggle
            label="Cool Code Blocks"
            description="Pretty code blocks with snake animation and pastel gradients"
            value={settings.CoolCodeBlocks}
            onChange={() => handleToggle("CoolCodeBlocks")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Un-Simplify Bios",
          "Shows full bios in simplified profiles",
        ) && (
          <SettingsToggle
            label="Un-Simplify Bios"
            description="Shows full bios in simplified profiles"
            value={settings.UnsimplifyBios}
            onChange={() => handleToggle("UnsimplifyBios")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Channel Hover Effects",
          "Adds smooth sliding animations when hovering over channels, DMs, and settings",
        ) && (
          <SettingsToggle
            label="Channel Hover Effects"
            description="Adds smooth sliding animations when hovering over channels, DMs, and settings"
            value={settings.ChannelHover}
            onChange={() => handleToggle("ChannelHover")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Button Hover Effects",
          "Adds rotation animations to various buttons when hovered",
        ) && (
          <SettingsToggle
            label="Button Hover Effects"
            description="Adds rotation animations to various buttons when hovered"
            value={settings.ButtonHover}
            onChange={() => handleToggle("ButtonHover")}
            onPreviewClick={handlePreviewClick}
          />
        )}
      </div>
    </div>
  );
}

module.exports = VisualSection; 