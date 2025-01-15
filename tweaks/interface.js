const createTweak = require('../utils/createTweak');

module.exports = [
  createTweak({
    id: 'AccountSettingsRefresh',
    label: 'Account Settings Refresh',
    description: 'A fresh take on the Account Settings area',
    section: 'interface',
    css: `@import url("https://dablulite.github.io/css-snippets/AccountSettingsRefresh/import.css");`,
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
    css: `@import url('https://ukriu.github.io/cssCord/Other/gradientDM.css');
    @import url('https://ukriu.github.io/cssCord/Other/gradientML.css');
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
    css: `@import url("https://dablulite.github.io/css-snippets/AccountDetailsGrid/import.css");`,
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
    css: `@import url("https://raw.githubusercontent.com/KrstlSkll69/vc-snippets/main/OtherStuff/RecolorAddFriendsTab.css");`,
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

  createTweak({
    id: 'RevertGifFavoriteButton',
    label: 'Revert GIF Favorite Button',
    description: 'Reverts the GIF Favorite button having color.',
    section: 'interface',
    css: `[class*='gifFavoriteButton_'] {
    background-color: transparent;
}`,
    helpText: "Reverts the GIF Favorite button having color."
  }),

    
  createTweak({
    id: 'HideProfileNitroAd',
    label: 'Hide Profile Nitro Ad',
    description: 'Hide Discord Nitro ad from your profile page',
    section: 'interface',
    css: `[data-list-item-id*="_get-premium"] {
  display: none;
}
[class*="menuDivider_"]:has(+[data-list-item-id*="_get-premium"])
 {
  display: none;
}`,
    helpText: "This hides the Discord Nitro ad from your profile page (you might not have it, its an A/B test rn)"
  }),

  createTweak({
    id: 'HideQuests',
    label: 'Hide Quests',
    description: 'Hides the Quest ad next to the profile button',
    section: 'interface',
    css: `section[class^="panels_"]>div[class^="mask_"] {
    display: none;
}`,
    helpText: "This hides the Quest ad next to the profile button on the bottom, if you dont see ignore this tweak!"
  }),

  createTweak({
    id: 'LeftGifPicker',
    label: 'Left GIF Picker',
    description: 'Moves the GIF picker to the left side',
    section: 'interface',
    css: `
      .layerContainer_d5a653 > .layer_ec16dd {
        left: 0 !important;
        right: unset !important;
        transform: translateX(0) !important;
      }
      .positionContainer_af5dbb {
        left: 0 !important;
        right: unset !important;
      }
      .drawerSizingWrapper_af5dbb {
        right: unset !important;
        left: 0 !important;
      }
      [class*="layerContainer-"] > [class*="layer-"] {
        left: 0 !important;
        right: unset !important;
        transform: none !important;
      }
    `,
    helpText: "This moves the GIF/emoji/sticker picker to the left side of the window"
  }),

  createTweak({
    id: 'VisibleServerBanner',
    label: 'Visible Server Banner',
    description: 'Keeps server banner visible while scrolling through channels',
    section: 'interface',
    css: `/*     Visible Server Banner     */
[class^="container_"]:not([class*="bannerVisible_"]) >
[class^="animatedContainer_"] {
  top: 3px;
}
[class*="animatedContainer_"] {
  opacity: 1 !important;
}
[class*="headerContent_"] {
  filter: drop-shadow(0 1px 1px var(--bg-backdrop));
}
/* AMOLEDCord fix */
[class^="sidebar_"] header {
  background-color: transparent !important;
}`,
    helpText: "This keeps the server banner visible while scrolling through channels"
  }),

  createTweak({
    id: 'ColoredMessagePills',
    label: 'Colored Message Pills',
    description: 'Colors the message pills based on mentions and new posts',
    section: 'interface',
    css: `/*     Blue Pill      */
[class^="iconVisibility_"]:has([style="color: var(--text-brand);"]) > [class^="unread_"] {
  background-color: var(--text-brand);
}
/*     Red Pill      */
[class^="iconVisibility_"]:has([class^="mentionsBadge_"]) > [class^="unread_"] {
  background-color: var(--status-danger);
}`,
    helpText: "This colors the message pills based on mentions and new posts:\n• Blue pill for new posts\n• Red pill for mentions"
  }),

  createTweak({
    id: 'SlideoverServers',
    label: 'Slideover Servers',
    description: 'Turns the server list into a grid that slides out on hover',
    section: 'interface',
    css: `@import url("https://raw.githubusercontent.com/Andrew6rant/Discord-plugins-and-themes/refs/heads/main/SlideoverServers.theme.css");`,
    helpText: "This turns the server list into a 2 column grid that slides out on hover"
  }),

  createTweak({
    id: 'CollapsibleChatButtons',
    label: 'Collapsible Chat Buttons',
    description: 'Collapses chat bar buttons to save space when writing long messages',
    section: 'interface',
    css: `      .buttons_ce5b56 {
        margin: 6px 6px 6px auto !important;
        margin-left: auto;
        max-width: calc(40px * 7); /* 7 columns when expanded: emoji, gif, sticker, gift, upload, soundboard, apps */
        min-width: calc(40px * 2); /* 2 columns when collapsed */
        width: min-content;
        display: flex;
        gap: 6px 0;
        flex-wrap: wrap-reverse;
        flex-grow: 1;
        height: fit-content;
        justify-content: right;
      }
      .buttons_ce5b56 .buttonContainer__8b164,
      .buttons_ce5b56 > .button_afdfd9 {
        width: 40px;
      }
      .separator__8424b {
        margin: 0;
        justify-content: center;
        width: 40px;
      }
      .separator__8424b::before {
        display: none;
      }
      .separator__8424b .innerButton_debeee {
        margin: 0;
      }
      .textArea__74543 {
        width: fit-content;
        flex-grow: 1.01;
      }`,
    helpText: "This collapses chat bar buttons to save space when writing long messages"
  }),

  createTweak({
    id: 'ModernAudio',
    label: 'Modern Audio',
    description: 'Updates the appearance of audio attachments',
    section: 'interface',
    css: `[class^="mosaicItem"] > [class^="wrapperAudio"] > [class^="audioMetadata"] {
        margin-bottom: 24px;
      }
      
      [class^="mosaicItem"] > [class^="wrapperAudio"] > [class^="audioControls"] {
        position: absolute;
        bottom: 0px;
        left: 0px;
        border-radius: 0px 0px 8px 8px;
      }`,
    helpText: "This updates the appearance of audio attachments"
  }),

  createTweak({
    id: 'RevealDarkUsernames',
    label: 'Reveal Dark Usernames',
    description: 'Makes dark usernames visible when hovering over them',
    section: 'interface',
    css: `      /* Handle dark usernames */
      [style^="color: rgb(5, 0, 5);"] {
        [class*=username_]& {
          [id^=chat-messages]:hover &, /* chat messages */
          [class^=member_]:hover &, /* members list */
          [class^=membersGroup_]:hover & /* members list headers */ {
            color: var(--text-normal) !important;
          }
        }
        
        .mention&:hover /* mentions */,
        [class^=channelTextArea_] [class^=wrapper_]&:hover /* mentions in chat bar */ {
          color: var(--text-normal) !important;
          background-color: color-mix(in srgb, var(--text-normal) 20%, transparent) !important;
        }
      }`,
    helpText: "This makes dark usernames visible when hovering over them"
  }),

  createTweak({
    id: 'FixMosaicZoom',
    label: 'Fix Mosaic Zoom',
    description: 'Prevents image previews from being zoomed in',
    section: 'interface',
    css: `[class^="imageWrapper_"] img[class^="lazyImg"] {
        object-fit: contain !important;
      }`,
    helpText: "This prevents image previews from being zoomed in"
  }),
]; 