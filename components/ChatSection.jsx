const React = require("react");
const SettingsToggle = require('../SettingsToggle');
const SectionHeader = require('../SectionHeader');
const tweaks = require('../tweaks');

function ChatSection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
  const chatTweaks = tweaks.filter(tweak => tweak.section === 'chat');

  return (
    <div className="settings-section mb-16">
      <SectionHeader title="Chat Features" />
      <div className={`${settings.GridView ? "settings-grid" : ""} mt-8`}>
        {chatTweaks.map(tweak => (
          filterSettings(tweak.label, tweak.description) && (
            <SettingsToggle
              key={tweak.id}
              label={tweak.label}
              description={tweak.description}
              value={settings[tweak.id]}
              onChange={() => handleToggle(tweak.id)}
              helpText={tweak.helpText}
              previewBefore={tweak.previewBefore}
              previewAfter={tweak.previewAfter}
              onPreviewClick={
                tweak.previewBefore || tweak.previewAfter 
                  ? () => handlePreviewClick(tweak.previewBefore, tweak.previewAfter)
                  : undefined
              }
            />
          )
        ))}
      </div>
    </div>
  );
}

module.exports = ChatSection; 