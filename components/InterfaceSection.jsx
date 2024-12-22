const React = require("react");
const SettingsToggle = require('../SettingsToggle');
const SectionHeader = require('../SectionHeader');

function InterfaceSection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
  return (
    <div className="settings-section mb-16">
      <SectionHeader title="Interface Tweaks" />
      <div className={settings.GridView ? "settings-grid" : ""}>
      {filterSettings(
            "Account Settings Refresh",
            "A fresh take on the Account Settings area",
          ) && (
            <SettingsToggle
              label="Account Settings Refresh"
              description="A fresh take on the Account Settings area"
              value={settings.AccountSettingsRefresh}
              onChange={() => handleToggle("AccountSettingsRefresh")}
              helpText="This provides a fresh look at the Account Settings area, with a new layout"
              previewBefore="https://arcane.kitties.cat/assets/essentials/accountsettingsrefresh-before.png"
              previewAfter="https://arcane.kitties.cat/assets/essentials/accountsettingsrefresh-after.png"
              onPreviewClick={handlePreviewClick}
            />
          )}
          {filterSettings(
            "Appearance Tab Improvements",
            "Better organized appearance settings",
          ) && (
            <SettingsToggle
              label="Appearance Tab Improvements"
              description="Better organized appearance settings"
              value={settings.AppearanceTabImprovements}
              onChange={() => handleToggle("AppearanceTabImprovements")}
              helpText="This improves the appearance of the Appearance Tab with a Better layout and improved organization"
            />
          )}
          {filterSettings(
            "Account Details Grid",
            "Reorganizes the account details panel into a grid layout",
          ) && (
            <SettingsToggle
              label="Account Details Grid"
              description="Reorganizes the account details panel into a grid layout"
              value={settings.AccountDetailsGrid}
              onChange={() => handleToggle("AccountDetailsGrid")}
              helpText="This reorganizes the account details panel into a grid layout"
            />
          )}
          {filterSettings(
            "Hide Play Again",
            "Hides the Play Again section in DMs",
          ) && (
            <SettingsToggle
              label="Hide Play Again"
              description="Hides the Play Again section in DMs"
              value={settings.HidePlayAgain}
              onChange={() => handleToggle("HidePlayAgain")}
              helpText="This hides the Play Again section in DMs"
            />
          )}
          {filterSettings(
            "Full Server Tooltips",
            "Shows the complete server name in tooltips without line breaks",
          ) && (
            <SettingsToggle
              label="Full Server Tooltips"
              description="Shows the complete server name in tooltips without line breaks"
              value={settings.FullServerTooltips}
              onChange={() => handleToggle("FullServerTooltips")}
              helpText="This shows the complete server name in tooltips without line breaks"
            />
          )}
          {filterSettings(
            "Centered Channel Names",
            "Centers channel names in the header",
          ) && (
            <SettingsToggle
              label="Centered Channel Names"
              description="Centers channel names in the header"
              value={settings.CenteredChannelNames}
              onChange={() => handleToggle("CenteredChannelNames")}
              helpText="This centers channel names in the header, and hides channel descriptions"
            />
          )}
          {filterSettings(
            "Better Pickers",
            "Changes purple to grey in the soundboard and emoji picker",
          ) && (
            <SettingsToggle
              label="Better Pickers"
              description="Changes purple to grey in the soundboard and emoji picker"
              value={settings.BetterPickers}
              onChange={() => handleToggle("BetterPickers")}
              helpText="This changes the color of the soundboard and emoji picker to fit the theme"
            />
          )}
          {filterSettings(
            "Hide Activity",
            "Hides recent activity in the member list",
          ) && (
            <SettingsToggle
              label="Hide Activity"
              description="Hides recent activity in the member list"
              value={settings.HideActivity}
              onChange={() => handleToggle("HideActivity")}
              helpText="This hides recent activity at the top of the member list"
            />
          )}
          {filterSettings(
            "Show Status and Username",
            "Shows both status and username simultaneously with @ symbol",
          ) && (
            <SettingsToggle
              label="Show Status and Username"
              description="Shows both status and username simultaneously with @ symbol"
              value={settings.UsernameSymbol}
              onChange={() => handleToggle("UsernameSymbol")}
              helpText="This shows both status and username simultaneously with @ symbol"
            />
          )}
          {filterSettings(
            "Visible Server Banner",
            "Keeps server banner visible while scrolling through channels",
          ) && (
            <SettingsToggle
              label="Visible Server Banner"
              description="Keeps server banner visible while scrolling through channels"
              value={settings.VisibleServerBanner}
              onChange={() => handleToggle("VisibleServerBanner")}
              helpText="This keeps the server banner visible while scrolling through channels"
            />
          )}
          {filterSettings(
            "Colored Message Pills",
            "Colors the message pills based on mentions and new posts",
          ) && (
            <SettingsToggle
              label="Colored Message Pills"
              description="Colors the message pills based on mentions and new posts"
              value={settings.ColoredMessagePills}
              onChange={() => handleToggle("ColoredMessagePills")}
              helpText="This colors the message pills based on mentions and new posts:
              • Blue pill for new posts
              • Red pill for mentions"
            />
          )}
          {filterSettings(
            "Modern Audio",
            "Updates the appearance of audio attachments",
          ) && (
            <SettingsToggle
              label="Modern Audio"
              description="Updates the appearance of audio attachments"
              value={settings.ModernAudio}
              onChange={() => handleToggle("ModernAudio")}
              helpText="This updates the appearance of audio attachments"
            />
          )}
          {filterSettings(
            "Reveal Dark Usernames",
            "Makes dark usernames visible when hovering over them",
          ) && (
            <SettingsToggle
              label="Reveal Dark Usernames"
              description="Makes dark usernames visible when hovering over them"
              value={settings.RevealDarkUsernames}
              onChange={() => handleToggle("RevealDarkUsernames")}
              helpText="This makes dark usernames visible when hovering over them"
            />
          )}
          {filterSettings(
            "Reposition App Launcher",
            "Moves the app launcher above the chat input to avoid muscle memory conflicts",
          ) && (
            <SettingsToggle
              label="Reposition App Launcher"
              description="Moves the app launcher above the chat input to avoid muscle memory conflicts"
              value={settings.RepositionAppLauncher}
              onChange={() => handleToggle("RepositionAppLauncher")}
              helpText="This moves the app launcher above the chat input to avoid muscle memory conflicts"
              previewAfter="https://arcane.kitties.cat/assets/essentials/repositionapplauncher-before.png"
              previewBefore="https://arcane.kitties.cat/assets/essentials/repositionapplauncher-after.png"
              onPreviewClick={handlePreviewClick}
            />
          )}
          {filterSettings(
            "Remove App Launcher",
            "Removes the new app launcher button entirely",
          ) && (
            <SettingsToggle
              label="Remove App Launcher"
              description="Removes the new app launcher button entirely"
              value={settings.RemoveAppLauncher}
              onChange={() => handleToggle("RemoveAppLauncher")}
              helpText="This removes the new app launcher button entirely"
            />
          )}
          {filterSettings(
            "Left Favorite Button",
            "Moves the favorite button back to the left in GIF search",
          ) && (
            <SettingsToggle
              label="Left Favorite Button"
              description="Moves the favorite button back to the left in GIF search"
              value={settings.LeftFavButton}
              onChange={() => handleToggle("LeftFavButton")}
              previewBefore="https://arcane.kitties.cat/assets/essentials/leftfavbutton-before.png"
              previewAfter="https://arcane.kitties.cat/assets/essentials/leftfavbutton-after.png"
              onPreviewClick={handlePreviewClick}
            />
          )}
          {filterSettings(
            "Minimal Searchbar",
            "Condenses the searchbar into an icon when not in use",
          ) && (
            <SettingsToggle
              label="Minimal Searchbar"
              description="Condenses the searchbar into an icon when not in use"
              value={settings.MinimalSearchbar}
              onChange={() => handleToggle("MinimalSearchbar")}
              helpText="This condenses the searchbar into an icon when not in use"
            />
          )}
          {filterSettings(
            "Message Bar Grey Emoji",
            "Replaces full-color emojis with outline-only emojis in the message bar placeholder",
          ) && (
            <SettingsToggle
              label="Message Bar Grey Emoji"
              description="Replaces full-color emojis with outline-only emojis in the message bar placeholder"
              value={settings.MessageBarGreyEmoji}
              onChange={() => handleToggle("MessageBarGreyEmoji")}
              helpText="This replaces full-color emojis with outline-only emojis in the message bar placeholder"
            />
          )}
          {filterSettings(
            "Minimal Authorised Apps",
            "A minimised look for authorised app cards that expands on hover",
          ) && (
            <SettingsToggle
              label="Minimal Authorised Apps"
              description="A minimised look for authorised app cards that expands on hover"
              value={settings.MinimalAuthorisedApps}
              onChange={() => handleToggle("MinimalAuthorisedApps")}
              helpText="This provides a minimised look for authorised app cards that expands on hover"
            />
          )}
          {filterSettings(
            "Slideover Servers",
            "Turns the server list into a grid that slides out on hover",
          ) && (
            <SettingsToggle
              label="Slideover Servers"
              description="Turns the server list into a grid that slides out on hover"
              value={settings.SlideoverServers}
              onChange={() => handleToggle("SlideoverServers")}
              helpText="This turns the server list into a 2 column grid that slides out on hover"
            />
          )}
          {filterSettings(
            "Collapsible Chat Buttons",
            "Collapses chat bar buttons to save space when writing long messages",
          ) && (
            <SettingsToggle
              label="Collapsible Chat Buttons"
              description="Collapses chat bar buttons to save space when writing long messages"
              value={settings.CollapsibleChatButtons}
              onChange={() => handleToggle("CollapsibleChatButtons")}
              helpText="This collapses chat bar buttons to save space when writing long messages"
            />
          )}
          {filterSettings(
            "Fix Mosaic Zoom",
            "Prevents image previews from being zoomed in",
          ) && (
            <SettingsToggle
              label="Fix Mosaic Zoom"
              description="Prevents image previews from being zoomed in"
              value={settings.FixMosaicZoom}
              onChange={() => handleToggle("FixMosaicZoom")}
              helpText="This prevents image previews from being zoomed in"
            />
          )}
          {filterSettings(
            "Revert GIF Favorite Button Background",
            "Removes the colored background from GIF favorite buttons",
          ) && (
            <SettingsToggle
              label="Revert GIF Favorite Button Background"
              description="Removes the colored background from GIF favorite buttons"
              value={settings.RevertGifFavorite}
              onChange={() => handleToggle("RevertGifFavorite")}
              helpText="This removes the colored background from GIF favorite buttons"
            />
          )}
          {filterSettings(
            "Right Server List",
            "Moves the server list to the right side",
          ) && (
            <SettingsToggle
              label="Right Server List"
              description="Moves the server list to the right side"
              value={settings.RightServerList}
              onChange={() => handleToggle("RightServerList")}
              helpText="This moves the server list to the right side"
            />
          )}
          {filterSettings(
            "Right Channel List",
            "Moves the channel list to the right side (may have issues with forums)",
          ) && (
            <SettingsToggle
              label="Right Channel List"
              description="Moves the channel list to the right side (may have issues with forums)"
              value={settings.RightChannelList}
              onChange={() => handleToggle("RightChannelList")}
              helpText="This moves the channel list to the right side"
            />
          )}
          {filterSettings(
            "Left Member List",
            "Moves the member list to the left side",
          ) && (
            <SettingsToggle
              label="Left Member List"
              description="Moves the member list to the left side"
              value={settings.LeftMemberList}
              onChange={() => handleToggle("LeftMemberList")}
              helpText="This moves the member list to the left side"
            />
          )}
          {filterSettings(
            "Channel-Style Servers",
            "Makes the server list look more like the channel list",
          ) && (
            <SettingsToggle
              label="Channel-Style Servers"
              description="Makes the server list look more like the channel list"
              value={settings.ChannelServers}
              onChange={() => handleToggle("ChannelServers")}
              helpText="This makes the server list look more like the channel list"
            />
          )}
          {filterSettings(
            "Dual-Line Chatbox",
            "Splits the chatbox into two rows, with buttons on bottom row",
          ) && (
            <SettingsToggle
              label="Dual-Line Chatbox"
              description="Splits the chatbox into two rows, with buttons on bottom row"
              value={settings.DualLineChatbox}
              onChange={() => handleToggle("DualLineChatbox")}
              helpText="This splits the chatbox into two rows, with buttons on the bottom row"
            />
          )}

      </div>
    </div>
  );
}

module.exports = InterfaceSection; 