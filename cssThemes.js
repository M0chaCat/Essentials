module.exports = {
  cssThemes: {
    // UI Improvements
    ForumImprovements: `
      @import url("https://minidiscordthemes.github.io/Snippets/ForumImprovements/main.css");
    `,
    AppearanceTabImprovements: `
      /* Appearance Tab Layout */
      div[id="appearance-tab"] div [class*=children] {
        div[tabindex="-1"] { order: 0; }
        div[class*=marginTop8_]:nth-of-type(3) { order: 1; }
        div[class*=marginTop8_]:nth-of-type(2) { order: 3; }
        div[class*=marginTop20_] { order: 10; }
      }

      /* Hide Unnecessary Elements */
      div[id="appearance-tab"] {
        div[aria-label="Exclusive to Nitro"] svg[class*=nitroWheel],
        h3[data-text-variant="text-sm/normal"],
        h3[aria-label="Color"] { display: none; }
      }
    `,
    HideNoPermissionChat: `
      [class*=channelTextAreaDisabled] {
        display: none!important;
        opacity: 0!important;
        position: absolute!important;
        height: 0px!important;
        width: 0px!important;
        z-index: 0!important;
      }
    `,
    CollapsibleMessageActions: `
      [class^=buttonsInner_]:not(:hover)>:is(
        [role=button]:not(:last-child), [class^=separator_]
      ) {
        display: none;
      }
    `,
    CollapsibleMessageActionsAlt: `
      [class^=buttonsInner_]:not(:hover, :has([d^="M16.32 14.72a1 1 0 0 1"]))>:is(
        [role=button]:not(:last-child), [class^=separator_]
      ) {
        display: none;
      }
    `,
    BetterMessageButtons: `
      @import url("https://raw.githubusercontent.com/Andrew6rant/Discord-plugins-and-themes/refs/heads/main/BetterMessageButtons.theme.css");
    `,
    BetterMessageButtonsAlt: `
     @import url("https://raw.githubusercontent.com/Andrew6rant/Discord-plugins-and-themes/refs/heads/main/BetterMessageButtonsAlternate.theme.css");
    `,
    MinimalSearchbar: `
    @import url("https://minidiscordthemes.github.io/Snippets/MinimalSearchbar/main.css");
   `,
    ButtonHover: `
     /*
       Settings and Upload Button Spin
      */
      button.button_ae40a4 /* make user panel buttons round */ {
          border-radius: 50%;
      }
      .button_ae40a4:last-child /* settings button */, 
      .attachButton__56f98 .attachButtonInner__84c26 /* upload button */,
      .emojiButton_b63c38 .contents__322f4 /* emoji button */,
      .closeButton__8177f /* settings exit button */ {
          transition: transform 1s ease;
      }
      .button_ae40a4:last-child:hover,
      .attachButton__56f98:hover .attachButtonInner__84c26,
      .emojiButton_b63c38:hover .contents__322f4,
      .closeButton__8177f:hover {
         transform: rotate(360deg);
      }
  `,
    MoveForwardButton: `
      .buttonsInner_d5deea {
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
      }
    `,

    // Chat Features
    CustomChatPlaceholder: `
      :root{ --prompt-text: "be silly :3"; }
      [class*=placeholder][class*=slateTextArea] {visibility: hidden;}
      [class*=placeholder][class*=slateTextArea]::before {visibility: visible;content: var(--prompt-text);}
    `,
    CustomChatPlaceholderAlt: `
      :root{ --prompt-text: "be silly, use þ :3"; }
      [class*=placeholder][class*=slateTextArea] {visibility: hidden;}
      [class*=placeholder][class*=slateTextArea]::before {visibility: visible;content: var(--prompt-text);}
    `,
    HideTimestamps: `
      .timestampInline__430cf {
        visibility: hidden;
      }
      .text-md-normal__6e567 .timestampInline__430cf {
        visibility: visible; 
      }
    `,
    ScrollingText: `
      .header_a0:hover .headerText_a0 {
        animation: scrollText 8s linear infinite;
        width: 12rem;
      }
      @keyframes scrollText {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
    `,
    BiggerSummaries: `
      div[class^=topicsScroller_] {
        max-height: calc(100vh - 2.5in);
      }
      :has(> div[class^=topicsScroller_]) {
        width: calc(100% - 8q);
      }
    `,
    IRCTheme: `
      @import url("https://raw.githubusercontent.com/foxf4ce/discord-css/refs/heads/main/irc.css");
      :root {
        --font-code: monospace; /* Optional custom font */

      /* Custom indentation, values represent number of blank spaces from the left */
      --irc-indent: 3;
      --irc-newline-indent: 8;
      --irc-reply-indent: 8;
      --irc-reply-spine-length: 3;
      }
    `,
    ChannelTweaks: `
      @import url("https://aushevahmad.github.io/awesome-css/modules/channeltweaks.css");
    `,

    // Visual Enhancements
    PastelStatuses: `
      rect[fill='#23a55a'], svg[fill='#23a55a'] { fill: #80c968 !important; }
      rect[fill='#f0b232'], svg[fill='#f0b232'] { fill: #e7ca45 !important; }
      rect[fill='#f23f43'], svg[fill='#f23f43'] { fill: #e0526c !important; }
      rect[fill='#80848e'], svg[fill='#80848e'] { fill: #696e88 !important; }
      rect[fill='#593695'], svg[fill='#593695'] { fill: #ac7de6 !important; }
    `,
    LargeEmojis: `
      img[class="emoji otherEmoji_e58351"]:hover {
        transform: scale(320);
      }
    `,
    ReactionAnimations: `
      [class^=reaction_]:not(:has(.burstGlow_ec6b19)) .emoji {
        transition: transform 0.6s ease;
        transform-style: preserve-3d;
      }
      [class^=reaction_]:not(:has(.burstGlow_ec6b19)):hover .emoji {
        animation: flipAndScale 0.6s forwards;
      }
      @keyframes flipAndScale {
        from { transform: rotateY(0deg) scale(1); }
        to { transform: rotateY(360deg) scale(1.5); }
      }
    `,
    CustomNewMemberBadge: `
      [class*=newMemberBadge]:before {
        content: url(https://media.discordapp.net/stickers/1272085262205325352.gif?size=64&quality=lossless);
        transform: translate(-100%, -110%);
        display: inline-block;
        scale: 0.32;
      }
    `,
    ProfileThemeMatching: `
      .custom-profile-theme [class^=statusBubble_] [class^=defaultColor_] {
        color: var(--theme-text-color-dark) !important;
      }
      .custom-profile-theme [class^=statusBubble_],
      .custom-profile-theme [class^=statusBubbleOuter_]:before,
      .custom-profile-theme [class^=statusBubbleOuter_]:after {
        background-color: var(--profile-gradient-button-color) !important;
      }
    `,
    RevertProfiles: `
      @import url("https://raw.githubusercontent.com/Bitslayn/RepluggedAddons/main/themes/btw.bitslayn.revertProfiles/raw/main.css");
    `,
    CoolCodeBlocks: `
      @import url("https://github.com/senshastic/SneshCord/raw/refs/heads/master/Font%20packs/SneshCodeBlocks.css");
    `,

    // Username Customization
    UsernameSymbol: `
      @import url("https://raw.githubusercontent.com/ColynOrg/CSS-Snippets/main/UsernameSymbol.css");
    `,
    HidePlayAgain: `
      [data-list-id^=private-channels] [class^=container_]:has(> [class^=itemContainer_] [class^=clickable_][aria-label]) {
        display: none;
      }
    `,
    AccountSettingsRefresh: `
      @import url("https://dablulite.github.io/css-snippets/AccountSettingsRefresh/import.css");
    `,
    FullServerTooltips: `
      [class^=tooltip] {
        max-width: unset !important;
      }
    `,
    GradientDMs: `
      @import url('https://ukriu.github.io/cssCord/Other/gradientDM.css');
      @import url('https://ukriu.github.io/cssCord/Other/gradientML.css');
      :root {
          --gDM-online: linear-gradient(to right, rgb(68, 105, 68) , transparent);
          --gDM-offline: linear-gradient(to right, rgb(66, 66, 66) , transparent);
          --gDM-dnd: linear-gradient(to right, rgb(130,70,70) , transparent);
          --gDM-idle: linear-gradient(to right, rgb(135, 105, 75) , transparent);
          --gDM-streaming: linear-gradient(to right, rgb(63, 33, 88) , transparent);
          --gDM-border-radius: 12px;
      }
    `,
    CenteredChannelNames: `
      [class^="children_"]:not(:has([class^="topic_"])) [class^="titleWrapper_"] {
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
      }
    `,
    BetterPickers: `
      [class^=lockedEmoji_]:has(+[class*=emojiLockIconContainer_]),
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
      }

      #emoji-picker-tab-panel [class*=categorySectionNitroLocked_],
      [class^=picker_] :is(
        [class*=sectionContainerNitroLocked_],
        [class*=soundRowNitroLocked_]
      ) {
        background-color: transparent;
      }

      #emoji-picker-tab-panel [class^=closeButton_] {
        padding: 16px 16px calc(100% - 106px) calc(100% - 40px);
        margin: 0;
      }
      
      [class^=picker_] {
        >[class^=container] [class^=closeButton_] {
          padding: 16px 16px calc(420px - 106px) calc(100% - 40px);
          margin: 0;
        }

        [class^=buttonOverlayActions_] {
          padding: 0;
        }
        [class^=secondaryButton_] {
          padding: 8px;
        }
      }

      #emoji-picker-tab-panel, [class^=picker_] {
        [class^=nitroTopDividerShadow_],
        [class^=nitroTopDividerLower_] {
          visibility: hidden;
        }
        [class^=nitroTopDividerLock],
        [class^=nitroTopDividerLower_] {
          background: var(--background-accent);
        }
      }
    `,
    GayFolders: `
      @keyframes rainbowBackgroundTransparent {
        0% { background-color: rgba(255, 0, 0, 0.4); }      /* Red */
        16% { background-color: rgba(255, 165, 0, 0.4); }    /* Orange */
        33% { background-color: rgba(255, 255, 0, 0.4); }    /* Yellow */
        50% { background-color: rgba(0, 128, 0, 0.4); }      /* Green */
        66% { background-color: rgba(0, 0, 255, 0.4); }      /* Blue */
        83% { background-color: rgba(75, 0, 130, 0.4); }     /* Indigo */
        100% { background-color: rgba(238, 130, 238, 0.4); } /* Violet */
      }

      @keyframes rainbow {
        0% { color: rgba(255, 0, 0, 1); }      /* Red */
        16% { color: rgba(255, 165, 0, 1); }    /* Orange */
        33% { color: rgba(255, 255, 0, 1); }    /* Yellow */
        50% { color: rgba(0, 128, 0, 1); }      /* Green */
        66% { color: rgba(0, 0, 255, 1); }      /* Blue */
        83% { color: rgba(75, 0, 130, 1); }     /* Indigo */
        100% { color: rgba(238, 130, 238, 1); } /* Violet */
      }

      [aria-label*=gay] [class*=folderIconWrapper] {
        animation: rainbowBackgroundTransparent 5s infinite;
        transition: background-color 0.5s ease;
      }

      [aria-label*=gay] [class*=folderIconWrapper] svg {
        animation: rainbow 5s infinite;
        transition: color 0.5s ease;
      }
    `,
    HideActivity: `
      [class^='membersGroup']:has([role=button]),
      [class^='member'] [class^='container']:has([class*='badges']) {
        display: none;
      }
    `,
    VisibleServerBanner: `
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
      }
    `,
    ColoredMessagePills: `
      /* Blue Pill - New Posts */
      [class^="iconVisibility_"]:has([style="color: var(--text-brand);"]) > [class^="unread_"]) {
        background-color: var(--text-brand);
      }
      
      /* Red Pill - Mentions */
      [class^="iconVisibility_"]:has([class^="mentionsBadge_"]) > [class^="unread_"]) {
        background-color: var(--status-danger);
      }
    `,
    ModernAudio: `
      [class^="mosaicItem"] > [class^="wrapperAudio"] > [class^="audioMetadata"] {
        margin-bottom: 24px;
      }
      
      [class^="mosaicItem"] > [class^="wrapperAudio"] > [class^="audioControls"] {
        position: absolute;
        bottom: 0px;
        left: 0px;
        border-radius: 0px 0px 8px 8px;
      }
    `,
    RevealDarkUsernames: `
      /* Handle dark usernames */
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
      }
    `,
    RepositionAppLauncher: `
      .channelTextArea_a7d72e {
        position: relative;
      }

      .channelAppLauncher_df39bd {
        position: absolute;
        top: -50px;
        right: 16px;
      }
    `,
    RemoveAppLauncher: `
      [class*=channelAppLauncher_] {
        display: none;
      }
    `,
    RemoveSettingsAds: `
      div.side_a0 > div.item_a0[data-tab-id="Discord Nitro"] {
        display: none !important;
      }
      div.side_a0 > div.item_a0[data-tab-id="Nitro Server Boost"] {
        display: none !important;
      }
    `,
    LeftFavButton: `
      [class*='result_'] [class*='favButton'] {
        right: unset;
      }
    `,
    UnsimplifyBios: `
      [class^="descriptionClamp_"] {
        display: block!important;
      }
    `,
    BouncyWebm: `
      [class*="inlineMediaEmbed"] {
        max-height: max-content !important;
        max-width: max-content !important;
      }

      [class*="loadingOverlay"] {
        aspect-ratio: unset !important;
      }

      [class*="imageWrapper"] {
        aspect-ratio: unset !important;
        width: max-content !important;
        height: max-content !important;
      }

      [class*="oneByOneGrid"] {
        max-height: max-content !important;
      }

      [class*="wrapperPaused"] {
        width: max-content;
        height: max-content;
      }
    `,
    SlideoverServers: `
      @import url("https://raw.githubusercontent.com/Andrew6rant/Discord-plugins-and-themes/refs/heads/main/SlideoverServers.theme.css");
    `,
    ClippyStatus: `
      /*Clippy Status*/
      @font-face {
          font-family: w95;
          src: url("https://saltssaumure.github.io/w9x-discord-theme/font/w95fa.woff2")
      }
        .outer_c69a7b .statusBubble_af9888,
        .outer_c69a7b .statusBubbleOuter_af9888,
        .outer_c69a7b .statusBubbleOuter_af9888::before,
        .panel_c69a7b .statusBubble_af9888,
        .panel_c69a7b .statusBubbleOuter_af9888,
        .panel_c69a7b .statusBubbleOuter_af9888::before  {
            background-color: #ffc
        }
        .outer_c69a7b .statusBubbleOuter_af9888,
        .panel_c69a7b .statusBubbleOuter_af9888 {
            border-radius: 12px;
            border: 1px solid #000
        }
        .outer_c69a7b .statusBubbleOuter_af9888::before,
        .panel_c69a7b .statusBubbleOuter_af9888::before {
            border: 1px solid #000;
            border-radius: 0;
            inset: unset;
            height: 6px;
            width: 12px;
            top: 10px;
            transform: skewX(60deg);
            left: -6px
        }
        .statusBubble_af9888 {
            border-radius: 10px;
            padding: 6px
        }
        .content_af9888  {
            color: #000
        }
        .statusText_af9888 {
            color: inherit;
            font-family: "w95", var(--font-primary)
        }
        .outer_c69a7b .statusBubbleOuter_af9888::after,
        .panel_c69a7b .statusBubbleOuter_af9888::after {
            display: none
        }
    `,
    RemoveForwardButton: `
      .hoverBarButton_e986d9[aria-label="Forward"] {
        display: none !important;
      }
    `,
    DiscordHardcore: `
      html {
        filter: blur(1px) saturate(100);
      }

      [class*=blobContainer_] {
        transform: rotate(180deg) scale(0.5);
      }

      [class*=guilds_] {
        width: 40px;
      }

      [class*=sidebar_] {
        width: 120px;
      }

      [class*=messageContent_] {
        opacity: 0.1;
      }

      [class*=form_] {
        transform: translateY(70%);
      }
    `,
    EfficientSettings: `
      @import url("https://minidiscordthemes.github.io/Snippets/EfficientSettings/main.css");
    `,
    MessageBarGreyEmoji: `
      @import url("https://minidiscordthemes.github.io/Snippets/MessageBarGreyEmoji/main.css");
    `,
    MinimalAuthorisedApps: `
      @import url("https://minidiscordthemes.github.io/Snippets/MinimalAuthApps/main.css");
    `,
    EeveeOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/LuSaffi/VenCordstuff/blob/main/Images/eevee.png?raw=true) !important;
      }
    `,
    CalicoOneko: `
      div[id*=oneko] {
        background-image: url(https://raw.githubusercontent.com/coolesding/onekocord/refs/heads/main/skins/calico.png) !important;
      }
    `,
    FoxOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/fox.png?raw=true) !important;
      }
    `,
    GhostOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/ghost.png?raw=true) !important;
      }
    `,
    GreyOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/gray.png?raw=true) !important;
      }
    `,
    KinaOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/kina.png?raw=true) !important;
      }
    `,
    LucyOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/lucy.png?raw=true) !important;
      }
    `,
    MaiaOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/maia.png?raw=true) !important;
      }
    `,
    MariaOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/maria.png?raw=true) !important;
      }
    `,
    MikeOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/mike.png?raw=true) !important;
      }
    `,
    SilverOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/silver.png?raw=true) !important;
      }
    `,
    SilverskyOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/silversky.png?raw=true) !important;
      }
    `,
    SnuupyOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/snuupy.png?raw=true) !important;
      }
    `,
    SpiritOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/spirit.png?raw=true) !important;
      }
    `,
    ToraOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/tora.png?raw=true) !important;
      }
    `,
    CollapsibleChatButtons: `
      .buttons_ce5b56 {
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
      }
    `,
    FixMosaicZoom: `
      [class^="imageWrapper_"] img[class^="lazyImg"] {
        object-fit: contain !important;
      }
    `,
    DisableSuperReactionAd: `
      .reaction_fef95b[style*="background"] {
        pointer-events: none;
      }
    `,
    ChannelHover: `
      /* Hover Anim */
      .wrapper_d8bfb3 .link_d8bfb3 /* channels */,
      .membersWrap_cbd271 .container_e9f61e /* members */,
      .channel_c91bad /* dms */,
      .side_a0 .item_a0 /* settings */ {
         transition: margin-left 0.2s ease;
      }
      .wrapper_d8bfb3:hover .link_d8bfb3,
      .side_a0 .item_a0:hover {
         margin-left: 10px;
      }
      .membersWrap_cbd271 .container_e9f61e:hover,
      .channel_c91bad:hover {
         margin-left: 18px;
      }
    `,
    Discolored: `
      @import "https://nyri4.github.io/Discolored/main.css";
      @import url("https://nyri4.github.io/donators/donators.css");
    `,
    RevertGifFavorite: `
      [class*='gifFavoriteButton_'] {
        background-color: transparent;
      }
    `,
    RightServerList: `
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
    RightChannelList: `
      [class^="sidebar_"] { /*Channel bar*/
        order: 1;
      }

      [class^="base_"] [class^="chatLayerWrapper_"] [class^="container_"] { /*slightly fixes forums when switching channel list*/
        margin-right: 240px;
      }
    `,
    LeftMemberList: `
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
    AccountDetailsGrid: `
      @import url(//dablulite.github.io/css-snippets/AccountDetailsGrid/import.css);
    `,
    ChannelServers: `
      @import url(//dablulite.github.io/css-snippets/ServersList/import.css);
      :root {
        --guild-list-width: 290px;
        --guild-list-height: 48px;
        --guild-item-radius: 50px;
        --guild-item-spacing: 8px;
        --guild-item-font-size: 16px;
      }
    `,
    HidePinDiscovery: `
      @import url("https://raw.githubusercontent.com/KrstlSkll69/vc-snippets/main/OtherStuff/hideGlobalDiscovery.css");
    `,
    DualLineChatbox: `
      /* Make the inner container use column layout */
      [class^="channelTextArea_"] [class^="inner_"] {
        flex-direction: column;
        gap: 8px;
      }

      /* Position the attach button wrapper */
      [class^="attachWrapper_"] {
        position: absolute;
        left: 16px;
        bottom: 0;
      }

      /* Adjust buttons container */
      [class^="inner_"] [class^="buttons_"] {
        margin-left: 48px; /* Give space for the attach button */
        padding: 4px 0;
      }

      /* Keep separator aligned properly */
      [class^="inner_"] [class^="separator_"] {
        margin-left: auto;
      }
    `,
    ValentineOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/valentine.png?raw=true) !important;
      }
    `,
    AceOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/ace.png?raw=true) !important;
      }
    `,
    MonoOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/black.png?raw=true) !important;
      }
    `,
    BunnyOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/bunny.png?raw=true) !important;
      }
    `,
    EsmeraldaOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/esmeralda.png?raw=true) !important;
      }
    `,
    JessOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/jess.png?raw=true) !important;
      }
    `,
  }
};