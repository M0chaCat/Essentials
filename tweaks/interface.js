const createTweak = require('../utils/createTweak');

module.exports = [
  createTweak({
    id: 'AccountSettingsRefresh',
    label: 'Account Settings Refresh',
    description: 'A fresh take on the Account Settings area',
    section: 'interface',
    css: `.field_b69b77 {
        display: flex;
    flex-direction: row;
    justify-content: start;
    padding: 11px 8px;
    padding-left: 11px;
    gap: 5px;
    box-sizing: border-box;
    min-height: 56px;
    align-items: center;
    border-radius: 4px;
    transition: none;
    background-color: var(--background-secondary);
    color: var(--header-primary);
    margin: 0;
}
.field_b69b77:hover {
    background-color: var(--background-modifier-hover);
}
.visual-refresh .field_b69b77 {
    background: var(--bg-mod-faint);
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,10%) !important;
    transition: background-color 0.1s ease-in-out,
        border-color 0.1s ease-in-out;
}
.visual-refresh .field_b69b77:hover {
    background-color: var(--bg-mod-subtle);
}
.fieldList_b69b77 {
        position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 8px;
    width: 100%;
    scrollbar-width: none !important;
    box-sizing: border-box;
    overflow: hidden auto;
    background-color: transparent;
    border-radius: 0;
}
.fieldTitle_b69b77 {
    margin-bottom: 0;
}
.background_b69b77 {
    background-color: transparent;
    margin: 0;
}
.accountProfileCard_b69b77 {
    box-shadow: var(--legacy-elevation-border), var(--legacy-elevation-high);
    background-color: var(--modal-background);
    border-radius: 4px;
}
.visual-refresh .accountProfileCard_b69b77 {
    border-radius: var(--radius-md);
    background-color: var(--bg-base-primary);
    border: 1px solid var(--border-subtle);
}
.fieldButton_b69b77 {
    color: var(--white-500) !important;
    background-color: var(--button-secondary-background);
    transition: background-color var(--custom-button-transition-duration)ease,color var(--custom-button-transition-duration)ease;
}
.fieldButton_b69b77:hover {
    color: var(--white-500) !important;
    background-color: var(--button-secondary-background-hover);
}
.fieldButton_b69b77 > .contents_dd4f85 {
    background-image: none;
}
:where(.visual-refresh) .fieldButton_b69b77 {
    border: 1px solid rgba(255,255,255,.1);
    transition-duration: .3s;
}
`,
    helpText: "This provides a fresh look at the Account Settings area, with a new layout",
    previewBefore: "https://arcane.kitties.cat/assets/essentials/accountsettingsrefresh-before.png",
    previewAfter: "https://arcane.kitties.cat/assets/essentials/accountsettingsrefresh-after.png"
  }),

  createTweak({
    id: 'AppearanceTabImprovements',
    label: 'Appearance Tab Improvements',
    description: 'Better organized appearance settings',
    section: 'interface',
    css: `div[id="appearance-tab"] div [class*=children] {
      div[tabindex="-1"] { order: 0; }
      div[class*=marginTop8_]:nth-of-type(3) { order: 1; }
      div[class*=marginTop8_]:nth-of-type(2) { order: 3; }
      div[class*=marginTop20_] { order: 10; }
    }
    div[id="appearance-tab"] {
      div[aria-label="Exclusive to Nitro"] svg[class*=nitroWheel],
      h3[data-text-variant="text-sm/normal"],
      h3[aria-label="Color"] { display: none; }
    }`,
    helpText: "This improves the appearance of the Appearance Tab with a Better layout and improved organization"
  }),

  createTweak({
    id: 'GradientDMs',
    label: 'Gradient DMs',
    description: 'Adds gradient backgrounds to DM list and member list based on status',
    section: 'interface',
    css: `:root {
    --gDM-online: linear-gradient(to right, rgb(68, 105, 68) , transparent);
    --gDM-offline: linear-gradient(to right, rgb(66, 66, 66) , transparent);
    --gDM-dnd: linear-gradient(to right, rgb(130,70,70) , transparent);
    --gDM-idle: linear-gradient(to right, rgb(135, 105, 75) , transparent);
    --gDM-streaming: linear-gradient(to right, rgb(63, 33, 88) , transparent);
    --gDM-border-radius: 12px;
}

ul > li > [class*="interactive_"] {
    border-radius: var(--gDM-border-radius);
    margin: 0.3px;
}

[class^="link_"]:has([mask*="online"], [fill="#23a55a"]) {
    background: var(--gDM-online);
}
[class^="link_"]:has([mask*="offline"], [fill="#80848e"]) {
    background: var(--gDM-offline);
}
[class^="link_"]:has([mask*="dnd"], [fill="#f23f43"]) {
    background: var(--gDM-dnd);
}
[class^="link_"]:has([mask*="idle"], [fill="#f0b232"]) {
    background: var(--gDM-idle);
}
[class^="link_"]:has([mask*="streaming"], [fill="#3f2158"]) {
    background: var(--gDM-streaming);
}

    :root {
    --gDM-online: linear-gradient(to right, rgb(68, 105, 68) , transparent);
    --gDM-offline: linear-gradient(to right, rgb(66, 66, 66) , transparent);
    --gDM-dnd: linear-gradient(to right, rgb(130,70,70) , transparent);
    --gDM-idle: linear-gradient(to right, rgb(135, 105, 75) , transparent);
    --gDM-streaming: linear-gradient(to right, rgb(63, 33, 88) , transparent);
    --gDM-border-radius: 12px;
}

div > [class*="layout_"] {
    border-radius: var(--gDM-border-radius);
    margin: 0.3px;
}

[class^="memberInner"]:has([mask*="online"], [fill="#23a55a"]) {
    background: var(--gDM-online);
}
[class^="memberInner"]:has([mask*="offline"], [fill="#f0b232"]) {
    background: var(--gDM-offline);
}
[class^="memberInner"]:has([mask*="dnd"], [fill="#f23f43"]) {
    background: var(--gDM-dnd);
}
[class^="memberInner"]:has([mask*="idle"], [fill="#f0b232"]) {
    background: var(--gDM-idle);
}
[class^="memberInner"]:has([mask*="streaming"], [fill="#3f2158"]) {
    background: var(--gDM-streaming);
}

    :root {
      --gDM-online: linear-gradient(to right, rgb(68, 105, 68) , transparent);
      --gDM-offline: linear-gradient(to right, rgb(66, 66, 66) , transparent);
      --gDM-dnd: linear-gradient(to right, rgb(130,70,70) , transparent);
      --gDM-idle: linear-gradient(to right, rgb(135, 105, 75) , transparent);
      --gDM-streaming: linear-gradient(to right, rgb(63, 33, 88) , transparent);
      --gDM-border-radius: 12px;
    }`
  }),

  createTweak({
    id: 'AccountDetailsGrid',
    label: 'Account Details Grid',
    description: 'Reorganizes the account details panel into a grid layout',
    section: 'interface',
    css: ``,
    helpText: "This reorganizes the account details panel into a grid layout"
  }),

  createTweak({
    id: 'HidePlayAgain',
    label: 'Hide Play Again',
    description: 'Hides the Play Again section in DMs',
    section: 'interface',
    css: `[data-list-id^=private-channels] [class^=container_]:has(> [class^=itemContainer_] [class^=clickable_][aria-label]) {
      display: none;
    }`,
    helpText: "This hides the Play Again section in DMs"
  }),

  createTweak({
    id: 'FullServerTooltips',
    label: 'Full Server Tooltips',
    description: 'Shows the complete server name in tooltips without line breaks',
    section: 'interface',
    css: `[class^=tooltip] {
      max-width: unset !important;
    }`,
    helpText: "This shows the complete server name in tooltips without line breaks"
  }),

  createTweak({
    id: 'CenteredChannelNames',
    label: 'Centered Channel Names',
    description: 'Centers channel names in the header',
    section: 'interface',
    css: `[class^="children_"]:not(:has([class^="topic_"])) [class^="titleWrapper_"] {
      width: 100%;
      > h1 {
        justify-content: center;
      }
    }
    [class^="children_"]:has(.topic_bf3bbb) [class^="titleWrapper_"] {
      width: 50%;
      > h1 {
        justify-content: flex-end;
      }
    }
    [class^="title_"] [class^="children_"] [class^="iconWrapper_"] {
      display: none;
    }`,
    helpText: "This centers channel names in the header, and hides channel descriptions"
  }),

  createTweak({
    id: 'RecolorAddFriendsTab',
    label: 'Recolor Add Friends Tab',
    description: "This Snippet fixes the 'Add Friend' so it match's the other tabs",
    section: 'interface',
    css: `/**
* @name RecolorAddFriendsTab
* @author krystalskullofficial
* @version 2.0
* @description Recolors the Add Friends Tab on discord *(because being able to add people isnt that important)*
*/
[data-tab-id=ADD_FRIEND]{
    background-color: var(--background-color) !important;
    color: var(--interactive-normal) !important;
}
[data-tab-id=ADD_FRIEND]:hover{
    background-color: var(--background-modifier-hover) !important;
    color: var(--interactive-hover) !important;
}
[data-tab-id=ADD_FRIEND][aria-selected=true]{
    background-color: var(--background-modifier-selected) !important;
    color: var(--interactive-active) !important;
}
[data-tab-id=ADD_FRIEND][aria-selected=true]:hover{
    background-color: var(--background-modifier-hover) !important;
    color: var(--interactive-active) !important;
}`,
    helpText: "This changes the 'Add Friend' so it match's the other tabs"
  }),

  createTweak({
    id: 'BetterPickers',
    label: 'Better Pickers',
    description: 'Changes purple to grey in the soundboard and emoji picker',
    section: 'interface',
    css: `[class^=lockedEmoji_]:has(+[class*=emojiLockIconContainer_]),
    [class*=categorySectionNitroLocked_] [class*=emojiItem_]>img,
    [class*=soundRowNitroLocked_] [class^=soundButton_] {
      filter: grayscale(1) brightness(0.75);
    }
    [class^=emojiLockIconContainer_],
    [class^=picker_] [class^=sectionFooter_],
    :is(#emoji-picker-tab-panel, [class^=picker_]) :is(
      [class^=upsellContainer_],
      [class^=nitroBottomDivider_],
      [class^=categoryItemLockIconContainer_]
    ) {
      display: none;
    }`,
    helpText: "This changes the color of the soundboard and emoji picker to fit the theme"
  }),

  createTweak({
    id: 'RepositionAppLauncher',
    label: 'Reposition App Launcher',
    description: 'Moves the app launcher above the chat input to avoid muscle memory conflicts',
    section: 'interface',
    css: `      .channelTextArea_a7d72e {
        position: relative;
      }

      .channelAppLauncher_df39bd {
        position: absolute;
        top: -50px;
        right: 16px;
      }`,
    helpText: "This moves the app launcher above the chat input to avoid muscle memory conflicts",
    previewBefore: "https://arcane.kitties.cat/assets/essentials/repositionapplauncher-before.png",
    previewAfter: "https://arcane.kitties.cat/assets/essentials/repositionapplauncher-after.png"
  }),

  createTweak({
    id: 'RemoveAppLauncher',
    label: 'Remove App Launcher',
    description: 'Removes the new app launcher button entirely',
    section: 'interface',
    css: `      [class*=channelAppLauncher_] {
        display: none;
      }`,
    helpText: "This removes the new app launcher button entirely"
  }),

  createTweak({
    id: 'LeftFavButton',
    label: 'Left Favorite Button',
    description: 'Moves the favorite button back to the left in GIF search',
    section: 'interface',
    css: `[class*='result_'] [class*='favButton'] {
        right: unset;
      }`,
    previewBefore: "https://arcane.kitties.cat/assets/essentials/leftfavbutton-before.png",
    previewAfter: "https://arcane.kitties.cat/assets/essentials/leftfavbutton-after.png"
  }),
]; 