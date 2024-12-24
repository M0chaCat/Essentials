const React = require("react");
const SettingsToggle = require('../SettingsToggle');
const SectionHeader = require('../SectionHeader');

function FunSection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
  return (
    <div className="settings-section mb-16">
      <SectionHeader title="Fun & Experimental" />
      <div className={`${settings.GridView ? "settings-grid" : ""} mt-8`}>
        {filterSettings(
          "Discord Hardcore Mode",
          "Makes Discord significantly more...",
        ) && (
          <SettingsToggle
            label="Discord Hardcore Mode"
            description="Makes Discord significantly more... something..."
            value={settings.DiscordHardcore}
            onChange={() => handleToggle("DiscordHardcore")}
            helpText="This mode adds various visual challenges to Discord to make it the worst thing ever"
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Gay Folders",
          "Adds rainbow animation to folders containing 'gay' in their name",
        ) && (
          <SettingsToggle
            label="Gay Folders"
            description="Adds rainbow animation to folders containing 'gay' in their name"
            value={settings.GayFolders}
            onChange={() => handleToggle("GayFolders")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Gradient DMs",
          "Adds gradient backgrounds to DM list and member list based on status",
        ) && (
          <SettingsToggle
            label="Gradient DMs"
            description="Adds gradient backgrounds to DM list and member list based on status"
            value={settings.GradientDMs}
            onChange={() => handleToggle("GradientDMs")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Bouncy Webm",
          "Makes webm files bounce the chat around like the good old days",
        ) && (
          <SettingsToggle
            label="Bouncy Webm"
            description="Makes webm files bounce the chat around like the good old days"
            value={settings.BouncyWebm}
            onChange={() => handleToggle("BouncyWebm")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Trans Boost",
          "Changes the server boost gradient to the best flag ever.",
        ) && (
          <SettingsToggle
            label="Trans Boost"
            description="Changes the server boost gradient to the best flag ever."
            value={settings.TransBoost}
            onChange={() => handleToggle("TransBoost")}
            onPreviewClick={handlePreviewClick}
          />
        )}
        {filterSettings(
          "Clippy Status",
          "Turns status in new profiles into Clippy-style speech bubble (incompatible with Profile Status Matching/Revert Profiles)",
        ) && (
          <SettingsToggle
            label="Clippy Status"
            description="Turns status in new profiles into Clippy-style speech bubble (incompatible with Profile Status Matching/Revert Profiles)"
            value={settings.ClippyStatus}
            onChange={() => handleToggle("ClippyStatus")}
            onPreviewClick={handlePreviewClick}
          />
        )}
      </div>
    </div>
  );
}

module.exports = FunSection; 