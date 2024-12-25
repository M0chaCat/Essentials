const createTweak = require('../utils/createTweak');

module.exports = [
  createTweak({
    id: 'ForumImprovements',
    label: 'Forum Improvements',
    description: 'Enhanced forum layout and functionality',
    section: 'coreUI',
    css: `.tagsContainer_a6d69a{gap:16px;align-items:flex-start}.tagsContainer_a6d69a .divider_a6d69a{display:none}.tagsContainer_a6d69a .tagList_a6d69a{height:auto;max-height:32px;transition:max-height .2s ease}.tagsContainer_a6d69a .tagList_a6d69a:is(:hover,:has(.selected_c993da)){max-height:256px}.tagsContainer_a6d69a .tagList_a6d69a .tagListInner_a6d69a{justify-content:center}.tagsContainer_a6d69a .tagsButton_a6d69a{position:static;margin-left:0}.tagsButtonPlaceholder_a6d69a{display:none}.tagsContainer_c1668f{align-items:flex-start}.tagsContainer_c1668f .tagsIcon_c1668f{height:24px}.tagsContainer_c1668f .tagList_c1668f{height:auto;max-height:24px;transition:max-height .2s ease}.tagsContainer_c1668f .tagList_c1668f:is(:hover,:has(.selected_c993da)){max-height:192px}.tagsContainer_c1668f .tagsButton_c1668f{position:static;margin-left:0}.tagsButtonPlaceholder_c1668f{display:none}.scrollerInner_e2e187{overflow:unset}.scrollerInner_e2e187 .divider_af45f8{display:none}.scrollerInner_e2e187 .container_b385c8{box-shadow:var(--elevation-low);border-top-color:rgba(0,0,0,0)}.popout_a15d29{height:calc(18px + var(--custom-forum-composer-attachments-attachment-size) + 24px)}.popout_a15d29 .uploadContainer_df1eaf .imageSmall_f847a3{border-radius:12px 12px 0 0}.popout_a15d29 .uploadContainer_df1eaf .imageSmall_f847a3 .spoilerContainer_a3d0f7{border-radius:12px 12px 0 0}.popout_a15d29 .uploadContainer_df1eaf .actionBarContainer_df1eaf{top:unset;bottom:0}.popout_a15d29 .uploadContainer_df1eaf .actionBarContainer_df1eaf .smallActionBar_df1eaf{transform:none;opacity:1}.popout_a15d29 .uploadContainer_df1eaf .actionBarContainer_df1eaf .smallActionBar_df1eaf .wrapper_ef319f{border-radius:0 0 12px 12px}.imageSmall_f847a3.icon_f847a3{background-color:var(--background-primary);background-size:60%}.imageSmall_f847a3 .spoilerContainer_a3d0f7{border-radius:12px}.imageSmall_f847a3 .spoilerContainer_a3d0f7 .spoilerWarning_a3d0f7{zoom:.7}.mainCard_a6d69a:hover{transform:none}.mainCard_a6d69a .imageCover_a57509{object-fit:contain;background:var(--background-secondary)}:is(.mediaIconsRow_a57509,.tagsRow_a57509){transition:opacity .2s}.postBody_a57509:hover :is(.mediaIconsRow_a57509,.tagsRow_a57509){opacity:0}:is(.mediaIconsRow_a57509,.tagsRow_a57509) .mediaIcon_a57509{background-image:url("https://discord.com/assets/c5a74fc51ff67682b11a.svg");height:22px}:is(.mediaIconsRow_a57509,.tagsRow_a57509) .mediaIcon_a57509 path{fill:rgba(0,0,0,0)}.thumbnailContainer_d331f1 .loadingOverlay_d4597d{display:flex;align-items:center;justify-content:center}.thumbnailContainer_d331f1 .altText_cf58b5{position:absolute;z-index:-1}.previewForm_c1668f{padding:0;margin:1px 12px 0 0;border:0;outline:2px solid var(--background-modifier-selected);border-radius:var(--radius-xs);width:calc(100% - 24px - 78px - 24px)}.previewForm_c1668f .contentContainer_c1668f{width:100%}.previewForm_c1668f .previewModeIndicator_c1668f{position:absolute;pointer-events:none;bottom:4px;right:4px}`,
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
      :root {
  --server-size: var(--HSL-server-icon-size, var(--HSL-size, 35px));
  --server-spacing: var(--HSL-server-spacing, var(--HSL-spacing, 10px));
  --server-container: calc(var(--server-size) + 20px);
  --server-direction: var(--HSL-server-direction, column);
  --server-alignment: var(--HSL-server-alignment, flex-start);
}

#app-mount .guilds_a4d4d9 {
  width: var(--server-container);
}
#app-mount .guilds_a4d4d9 .scrollerWrap-1IAIlv {
  width: calc(100% + 30px);
}
#app-mount .guilds_a4d4d9 .svg_c5f96a,
#app-mount .guilds_a4d4d9 .wrapper_c5f96a,
#app-mount .guilds_a4d4d9 .guildsError-b7zR5H,
#app-mount .guilds_a4d4d9 .placeholderMask_f734d8 {
  width: var(--server-size);
  height: var(--server-size);
}
#app-mount .guilds_a4d4d9 [role=group] {
  height: auto !important;
}
#app-mount .guilds_a4d4d9 [class*=expandedFolderBackground] {
  width: var(--server-size);
  left: 50%;
  translate: -50% 0;
}
#app-mount .guilds_a4d4d9 .wrapper_c4cd66 {
  height: var(--server-size) !important;
}
#app-mount .guilds_a4d4d9 .wrapper_bc7085 {
  width: var(--server-container);
}
#app-mount .guilds_a4d4d9 [class*=listItem]:not([class*=listItemWrapper]) {
  width: var(--server-container);
}

