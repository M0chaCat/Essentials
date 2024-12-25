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
    css: `/* changes to the channel list for better usability */

/* squish channel height/spacing */
[class="link_d8bfb3"] {
    padding-block: 3px;
}

/* shrink all channel icons */
[class="iconContainer_d8bfb3"]>svg[role="img"] {
    scale: 0.8;
}

/* squeeze channel list left */
.wrapper_d8bfb3:not(.typeThread_d8bfb3) {
    margin-left: 0 !important;
}

.wrapper_a08117 {
    padding-left: 8px !important;
}

/* fix threads "spine" */
.spineBorder_e1e976 {
    bottom: 20px !important;
    left: 16px;
}

.containerDefault_f6f816>svg {
    top: 5px;
    left: 16px;
}

.wrapper_d8bfb3.typeThread_d8bfb3 {
    margin-left: 28px;
}

/* make unread channel's icons brighter (because the unread indicator is now hidden)*/
.modeUnreadImportant_d8bfb3 .icon_d8bfb3,
.modeUnreadImportant_d8bfb3:hover .icon_d8bfb3,
.modeSelected_d8bfb3:hover .icon_d8bfb3 {
    color: var(--interactive-active);
}

/* dim all category labels */
[class="mainContent_a08117"] {
    opacity: 70%;
}

/* hide category dropdown arrows, instead dim label when collapsed */
[class="mainContent_a08117"]>[class="icon_a08117"] {
    display: none;
}

[class="mainContent_a08117"][aria-expanded="false"] {
    opacity: 50% !important;
}
`,
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
    css: `:root {
  --font-code: monospace; /* Optional custom font */

  /* Custom indentation, values represent number of blank spaces from the left */
  --irc-indent: 3;
  --irc-newline-indent: 3;
  --irc-reply-indent: 8;
  --irc-reply-spine-length: 3;
}
[id^="chat-messages"],
[class^="preview_"] {
  --custom-message-padding-vertical-container-compact: 0;

  div[class*="compact_"]:not(:has([class*="groupStart_"])) {
    margin-bottom: -.0625rem;
    margin-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: calc(var(--irc-newline-indent) * 1ch); 
  }
  div[class*="compact_"]:has([class*="groupStart_"]) {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: calc(var(--irc-newline-indent) * 1ch);
  }

  [class*="isSystemMessage"] {
    /* System message i.e. join message */
    [class^="container"] {
      padding-left: 0;
    }

    /* Message icons i.e. join message arrow */
    [class^="iconContainer"] {
      margin-right: 1ch;
      padding: 0;
      height: 2ch;
      width: 2ch;
    }
  }
}
[class^="preview_"] div[class*="compact_"] {
  padding-left: calc(var(--irc-newline-indent) * 1ch);
}
[class*="compact_"] {
  /* Fonts */
  * {
    font-family: var(--font-code);
    
    :not([id^="message-accessories-"] *) {
      font-size: 1rem;
      line-height: 1.375rem;
    }
  }
  [class^="repliedMessage"],
  code.inline,
  [class^="textContainer"] code /* Text file previews */ {
    font-size: 1rem;
    line-height: 1.375rem;
  }
  [class^="embedWrapper_"] *,
  [class^="attachment_"] *,
  [class^="children_"] *, /* Those weird bot buttons */
  [class*="button_"] * {
    font-family: var(--font-primary)
  }
  [class*="button_"] * {
    font-size: 14px
  }
  font-family: var(--font-code);
  font-size: 1rem;

  /* Indentation */
  * {
    --custom-message-meta-space: 1ch;
    --custom-message-margin-compact-indent: 7ch;
  }
  > [class^="contents_"] {
    margin-left: 0;
    padding-left: 0;
    text-indent: calc((var(--irc-indent) - var(--irc-newline-indent)) * 1ch);
  }
  [class^="repliedMessage_"] {
    margin-left: calc((var(--irc-reply-indent) - var(--irc-newline-indent)) * 1ch);
    padding-left: 0ch;
    text-indent: 0ch;

  }

  /* Message headers */
  [class*="timestamp_"] {
    height: auto;
    width: auto;
    opacity: 100;
  }
  [class^="avatar_"] {
    top: -1px;
    width: 2ch;
    height: 2ch;
    min-height: 2ch;
    margin: 0;
    margin-right: 1ch;
    vertical-align: middle;
    border-radius: 4px;
  }
  [id^="message-username-"] {
    margin-right: 0;
  }

  /* Timestamp brackets */
  [class*="timestamp_"]:not(:has([aria-label*="Edited"]))::before {
    content: "[";
  }
  [class*="timestamp_"]:not(:has([aria-label*="Edited"]))::after {
    content: "]";
  }

  /* Bold usernames */
  [class^="username_"] {
    font-weight: bold;
  }

  /* Username angle brackets */
  [class^="username_"]::before {
    color: var(--text-normal);
    content: "<";
  }
  [class^="username_"]::after {
    color: var(--text-normal);
    content: ">";
  }

  /* Replies */
  [class^="repliedMessage_"] {
    --timestamp-width: 5ch;
    --custom-message-reply-indent: 0ch;
    --text-indent: calc((var(--custom-message-margin-compact-indent) - 1ch) * -1);
  }
  [class^="repliedMessageClickableSpine_"] {
    left: calc(var(--irc-reply-spine-length) * -1ch);
    margin: 0 4px 0 2px;
  }
  [class^="replyBadge_"] {
    margin-right: 1ch;
    height: 2ch;
    width: 2ch;
  }
  [class^="repliedTextPreview_"] {
    max-height: none;
  }

  /* Blocked message */
  [class^="blockedSystemMessage_"] {
    padding: 0;
  }

  /* Bot tags */
  [class^="botTagCompact_"] {
    display: inline;
    height: auto;
    top: 0;
    margin: 0;
    margin-left: -1ch;
    padding: 0;
    vertical-align: baseline;
    font-size: 1rem;

    [class^="botTagVerified_"] {
      height: 2ch;
      width: 2ch;
      margin: 0;
      vertical-align: middle;
    }

    [class^="botText_"] {
      font-size: inherit;
      vertical-align: inherit;
    }
  }
  [id^="message-reply-context-"] [class^="botTagCompact_"] {
    margin-left: 0;
    margin-right: 1ch;
  }

  /* Bot tag brackets */
  [class^="botTagCompact_"]::before {
    color: inherit;
    content: "[";
  }
  [class^="botTagCompact_"]::after {
    color: inherit;
    content: "]";
  }

  /* New member badge */
  [class^="newMemberBadge"] {
    margin-left: 1ch;
  }

  /* Clan tags */
  [class^="chipletContainerInner_"] {
    margin-left: 1ch;
    font-size: 1rem;
    
    [class^="badge_"] {
      height: 2ch;
      width: 2ch;
      margin: 0;
      vertical-align: middle;
    }

    [class^="text-xs/"] {
      padding: 0;
      font-size: inherit;
    }
  }
  [id^="message-reply-context-"] [class^="chipletContainerInner_"] {
    margin-left: 0;
  }

  /* Emoji */
  * {
    --custom-emoji-size-emoji: 2ch;
  }
  .emoji {
    top: -1px;
    vertical-align: middle;
  }

  /* Mentions */
  .mention,
  [class^="roleMention_"] {
    padding: 0;
  }

  /* Channel mentions */
  .channelMention {
    padding: 0;
    [class^="icon_"] {
      height: 2ch;
      width: 2ch;
      margin: 0;
      margin-top: -.4ch;
      vertical-align: middle;
    }
  }

  /* Code blocks */
  code.inline {
    margin: 0;
    padding: 0;
    border: none;
    box-shadow: 0 0 0 1px inset var(--background-tertiary);
  }
  pre,
  pre * {
    margin: 0;
    line-height: var(--custom-message-reply-message-preview-line-height)
  }
  [class^="codeContainer_"] code {
    padding: 1ch;
    border: none;
    box-shadow: 0 0 0 1px inset var(--background-tertiary);
  }

  /* Text file preview */
  [class^="nonVisualMediaItemContainer_"] {
    margin: 0;
  }
  [class^="textContainer"] code {
    margin: 1ch 1ch 0;
    padding: 1ch;
  }
}

/* Thread Spines */
[class*="compact"][class*="hasThread_"] {
  [class^="spine_"] { /* The top half that is straight */
    left: calc(var(--irc-reply-spine-length) * -1ch);
    margin-left: 2px;
    width: calc((var(--irc-reply-spine-length) - 0.5) * 1ch);
  }

  [class^="contents_"]::before { /* The bottom half that bends */
    left: calc(var(--irc-reply-spine-length) * -1ch);
    margin-left: 2px;
  }
}

/* Message input */
[class^="textArea_"] * {
  font-family: var(--font-code);
}
    :root {
      --font-code: monospace;
      --irc-indent: 3;
      --irc-newline-indent: 8;
      --irc-reply-indent: 8;
      --irc-reply-spine-length: 3;
    }`,
    previewAfter: "https://arcane.kitties.cat/assets/essentials/irctheme-after.png"
  })
]; 