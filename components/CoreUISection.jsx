const React = require("react");
const SettingsToggle = require('../SettingsToggle');
const SectionHeader = require('../SectionHeader');

function CoreUISection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
  return (
    <div className="settings-section mb-16">
      <SectionHeader title="Core UI Improvements" />
      <div className={`${settings.GridView ? "settings-grid" : ""} mt-8`}>
      {filterSettings(
            "Forum Improvements",
            "Enhanced forum layout and functionality",
          ) && (
            <SettingsToggle
              label="Forum Improvements"
              description="Enhanced forum layout and functionality"
              value={settings.ForumImprovements}
              onChange={() => handleToggle("ForumImprovements")}
              helpText="This improves the layout and functionality of the forum:
              • Improved spacing
              • Enhanced navigation
              • Better organization"
              previewAfter="https://arcane.kitties.cat/assets/essentials/forumimprovements-beforeafter.png"
              onPreviewClick={handlePreviewClick}
            />
          )}
          {filterSettings(
            "Hide No Permission Chat",
            "Hides chat input when you don't have permission to send messages",
          ) && (
            <SettingsToggle
              label="Hide No Permission Chat"
              description="Hides chat input when you don't have permission to send messages"
              value={settings.HideNoPermissionChat}
              onChange={() => handleToggle("HideNoPermissionChat")}
            />
          )}
          {filterSettings(
            "Collapsible Message Actions",
            "Hides message actions until message is hovered",
          ) && (
            <SettingsToggle
              label="Collapsible Message Actions"
              description="Hides message actions until message is hovered"
              value={settings.CollapsibleMessageActions}
              onChange={() => handleToggle("CollapsibleMessageActions")}
              helpText="This hides message actions until you hover over a message, Hides actions like reactions and replies"
            />
          )}
          {filterSettings(
            "Chat Header Server List",
            "makes the chat header into the server list with horizontal server list",
          ) && (
            <SettingsToggle
              label="Chat Header Server List"
              description="makes the chat header into the server list with horizontal server list"
              value={settings.ChatHeaderServerList}
              onChange={() => handleToggle("ChatHeaderServerList")}
              helpText="removes the chat header and makes it into the server list with horizontal server list, while additionally removing the help and discover button because they are useless"
            />
          )}
          {filterSettings(
            "Horizontal Server List",
            "Makes the server list horizontal at the top",
          ) && (
            <SettingsToggle
              label="Horizontal Server List"
              description="Makes the server list horizontal at the top"
              value={settings.HorizontalServerList}
              onChange={() => handleToggle("HorizontalServerList")}
              helpText="This makes the server list horizontal and at the top"
            />
          )}
          {filterSettings(
            "Collapsible Message Actions (Shift)",
            "Hides message actions until message is hovered or shift is held",
          ) && (
            <SettingsToggle
              label="Collapsible Message Actions (Shift)"
              description="Hides message actions until message is hovered or shift is held"
              value={settings.CollapsibleMessageActionsAlt}
              onChange={() => handleToggle("CollapsibleMessageActionsAlt")}
              helpText="This hides message actions until you hover over a message or hold shift, Hides actions like reactions and replies"
            />
          )}
          {filterSettings(
            "Better Message Buttons",
            "Organizes message buttons in a grid with Reply and Edit separated",
          ) && (
            <SettingsToggle
              label="Better Message Buttons"
              description="Organizes message buttons in a grid with Reply and Edit separated"
              value={settings.BetterMessageButtons}
              onChange={() => handleToggle("BetterMessageButtons")}
              helpText="This organizes message buttons in a grid layout where buttons are grouped together"
              previewBefore="https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-before.png"
              previewAfter="https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-after.png"
              onPreviewClick={handlePreviewClick}
            />
          )}
          {filterSettings(
            "Better Message Buttons (Alt)",
            "Same as above, but also separates the Forward button",
          ) && (
            <SettingsToggle
              label="Better Message Buttons (Alt)"
              description="Same as above, but also separates the Forward button"
              value={settings.BetterMessageButtonsAlt}
              onChange={() => handleToggle("BetterMessageButtonsAlt")}
              onPreviewClick={handlePreviewClick}
              helpText="Same as above, but also separates the Forward button"
              previewBefore="https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-before.png"
              previewAfter="https://arcane.kitties.cat/assets/essentials/bettermessagebuttonsalt-after.png"
            />
          )}
          {filterSettings(
            "Move Forward Button",
            "Reorders message buttons to preserve muscle memory",
          ) && (
            <SettingsToggle
              label="Move Forward Button"
              description="Reorders message buttons to preserve muscle memory"
              value={settings.MoveForwardButton}
              onChange={() => handleToggle("MoveForwardButton")}
              helpText="This reorders message buttons to put the Reply button where it used to be"
              previewBefore="https://arcane.kitties.cat/assets/essentials/moveforwardbutton-before.png"
              previewAfter="https://arcane.kitties.cat/assets/essentials/moveforwardbutton-after.png"
              onPreviewClick={handlePreviewClick}
            />
          )}
          {filterSettings(
            "Remove Forward Button",
            "Completely removes the Forward button from message actions",
          ) && (
            <SettingsToggle
              label="Remove Forward Button"
              description="Completely removes the Forward button from message actions"
              value={settings.RemoveForwardButton}
              onChange={() => handleToggle("RemoveForwardButton")}
              helpText="This removes the useless Forward button from message actions"
            />
          )}
          {filterSettings(
            "Remove Settings Ads",
            "Removes Nitro and Boost tabs from settings",
          ) && (
            <SettingsToggle
              label="Remove Settings Ads"
              description="Removes Nitro and Boost tabs from settings"
              value={settings.RemoveSettingsAds}
              onChange={() => handleToggle("RemoveSettingsAds")}
              helpText="This removes Nitro and Boost tabs from the settings menu"
            />
          )}
          {filterSettings(
            "Efficient Settings",
            "Shortens the right-click settings menu by hiding options that just open the full settings menu",
          ) && (
            <SettingsToggle
              label="Efficient Settings"
              description="Shortens the right-click settings menu by hiding options that just open the full settings menu"
              value={settings.EfficientSettings}
              onChange={() => handleToggle("EfficientSettings")}
              helpText="This shortens the right-click settings menu by hiding options that just open the full settings menu"
            />
          )}
          {filterSettings(
            "Disable Super Reaction Ad",
            "Prevents the Super Reaction popup from appearing when clicking reactions",
          ) && (
            <SettingsToggle
              label="Disable Super Reaction Ad"
              description="Prevents the Super Reaction popup from appearing when clicking reactions"
              value={settings.DisableSuperReactionAd}
              onChange={() => handleToggle("DisableSuperReactionAd")}
              helpText="This prevents the Super Reaction popup from appearing"
            />
          )}
          {filterSettings(
            "Hide Pinned Discovery",
            "Hides the new pinned Discovery Icon",
          ) && (
            <SettingsToggle
              label="Hide Pinned Discovery"
              description="Hides the new pinned Discovery Icon"
              value={settings.HidePinDiscovery}
              onChange={() => handleToggle("HidePinDiscovery")}
              helpText="This hides the new pinned Discovery Icon"
            />
          )}
      </div>
    </div>
  );
}

module.exports = CoreUISection; 