#app-mount .app_bd26cc .base_a4d4d9 {
  top: var(--server-container) !important;
  position: absolute !important;
  left: 0 !important;
  right: 0;
  bottom: 0;
  max-width: 100%;
}
#app-mount .sidebar_a4d4d9 {
  border-radius: 0;
}
#app-mount [class*=unreadMentionsIndicator] {
  width: var(--server-size);
  padding: 0;
  left: 50%;
  transform: translateX(-50%);
  height: auto;
}
#app-mount .guilds_a4d4d9 {
  transform-origin: top left;
  transform: rotate(-90deg);
  height: 100vw !important;
  top: var(--server-container);
  bottom: unset;
  position: absolute !important;
  left: 0;
}
#app-mount .guilds_a4d4d9 > [data-list-id=guildsnav] {
  margin-bottom: 0 !important;
}
#app-mount .guilds_a4d4d9 .itemsContainer_fea3ef {
  justify-content: var(--server-alignment);
  flex-direction: var(--server-direction);
}
#app-mount .guilds_a4d4d9 .scrollerBase_c49869 {
  padding: var(--server-spacing) 0 !important;
  display: flex;
  flex-direction: var(--server-direction);
  gap: var(--server-spacing);
  align-items: var(--server-alignment);
  justify-content: var(--server-alignment);
}
#app-mount .guilds_a4d4d9 .scrollerBase_c49869 > div[style]:not(.listItem-2P_4kh) {
  height: auto !important;
}
#app-mount .guilds_a4d4d9 .scrollerBase_c49869 > div[style]:not(.listItem-2P_4kh)[style*="height: 0px"] {
  padding-top: 1px;
}
#app-mount .guilds_a4d4d9 .scrollerBase_c49869 > div[aria-label] {
  display: flex;
  flex-direction: var(--server-direction);
  gap: var(--server-spacing);
}
#app-mount .guilds_a4d4d9 [class*=pill] {
  transform: rotate(90deg) translateY(-50%);
  height: var(--server-size);
  width: 4px;
  top: calc(var(--server-size) / -1 + var(--server-size) / 2 - 8px) !important;
  margin-left: -2px;
}
#app-mount .guilds_a4d4d9 [class*=pill] span {
  height: 100% !important;
  width: 4px !important;
  transform: scale(0, 1) !important;
  transition: 0.15s ease !important;
  margin-left: 0;
  border-radius: 0 4px 4px 0;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 0"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 1"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 2"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 3"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 4"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 5"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 6"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 7"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 8"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 9"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 10"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 11"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 12"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 13"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 14"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 15"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 16"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 17"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 18"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 19"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 20"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 21"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 22"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 23"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 24"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 25"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 26"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 27"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 28"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 29"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 30"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 31"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 32"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 33"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 34"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 35"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 36"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 37"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 38"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 39"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 40"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 .wrapper_bc7085 {
  display: flex;
  flex-direction: var(--server-direction);
  gap: var(--server-spacing);
}
#app-mount .guilds_a4d4d9 .wrapper_bc7085 ul[role=group] {
  display: flex;
  flex-direction: var(--server-direction);
  gap: var(--server-spacing);
}
#app-mount .guilds_a4d4d9 [class*=listItem]:not([class*=listItemWrapper]) {
  width: var(--server-size);
  transform: rotate(90deg);
  margin: 0 10px;
  position: unset;
}
#app-mount .guilds_a4d4d9 [class*=guildSeparator] {
  transform: rotate(90deg);
  width: var(--server-size);
}
#app-mount .guilds_a4d4d9 [class*=expandedFolderBackground] {
  border-radius: 10px;
  height: 100%;
}
#app-mount .guilds_a4d4d9 ul[id^=folder-items-] {
  gap: var(--server-spacing) !important;
}
#app-mount .guilds_a4d4d9 .folder_bc7085 {
  background: transparent;
}
#app-mount .guilds_a4d4d9 .wrapper_b7c66a {
  top: 0;
  bottom: 0;
}
#app-mount .guilds_a4d4d9 .target_b7c66a::before {
  top: 0;
  height: var(--server-size);
  width: 4px;
  left: -6px;
}
#app-mount .guilds_a4d4d9.hidden_fea3ef + .base_a4d4d9 {
  top: 0 !important;
}
#app-mount [class*=listItemTooltip] {
  position: absolute;
  max-width: unset;
  white-space: nowrap;
  margin-left: calc(var(--server-size) / -1 - 20px);
  top: calc(var(--server-size) - 10px);
}
#app-mount [class*=listItemTooltip] [class*=tooltipPointer] {
  transform: rotate(180deg);
  top: -5px !important;
  right: unset;
  left: 13px;
  z-index: 1;
}
#app-mount .friendsOnline-2JkivWm,
#app-mount .friendsOnline_2JkivW {
  position: absolute;
  transform: translate(-50%, 50%);
  top: calc(-50% + var(--server-spacing));
  left: -50%;
  width: calc(var(--server-size) + var(--server-spacing));
  display: flex;
  justify-content: center;
}
#app-mount .guilds_a4d4d9.content_Pph8t6,
#app-mount .BF-folderSidebar {
  position: absolute !important;
  top: calc(var(--server-container) * 2) !important;
}
#app-mount .guilds_a4d4d9.content_Pph8t6:not(.closed-j55_T-) + .base_a4d4d9,
#app-mount .BF-folderSidebar:not(.closed-j55_T-) + .base_a4d4d9 {
  top: calc(var(--server-container) * 2.5) !important;
}
#app-mount .guilds_a4d4d9 .frame_oXWS21[class*=listItem] {
  height: var(--server-size) !important;
}
#app-mount .guilds_a4d4d9 .frame_oXWS21[class*=listItem] .wrapper__8436d {
  height: 100% !important;
}
#app-mount .guilds_a4d4d9 .frame_oXWS21[class*=listItem] .button-Jt-tIg {
  width: 100%;
  height: 100% !important;
  border-radius: 50%;
  padding: 2px;
  font-size: 10px;
  box-sizing: border-box;
  text-align: center;
}
#app-mount .BF-folderSidebar {
  top: calc(var(--server-container)) !important;
}
#app-mount .serverCountWrap_k8F5De {
  height: var(--server-size);
}
#app-mount .serverCount_FsTTs1 {
  white-space: pre-line;
  font-size: 12px;
  display: flex;
  align-items: center;
}

