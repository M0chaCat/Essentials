const React = require("react");
const SettingsToggle = require('../SettingsToggle');
const SectionHeader = require('../SectionHeader');
const tweaks = require('../tweaks');

function CoreUISection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
  const coreTweaks = tweaks.filter(tweak => tweak.section === 'coreUI');

  return (
    <div className="settings-section mb-16">
      <SectionHeader title="Core UI Improvements" />
      <div className={`${settings.GridView ? "settings-grid" : ""} mt-8`}>
        {coreTweaks.map(tweak => (
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

module.exports = CoreUISection; 