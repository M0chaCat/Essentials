const createTweak = require('../utils/createTweak');

module.exports = [
  createTweak({
    id: 'ForumImprovements',
    label: 'Forum Improvements',
    description: 'Enhanced forum layout and functionality',
    section: 'coreUI',
    css: `@import url("https://minidiscordthemes.github.io/Snippets/ForumImprovements/main.css");`,
    helpText: `This improves the layout and functionality of the forum:
• Improved spacing
• Enhanced navigation
• Better organization`,
    previewAfter: "https://arcane.kitties.cat/assets/essentials/forumimprovements-beforeafter.png"
  }),

  createTweak({
    id: 'HideNoPermissionChat',
    label: 'Hide No Permission Chat',
    description: 'Hides chat input when you don\'t have permission to send messages',
    section: 'coreUI',
    css: `[class*=channelTextAreaDisabled] {
      display: none!important;
      opacity: 0!important;
      position: absolute!important;
      height: 0px!important;
      width: 0px!important;
      z-index: 0!important;
    }`
  }),

  createTweak({
    id: 'CollapsibleMessageActions',
    label: 'Collapsible Message Actions',
    description: 'Hides message actions until message is hovered',
    section: 'coreUI',
    css: `[class^=buttonsInner_]:not(:hover)>:is(
      [role=button]:not(:last-child), [class^=separator_]
    ) {
      display: none;
    }`,
    helpText: "This hides message actions until you hover over a message, Hides actions like reactions and replies"
  }),

  createTweak({
    id: 'ChatHeaderServerList',
    label: 'Chat Header Server List',
    description: 'makes the chat header into the server list with horizontal server list',
    section: 'coreUI',
    css: `
      @import url("https://discordstyles.github.io/HorizontalServerList/dist/HorizontalServerList.css");
      @import url(https://raw.githubusercontent.com/SEELE1306/CSS-Snippets/refs/heads/main/Snippets/ToolbarHide/import.css);
      :root {
        --tb-width: 370px;
        --HSL-server-icon-size: 40px;  /* Size of the server icons | DEFAULT: 40px */
        --HSL-server-spacing: 10px;  /* Spacing between each server icon | DEFAULT: 10px */
        --HSL-server-direction: column; /* Direct of the server list. | Options: column, column-reverse | DEFAULT: column */
      }
      [class^="title_"] {
        max-height: 0px !important;
        min-height: 0px !important;
        padding: 0px;
        border: 0px;

        div:not([class^="topic_"]) {
          overflow: visible !important;
        }

        [class^="children_"]::after {
          display: none;
        }
      }

      [class^="titleWrapper_"],
      [class^="title_"] [class^="divider_"],
      [class^="title_"] [class^="children_"] > [class^="iconWrapper_"] {
        display: none;
      }
      [class^="topic_"] {
      display: none!important;
      }

      html:has([class^="toolbar_"]:hover) [class^="topic_"], [class^="topic_"]:hover {
        position: absolute;
        top: 0px;
        left: calc(100vw - var(--tb-width) - var(--tb-width) / 1.5 - 10px);
        width: calc(var(--tb-width) + 10px);
        overflow: hidden !important;
        background-color: var(--background-tertiary);
        padding: 5px;
        display: block!important;
        border-bottom-left-radius: 8px;
      }

      [class^="toolbar_"] {
        position: absolute;
        top: calc(var(--HSL-server-icon-size) / -1 - 4px);
        left: calc(100% - 12px);
        height: 32px;
        width: 0px;
        &::before {
          position: absolute;
          top: -1px;
        }

        &:hover::before {
          padding: calc(var(--HSL-server-icon-size) / 2.5);
          padding-left: var(--tb-width) !important;
        }

      }

      [class^="footer_"] {
        height: calc(var(--HSL-server-icon-size) * 2.5 );
        transition: height 150ms ease 0s;
      }

      html:has([class^="toolbar_"]:hover) [class^="footer_"] {
        max-height: var(--tb-width) !important;
        min-height: var(--tb-width) !important;
      }

      [class^="footer_"] [class^="listItem_"] {
        display: none;
      }

      [class^="unreadMentionsIndicatorBottom_"] {
        transition: padding-bottom 150ms ease 0s;
      }

      html:has([class^="toolbar_"]:hover) [class^="unreadMentionsIndicatorBottom_"] {
        padding-bottom: calc(var(--tb-width) - 50px) !important;
      }

      [class^="children_"]:has(div>[class^="avatar_"]) {
        display: none;
      }

      [class*="base"], [class^="chat_"] {
          overflow: visible!important;
      }
      [href="https://support.discord.com"] {
        display: none;
      }
    `,
    helpText: "removes the chat header and makes it into the server list with horizontal server list, while additionally removing the help and discover button because they are useless"
  }),

  createTweak({
    id: 'HorizontalServerList',
    label: 'Horizontal Server List',
    description: 'Makes the server list horizontal at the top',
    section: 'coreUI',
    css: `@import url("https://discordstyles.github.io/HorizontalServerList/dist/HorizontalServerList.css");`,
    helpText: "This makes the server list horizontal and at the top"
  }),

  createTweak({
    id: 'CollapsibleMessageActionsAlt',
    label: 'Collapsible Message Actions (Shift)',
    description: 'Hides message actions until message is hovered or shift is held',
    section: 'coreUI',
    css: `[class^=buttonsInner_]:not(:hover, :has([d^="M16.32 14.72a1 1 0 0 1"]))>:is(
      [role=button]:not(:last-child), [class^=separator_]
    ) {
      display: none;
    }`,
    helpText: "This hides message actions until you hover over a message or hold shift, Hides actions like reactions and replies"
  }),

  createTweak({
    id: 'BetterMessageButtons',
    label: 'Better Message Buttons',
    description: 'Organizes message buttons in a grid with Reply and Edit separated',
    section: 'coreUI',
    css: `@import url("https://raw.githubusercontent.com/Andrew6rant/Discord-plugins-and-themes/refs/heads/main/BetterMessageButtons.theme.css");`,
    helpText: "This organizes message buttons in a grid layout where buttons are grouped together",
    previewBefore: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-before.png",
    previewAfter: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-after.png"
  }),

  createTweak({
    id: 'BetterMessageButtonsAlt',
    label: 'Better Message Buttons (Alt)',
    description: 'Same as above, but also separates the Forward button',
    section: 'coreUI',
    css: `@import url("https://raw.githubusercontent.com/Andrew6rant/Discord-plugins-and-themes/refs/heads/main/BetterMessageButtonsAlternate.theme.css");`,
    helpText: "Same as above, but also separates the Forward button",
    previewBefore: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-before.png",
    previewAfter: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttonsalt-after.png"
  }),

  createTweak({
    id: 'MoveForwardButton',
    label: 'Move Forward Button',
    description: 'Reorders message buttons to preserve muscle memory',
    section: 'coreUI',
    css: `.buttonsInner_d5deea {
      display: flex;
      flex-direction: row;
    }
    .hoverBarButton_e986d9[aria-label="Forward"] {
      order: 1;
      margin-right: 2px;
    }
    .hoverBarButton_e986d9[aria-label="Edit"] {
      order: 2;
    }
    .hoverBarButton_e986d9[aria-label="Add Reaction"] {
      order: 2;
    }
    .hoverBarButton_e986d9[aria-label="Reply"] {
      order: 3;
    }
    .hoverBarButton_e986d9[aria-label="More"] {
      order: 4;
    }`,
    helpText: "This reorders message buttons to put the Reply button where it used to be",
    previewBefore: "https://arcane.kitties.cat/assets/essentials/moveforwardbutton-before.png",
    previewAfter: "https://arcane.kitties.cat/assets/essentials/moveforwardbutton-after.png"
  }),

  createTweak({
    id: 'RemoveForwardButton',
    label: 'Remove Forward Button',
    description: 'Completely removes the Forward button from message actions',
    section: 'coreUI',
    css: `.hoverBarButton_e986d9[aria-label="Forward"] {
      display: none !important;
    }`,
    helpText: "This removes the useless Forward button from message actions"
  }),

  createTweak({
    id: 'RemoveSettingsAds',
    label: 'Remove Settings Ads',
    description: 'Removes Nitro and Boost tabs from settings',
    section: 'coreUI',
    css: `div.side_a0 > div.item_a0[data-tab-id="Discord Nitro"] {
      display: none !important;
    }
    div.side_a0 > div.item_a0[data-tab-id="Nitro Server Boost"] {
      display: none !important;
    }`,
    helpText: "This removes Nitro and Boost tabs from the settings menu"
  }),

  createTweak({
    id: 'EfficientSettings',
    label: 'Efficient Settings',
    description: 'Shortens the right-click settings menu by hiding options that just open the full settings menu',
    section: 'coreUI',
    css: `@import url("https://minidiscordthemes.github.io/Snippets/EfficientSettings/main.css");`,
    helpText: "This shortens the right-click settings menu by hiding options that just open the full settings menu"
  }),

  createTweak({
    id: 'DisableSuperReactionAd',
    label: 'Disable Super Reaction Ad',
    description: 'Prevents the Super Reaction popup from appearing when clicking reactions',
    section: 'coreUI',
    css: `.reaction_fef95b[style*="background"] {
      pointer-events: none;
    }`,
    helpText: "This prevents the Super Reaction popup from appearing"
  }),

  createTweak({
    id: 'HidePinDiscovery',
    label: 'Hide Pinned Discovery',
    description: 'Hides the new pinned Discovery Icon',
    section: 'coreUI',
    css: `@import url("https://raw.githubusercontent.com/KrstlSkll69/vc-snippets/main/OtherStuff/hideGlobalDiscovery.css");`,
    helpText: "This hides the new pinned Discovery Icon"
  }),

  createTweak({
    id: 'RightServerList',
    label: 'Right Server List',
    description: 'Moves the server list to the right side',
    section: 'coreUI',
    css: `
      [class*="wrapper_"][class*="guilds_"] { /*Server bar*/
        order: 1;
      }

      [class^="listItem_"] [class*="pill_"][class*="wrapper_"] { /*Server unread mention*/
        left: initial;
        right: 0;
      }
      
      [class^="listItem_"] [class*="pill_"][class*="wrapper_"] [class^="item_"] {
        border-radius: 4px 0 0 4px;
        margin-left: 4px;
      }
    `,
    helpText: 'This moves the server list to the right side'
  }),

  createTweak({
    id: 'RightChannelList',
    label: 'Right Channel List', 
    description: 'Moves the channel list to the right side (may have issues with forums)',
    section: 'coreUI',
    css: `
      [class^="sidebar_"] { /*Channel bar*/
        order: 1;
      }

      [class^="base_"] [class^="chatLayerWrapper_"] [class^="container_"] { /*slightly fixes forums when switching channel list*/
        margin-right: 240px;
      }
    `,
    helpText: 'This moves the channel list to the right side'
  }),

  createTweak({
    id: 'LeftMemberList',
    label: 'Left Member List',
    description: 'Moves the member list to the left side',
    section: 'coreUI',
    css: `
      [class^="chat_"] [class^="content"]:has([class*="chatContent_"]) { /*Member list*/
        flex-direction: row-reverse;
      }
      
      [class^="chat_"] [class^="content"]:has([data-list-id*="forum-channel-list"]) { /*channel list*/
        flex-direction: row-reverse;
      }

      [class^="base_"] [class^="content_"] div:not([class]) { /*Slightly fixes forums when switching member list*/
        min-width: 0 !important;
      }
    `,
    helpText: 'This moves the member list to the left side'
  }),

  createTweak({
    id: 'ChannelServers',
    label: 'Channel-Style Servers',
    description: 'Makes the server list look more like the channel list',
    section: 'coreUI',
    css: `
      @import url("https://dablulite.github.io/css-snippets/ServersList/import.css");
      :root {
        --guild-list-width: 290px;
        --guild-list-height: 48px;
        --guild-item-radius: 50px;
        --guild-item-spacing: 8px;
        --guild-item-font-size: 16px;
      }
    `,
    helpText: 'This makes the server list look more like the channel list'
  }),

]; 