html.platform-osx #app-mount .typeMacOS_a934d8 {
  width: 100%;
}
html.platform-osx #app-mount .base_a4d4d9 {
  top: calc(var(--server-container) + 30px) !important;
}
html.platform-osx #app-mount #pluginNotice {
  top: 32px;
  z-index: 100000 !important;
}

body.folderContentIsOpen_zz6FgW .base_a4d4d9 {
  transition: 0.2s ease !important;
}

.accountProfilePopoutWrapper_b2ca13 {
  left: 0;
}
      /*
 * @name ToolbarHide
 * @author SEELE1306
 * @authorLink https://github.com/SEELE1306
 * @description  Hides the toolbar at the top for a cleaner layout.
 * @version 1.0.5
 * @authorId 518795791318384647
 * @discord seele1306
 */

/* [[ TOOLBAR HIDE ]] */
.toolbar_fc4f04 {
  overflow: hidden;
  justify-content: flex-end;
  transition: all 350ms;

  &::before {
    opacity: 0%;
    transition: opacity 150ms;
    position: absolute;
    bottom: 4px;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Crect width='352' height='42' x='80' y='96' fill='rgb(181, 186, 193)' class='ci-primary'/%3E%3Crect width='352' height='42' x='80' y='240' fill='rgb(181, 186, 193)' class='ci-primary'/%3E%3Crect width='352' height='42' x='80' y='384' fill='rgb(181, 186, 193)' class='ci-primary'/%3E%3C/svg%3E");
    display: block;
    width: 32px;
  }

  &:hover {
    transition: all 150ms;

    & > div {
      transform: scaleX(100%) !important;
      transition: opacity 300ms;
      opacity: 100%;
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    transform: scaleX(0%) !important;
    opacity: 0%;

    & svg {
      transition: all 0.3s ease-in-out;
    }
  }

  &:where(:not(:hover)) {
    max-width: 32px;
  }

  &:where(:not(:hover))::before {
    opacity: 100%;
    transition: opacity 1000ms;
  }
}

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
    css: `:root {
  --server-size: var(--HSL-server-icon-size, var(--HSL-size, 35px));
  --server-spacing: var(--HSL-server-spacing, var(--HSL-spacing, 10px));
  --server-container: calc(var(--server-size) + 20px);
  --server-direction: var(--HSL-server-direction, column);
  --server-alignment: var(--HSL-server-alignment, flex-start);
}

#app-mount .guilds_a4d4d9 {
  width: var(--server-container);
}
#app-mount .guilds_a4d4d9 .scrollerWrap-1IAIlv {
  width: calc(100% + 30px);
}
#app-mount .guilds_a4d4d9 .svg_c5f96a,
#app-mount .guilds_a4d4d9 .wrapper_c5f96a,
#app-mount .guilds_a4d4d9 .guildsError-b7zR5H,
#app-mount .guilds_a4d4d9 .placeholderMask_f734d8 {
  width: var(--server-size);
  height: var(--server-size);
}
#app-mount .guilds_a4d4d9 [role=group] {
  height: auto !important;
}
#app-mount .guilds_a4d4d9 [class*=expandedFolderBackground] {
  width: var(--server-size);
  left: 50%;
  translate: -50% 0;
}
#app-mount .guilds_a4d4d9 .wrapper_c4cd66 {
  height: var(--server-size) !important;
}
#app-mount .guilds_a4d4d9 .wrapper_bc7085 {
  width: var(--server-container);
}
#app-mount .guilds_a4d4d9 [class*=listItem]:not([class*=listItemWrapper]) {
  width: var(--server-container);
}

#app-mount .app_bd26cc .base_a4d4d9 {
  top: var(--server-container) !important;
  position: absolute !important;
  left: 0 !important;
  right: 0;
  bottom: 0;
  max-width: 100%;
}
#app-mount .sidebar_a4d4d9 {
  border-radius: 0;
}
#app-mount [class*=unreadMentionsIndicator] {
  width: var(--server-size);
  padding: 0;
  left: 50%;
  transform: translateX(-50%);
  height: auto;
}
#app-mount .guilds_a4d4d9 {
  transform-origin: top left;
  transform: rotate(-90deg);
  height: 100vw !important;
  top: var(--server-container);
  bottom: unset;
  position: absolute !important;
  left: 0;
}
#app-mount .guilds_a4d4d9 > [data-list-id=guildsnav] {
  margin-bottom: 0 !important;
}
#app-mount .guilds_a4d4d9 .itemsContainer_fea3ef {
  justify-content: var(--server-alignment);
  flex-direction: var(--server-direction);
}
#app-mount .guilds_a4d4d9 .scrollerBase_c49869 {
  padding: var(--server-spacing) 0 !important;
  display: flex;
  flex-direction: var(--server-direction);
  gap: var(--server-spacing);
  align-items: var(--server-alignment);
  justify-content: var(--server-alignment);
}
#app-mount .guilds_a4d4d9 .scrollerBase_c49869 > div[style]:not(.listItem-2P_4kh) {
  height: auto !important;
}
#app-mount .guilds_a4d4d9 .scrollerBase_c49869 > div[style]:not(.listItem-2P_4kh)[style*="height: 0px"] {
  padding-top: 1px;
}
#app-mount .guilds_a4d4d9 .scrollerBase_c49869 > div[aria-label] {
  display: flex;
  flex-direction: var(--server-direction);
  gap: var(--server-spacing);
}
#app-mount .guilds_a4d4d9 [class*=pill] {
  transform: rotate(90deg) translateY(-50%);
  height: var(--server-size);
  width: 4px;
  top: calc(var(--server-size) / -1 + var(--server-size) / 2 - 8px) !important;
  margin-left: -2px;
}
#app-mount .guilds_a4d4d9 [class*=pill] span {
  height: 100% !important;
  width: 4px !important;
  transform: scale(0, 1) !important;
  transition: 0.15s ease !important;
  margin-left: 0;
  border-radius: 0 4px 4px 0;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 0"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 1"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 2"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 3"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 4"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 5"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 6"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 7"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 8"] {
  transform: scale(1, 0.24) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 9"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 10"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 11"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 12"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 13"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 14"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 15"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 16"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 17"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 18"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 19"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 20"] {
  transform: scale(1, 0.7) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 21"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 22"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 23"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 24"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 25"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 26"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 27"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 28"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 29"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 30"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 31"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 32"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 33"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 34"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 35"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 36"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 37"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 38"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 39"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 [class*=pill] span[style*="height: 40"] {
  transform: scale(1, 1) !important;
}
#app-mount .guilds_a4d4d9 .wrapper_bc7085 {
  display: flex;
  flex-direction: var(--server-direction);
  gap: var(--server-spacing);
}
#app-mount .guilds_a4d4d9 .wrapper_bc7085 ul[role=group] {
  display: flex;
  flex-direction: var(--server-direction);
  gap: var(--server-spacing);
}
#app-mount .guilds_a4d4d9 [class*=listItem]:not([class*=listItemWrapper]) {
  width: var(--server-size);
  transform: rotate(90deg);
  margin: 0 10px;
  position: unset;
}
#app-mount .guilds_a4d4d9 [class*=guildSeparator] {
  transform: rotate(90deg);
  width: var(--server-size);
}
#app-mount .guilds_a4d4d9 [class*=expandedFolderBackground] {
  border-radius: 10px;
  height: 100%;
}
#app-mount .guilds_a4d4d9 ul[id^=folder-items-] {
  gap: var(--server-spacing) !important;
}
#app-mount .guilds_a4d4d9 .folder_bc7085 {
  background: transparent;
}
#app-mount .guilds_a4d4d9 .wrapper_b7c66a {
  top: 0;
  bottom: 0;
}
#app-mount .guilds_a4d4d9 .target_b7c66a::before {
  top: 0;
  height: var(--server-size);
  width: 4px;
  left: -6px;
}
#app-mount .guilds_a4d4d9.hidden_fea3ef + .base_a4d4d9 {
  top: 0 !important;
}
#app-mount [class*=listItemTooltip] {
  position: absolute;
  max-width: unset;
  white-space: nowrap;
  margin-left: calc(var(--server-size) / -1 - 20px);
  top: calc(var(--server-size) - 10px);
}
#app-mount [class*=listItemTooltip] [class*=tooltipPointer] {
  transform: rotate(180deg);
  top: -5px !important;
  right: unset;
  left: 13px;
  z-index: 1;
}
#app-mount .friendsOnline-2JkivWm,
#app-mount .friendsOnline_2JkivW {
  position: absolute;
  transform: translate(-50%, 50%);
  top: calc(-50% + var(--server-spacing));
  left: -50%;
  width: calc(var(--server-size) + var(--server-spacing));
  display: flex;
  justify-content: center;
}
#app-mount .guilds_a4d4d9.content_Pph8t6,
#app-mount .BF-folderSidebar {
  position: absolute !important;
  top: calc(var(--server-container) * 2) !important;
}
#app-mount .guilds_a4d4d9.content_Pph8t6:not(.closed-j55_T-) + .base_a4d4d9,
#app-mount .BF-folderSidebar:not(.closed-j55_T-) + .base_a4d4d9 {
  top: calc(var(--server-container) * 2.5) !important;
}
#app-mount .guilds_a4d4d9 .frame_oXWS21[class*=listItem] {
  height: var(--server-size) !important;
}
#app-mount .guilds_a4d4d9 .frame_oXWS21[class*=listItem] .wrapper__8436d {
  height: 100% !important;
}
#app-mount .guilds_a4d4d9 .frame_oXWS21[class*=listItem] .button-Jt-tIg {
  width: 100%;
  height: 100% !important;
  border-radius: 50%;
  padding: 2px;
  font-size: 10px;
  box-sizing: border-box;
  text-align: center;
}
#app-mount .BF-folderSidebar {
  top: calc(var(--server-container)) !important;
}
#app-mount .serverCountWrap_k8F5De {
  height: var(--server-size);
}
#app-mount .serverCount_FsTTs1 {
  white-space: pre-line;
  font-size: 12px;
  display: flex;
  align-items: center;
}

html.platform-osx #app-mount .typeMacOS_a934d8 {
  width: 100%;
}
html.platform-osx #app-mount .base_a4d4d9 {
  top: calc(var(--server-container) + 30px) !important;
}
html.platform-osx #app-mount #pluginNotice {
  top: 32px;
  z-index: 100000 !important;
}

body.folderContentIsOpen_zz6FgW .base_a4d4d9 {
  transition: 0.2s ease !important;
}

.accountProfilePopoutWrapper_b2ca13 {
  left: 0;
}`,
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
    css: `/**
 * @name Better Message Buttons
 * @description Organizes the message buttons in a grid, with Reply and Edit buttons separated
 * @author Andrew Grant
 * @version 2.1
*/

:root {
  --msg-solo-button-width: 36px;
  --msg-grid-button-padding: 32px;
  --msg-grid-columns: 2;
  --msg-button-height: 64px;
  --msg-button-border-radius: 8px;
  --msg-section-spacing: 12px;
  --msg-offset-Y: 0px;
}

div[class^="buttonsInner_"] {
  grid: repeat(var(--msg-grid-columns), var(--msg-grid-button-padding)) / auto-flow var(--msg-grid-button-padding);
  grid-auto-flow: column;
  transform: translateX(calc(((var(--msg-section-spacing) / 2) + var(--msg-solo-button-width)) * -1)) translateY(calc(var(--msg-offset-Y) * -1));
  border-radius: var(--msg-button-border-radius);
}

/* don't make disconnected buttons have hover styling  */
div[class^="buttonsInner_"]:has(div[aria-label="Reply"]:hover),
div[class^="buttonsInner_"]:has(div[aria-label="Edit"]:hover) {
  border: 1px solid var(--border-subtle);
  box-shadow: var(--elevation-stroke);
}

div[aria-label="Reply"], div[aria-label="Edit"] {
  order: 1;
  grid-row: span 2;
  height: var(--msg-button-height);
  width: var(--msg-solo-button-width);
  border: 1px solid var(--border-faint);
  border-radius: var(--msg-button-border-radius);
  position: absolute;
  box-shadow: var(--shadow-low);
  background: var(--background-nested-floating);
  right: calc((var(--msg-section-spacing) + var(--msg-solo-button-width)) * -1);
}

/* for use with ShowAllMessageButtons plugin */
div[class^="buttonsInner_"]:has(div[aria-label="Edit"]):has(div[aria-label="Reply"]) {
  transform: translateX(calc(((var(--msg-section-spacing) * 2) + (var(--msg-solo-button-width) * 2)) * -1));
}

/* for use with ShowAllMessageButtons plugin */
div[class^="buttonsInner_"]:has(div[aria-label="Edit"]) div[aria-label="Reply"] {
  right: calc(((var(--msg-section-spacing) * 2) + (var(--msg-solo-button-width) * 2)) * -1);
}

div[aria-label="Reply"]:hover, div[aria-label="Edit"]:hover {
  background: var(--background-nested-floating);
  box-shadow: var(--elevation-stroke), var(--elevation-medium);
  border: 1px solid var(--border-subtle);
  opacity: 1;
}

div[class*="popoverReactionHoverBar_"] > div[class^="separator_"] {
  display: none;
}`,
    helpText: "This organizes message buttons in a grid layout where buttons are grouped together",
    previewBefore: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-before.png",
    previewAfter: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-after.png"
  }),

  createTweak({
    id: 'BetterMessageButtonsAlt',
    label: 'Better Message Buttons (Alt)',
    description: 'Same as above, but also separates the Forward button',
    section: 'coreUI',
    css: `/**
 * @name Better Message Buttons Alternate
 * @description Organizes the message buttons in a grid, with Reply, Edit, and Forward buttons separated
 * @author Andrew Grant
 * @version 2.1
*/

:root {
  --msg-solo-button-width: 36px;
  --msg-grid-button-padding: 32px;
  --msg-grid-columns: 2;
  --msg-button-height: 64px;
  --msg-button-border-radius: 8px;
  --msg-section-spacing: 12px;
  --msg-offset-Y: 0px;
}

div[class^="buttonsInner_"] {
  grid: repeat(var(--msg-grid-columns), var(--msg-grid-button-padding)) / auto-flow var(--msg-grid-button-padding);
  grid-auto-flow: column;
  transform: translateX(calc(((var(--msg-section-spacing) / 2) + var(--msg-solo-button-width)) * -1)) translateY(calc(var(--msg-offset-Y) * -1));
  border-radius: var(--msg-button-border-radius);
}

/* don't make disconnected buttons have hover styling  */
div[class^="buttonsInner_"]:has(div[aria-label="Reply"]:hover),
div[class^="buttonsInner_"]:has(div[aria-label="Edit"]:hover),
div[class^="buttonsInner_"]:has(div[aria-label="Forward"]:hover) {
  border: 1px solid var(--border-subtle);
  box-shadow: var(--elevation-stroke);
}

div[aria-label="Reply"], div[aria-label="Edit"], div[aria-label="Forward"] {
  order: 1;
  grid-row: span 2;
  height: var(--msg-button-height);
  width: var(--msg-solo-button-width);
  border: 1px solid var(--border-faint);
  border-radius: var(--msg-button-border-radius);
  position: absolute;
  box-shadow: var(--shadow-low);
  background: var(--background-nested-floating);
  right: calc((var(--msg-section-spacing) + var(--msg-solo-button-width)) * -1);
}

div[aria-label="Forward"] {
  left: calc((var(--msg-section-spacing) + var(--msg-solo-button-width)) * -1);
}

/* for use with ShowAllMessageButtons plugin */
div[class^="buttonsInner_"]:has(div[aria-label="Edit"]):has(div[aria-label="Reply"]) {
  transform: translateX(calc(((var(--msg-section-spacing) * 2) + (var(--msg-solo-button-width) * 2)) * -1));
}

/* for use with ShowAllMessageButtons plugin */
div[class^="buttonsInner_"]:has(div[aria-label="Edit"]) div[aria-label="Reply"] {
  right: calc(((var(--msg-section-spacing) * 2) + (var(--msg-solo-button-width) * 2)) * -1);
}

div[aria-label="Reply"]:hover, div[aria-label="Edit"]:hover, div[aria-label="Forward"]:hover {
  background: var(--background-nested-floating);
  box-shadow: var(--elevation-stroke), var(--elevation-medium);
  border: 1px solid var(--border-subtle);
  opacity: 1;
}

div[class*="popoverReactionHoverBar_"] > div[class^="separator_"] {
  display: none;
}`,
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
    css: `#user-settings-cog>.scroller_d90b3d>.item_d90b3d{display:none}`,
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
    css: `/**
* @name hidePinDiscovery
* @author krystalskullofficial
* @version 2.0
* @description Hides the new pinned Discovery Icon
*/
[class*=unreadMentionsFixedFooter_]{bottom: 0px !important;}

[class^=footer_]:has([class*=fixedDiscoveryIcon_]) {display: none; }
`,
    helpText: "This hides the new pinned Discovery Icon"
  })
]; 