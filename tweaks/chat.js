const createTweak = require('../utils/createTweak');

module.exports = [

  createTweak({
    id: 'CustomChatPlaceholder',
    label: 'Custom Chat Placeholder',
    description: 'Changes the chat placeholder to "be silly :3"',
    section: 'chat',
    css: `:root{ --prompt-text: "be silly :3"; }
      [class*=placeholder][class*=slateTextArea] {visibility: hidden;}
      [class*=placeholder][class*=slateTextArea]::before {visibility: visible;content: var(--prompt-text);}`
  }),

  createTweak({
    id: 'CustomChatPlaceholderAlt',
    label: 'Silly Þ User Chat Placeholder',
    description: 'Changes the chat placeholder to "be silly, use þ :3"',
    section: 'chat',
    css: `:root{ --prompt-text: "be silly, use þ :3"; }
      [class*=placeholder][class*=slateTextArea] {visibility: hidden;}
      [class*=placeholder][class*=slateTextArea]::before {visibility: visible;content: var(--prompt-text);}`
  }),

  createTweak({
    id: 'ChannelTweaks',
    label: 'Channel Tweaks',
    description: 'Enhances channel list with better spacing and organization',
    section: 'chat',
    css: `@import url("https://aushevahmad.github.io/awesome-css/modules/channeltweaks.css");`,
    helpText: "This improves the channel list layout, such as a more compact and organized look"
  }),

  createTweak({
    id: 'HideTimestamps',
    label: 'Hide Timestamps',
    description: 'Hides message timestamps until hovered',
    section: 'chat',
    css: `.timestampInline__430cf {
      visibility: hidden;
    }
    .text-md-normal__6e567 .timestampInline__430cf {
      visibility: visible; 
    }`
  }),

  createTweak({
    id: 'ScrollingText',
    label: 'Scrolling Text',
    description: 'Adds scrolling animation to long header text',
    section: 'chat',
    css: `.header_a0:hover .headerText_a0 {
      animation: scrollText 8s linear infinite;
      width: 12rem;
    }
    @keyframes scrollText {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }`
  }),

  createTweak({
    id: 'BiggerSummaries',
    label: 'Bigger Summaries',
    description: 'Increases the size of forum topic summaries',
    section: 'chat',
    css: `div[class^=topicsScroller_] {
      max-height: calc(100vh - 2.5in);
    }
    :has(> div[class^=topicsScroller_]) {
      width: calc(100% - 8q);
    }`
  }),

  createTweak({
    id: 'IRCTheme',
    label: 'IRC Theme',
    description: 'Classic IRC-style chat layout (requires compact mode)',
    section: 'chat',
    css: `@import url("https://raw.githubusercontent.com/foxf4ce/discord-css/refs/heads/main/irc.css");
    :root {
      --font-code: monospace;
      --irc-indent: 3;
      --irc-newline-indent: 8;
      --irc-reply-indent: 8;
      --irc-reply-spine-length: 3;
    }`,
    previewAfter: "https://arcane.kitties.cat/assets/essentials/irctheme-after.png"
  }),

  createTweak({
    id: 'DualLineChatbox',
    label: 'Dual-Line Chatbox',
    description: 'Makes the chatbox have a dual-line layout',
    section: 'chat',
    css: `[class^="channelTextArea_"] [class^="inner_"] {
  flex-direction: column;
     [class^="separator_"] {
      margin-left: auto;
    }
  }

[class^="inner_"]:has([class^="attachWrapper_"])  > [class^="buttons_"] {

    margin-left: 32px;
}
[class^="attachWrapper_"] {
  top: calc(100% - 69px);
  position: fixed;
}`,
    helpText: "This makes the chatbox have a dual-line layout, useful for like the person with too many toolbar buttons ig. Send message button reccomended!"
  }),

  createTweak({
    id: 'SeamlessChatBar',
    label: 'Seamless Chat Bar',
    description: 'Makes the chatbar look more seamless, like a single section',
    section: 'chat',
    css: `@import url("https://nspc911.github.io/vc-themes/SeamlessChatBar.theme.css");`,
    helpText: "Moves the <x> is typing, slow mode is enabled and You're reading older messages to be above the message bar while making them look as if they are part of the chat bar",
    previewBefore: "https://arcane.kitties.cat/assets/essentials/seamlesschatbar-before.png",
    previewAfter: "https://arcane.kitties.cat/assets/essentials/seamlesschatbar-after.png"
  })
]; 