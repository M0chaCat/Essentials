const createTweak = require('../utils/createTweak');

module.exports = [
  createTweak({
    id: 'Discolored',
    label: 'Discolored',
    description: "Colors all of Discord's SVG icons",
    section: 'visual',
    css: `@import "https://nyri4.github.io/Discolored/main.css";
         @import url("https://nyri4.github.io/donators/donators.css");`
  }),
  
  createTweak({
    id: 'PastelStatuses',
    label: 'Pastel Statuses',
    description: 'Changes status colors to pastel variants',
    section: 'visual',
    css: `rect[fill='#23a55a'], svg[fill='#23a55a'] { fill: #80c968 !important; }
      rect[fill='#f0b232'], svg[fill='#f0b232'] { fill: #e7ca45 !important; }
      rect[fill='#f23f43'], svg[fill='#f23f43'] { fill: #e0526c !important; }
      rect[fill='#80848e'], svg[fill='#80848e'] { fill: #696e88 !important; }
      rect[fill='#593695'], svg[fill='#593695'] { fill: #ac7de6 !important; }`
  }),

  createTweak({
    id: 'LargeEmojis',
    label: 'Large Emojis',
    description: 'Makes emojis larger when hovered',
    section: 'visual',
    css: `img[class="emoji otherEmoji_e58351"]:hover {
      transform: scale(320);
    }`
  }),

  createTweak({
    id: 'ReactionAnimations',
    label: 'Reaction Animations',
    description: 'Adds flip animation to reaction emojis',
    section: 'visual',
    css: `[class^=reaction_]:not(:has(.burstGlow_ec6b19)) .emoji {
      transition: transform 0.6s ease;
      transform-style: preserve-3d;
    }
    [class^=reaction_]:not(:has(.burstGlow_ec6b19)):hover .emoji {
      animation: flipAndScale 0.6s forwards;
    }
    @keyframes flipAndScale {
      from { transform: rotateY(0deg) scale(1); }
      to { transform: rotateY(360deg) scale(1.5); }
    }`
  }),

  createTweak({
    id: 'CustomNewMemberBadge',
    label: 'Custom New Member Badge',
    description: 'Replaces the new member badge with a custom one',
    section: 'visual',
    css: `[class*=newMemberBadge]:before {
      content: url(https://media.discordapp.net/stickers/1272085262205325352.gif?size=64&quality=lossless);
      transform: translate(-100%, -110%);
      display: inline-block;
      scale: 0.32;
    }`
  }),

  createTweak({
    id: 'ProfileThemeMatching',
    label: 'Profile Status Matching',
    description: 'Makes profile status match theme colors',
    section: 'visual',
    css: `.custom-profile-theme [class^=statusBubble_] [class^=defaultColor_] {
      color: var(--theme-text-color-dark) !important;
    }
    .custom-profile-theme [class^=statusBubble_],
    .custom-profile-theme [class^=statusBubbleOuter_]:before,
    .custom-profile-theme [class^=statusBubbleOuter_]:after {
      background-color: var(--profile-gradient-button-color) !important;
    }`
  }),

  createTweak({
    id: 'RevertProfiles',
    label: 'Revert Profiles',
    description: 'Reverts user profiles to the classic layout (incompatible with Profile Status Matching)',
    section: 'visual',
    css: `@import url("https://raw.githubusercontent.com/Bitslayn/RepluggedAddons/main/themes/btw.bitslayn.revertProfiles/raw/main.css");`
  }),

  createTweak({
    id: 'CoolCodeBlocks',
    label: 'Cool Code Blocks',
    description: 'Pretty code blocks with snake animation and pastel gradients',
    section: 'visual',
    css: `@import url("https://github.com/senshastic/SneshCord/raw/refs/heads/master/Font%20packs/SneshCodeBlocks.css");`
  }),

  createTweak({
    id: 'UnsimplifyBios',
    label: 'Un-Simplify Bios',
    description: 'Shows full bios in simplified profiles',
    section: 'visual',
    css: `[class^="descriptionClamp_"] {
      display: block!important;
    }`
  }),

  createTweak({
    id: 'ChannelHover',
    label: 'Channel Hover Effects',
    description: 'Adds smooth sliding animations when hovering over channels, DMs, and settings',
    section: 'visual',
    css: `.wrapper_d8bfb3 .link_d8bfb3,
    .membersWrap_cbd271 .container_e9f61e,
    .channel_c91bad,
    .side_a0 .item_a0 {
      transition: margin-left 0.2s ease;
    }
    .wrapper_d8bfb3:hover .link_d8bfb3,
    .side_a0 .item_a0:hover {
      margin-left: 10px;
    }
    .membersWrap_cbd271 .container_e9f61e:hover,
    .channel_c91bad:hover {
      margin-left: 18px;
    }`
  }),

  createTweak({
    id: 'ButtonHover',
    label: 'Button Hover Effects',
    description: 'Adds rotation animations to various buttons when hovered',
    section: 'visual',
    css: `button.button_ae40a4 {
      border-radius: 50%;
    }
    .button_ae40a4:last-child,
    .attachButton__56f98 .attachButtonInner__84c26,
    .emojiButton_b63c38 .contents__322f4,
    .closeButton__8177f {
      transition: transform 1s ease;
    }
    .button_ae40a4:last-child:hover,
    .attachButton__56f98:hover .attachButtonInner__84c26,
    .emojiButton_b63c38:hover .contents__322f4,
    .closeButton__8177f:hover {
      transform: rotate(360deg);
    }`
  })
]; 