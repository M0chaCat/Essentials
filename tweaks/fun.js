const createTweak = require('../utils/createTweak');

module.exports = [
  createTweak({
    id: 'DiscordHardcore',
    label: 'Discord Hardcore Mode',
    description: 'Makes Discord significantly more... something...',
    section: 'fun',
    css: `html {
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
    }`,
    helpText: "This mode adds various visual challenges to Discord to make it the worst thing ever"
  }),

  createTweak({
    id: 'GayFolders',
    label: 'Gay Folders',
    description: 'Adds rainbow animation to folders containing \'gay\' in their name',
    section: 'fun',
    css: `@keyframes rainbowBackgroundTransparent {
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
    }`
  }),

  createTweak({
    id: 'BouncyWebm',
    label: 'Bouncy Webm',
    description: 'Makes webm files bounce the chat around like the good old days',
    section: 'fun',
    css: `[class*="inlineMediaEmbed"] {
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
    }`
  }),

  createTweak({
    id: 'TransBoost',
    label: 'Trans Boost',
    description: 'Changes the server boost gradient to the best flag ever.',
    section: 'fun',
    css: `body {
      --guild-boosting-blue: #60d0fa, #f5acba, #ffffff;
      --guild-boosting-purple: #ffffff, #f5acba, #60d0fa;
    }`
  }),

  createTweak({
    id: 'ClippyStatus',
    label: 'Clippy Status',
    description: 'Turns status in new profiles into Clippy-style speech bubble (incompatible with Profile Status Matching/Revert Profiles)',
    section: 'fun',
    css: `@font-face {
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
    }`
  })
]; 