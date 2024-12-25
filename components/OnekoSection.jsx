const React = require("react");
const SettingsToggle = require('../SettingsToggle');
const SectionHeader = require('../SectionHeader');
const tweaks = require('../tweaks');

function OnekoSection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
  const onekoTweaks = tweaks.filter(tweak => tweak.section === 'oneko');

  return (
    <div className="settings-section mb-16">
      <SectionHeader title="Oneko Skins" />
      <div className={`${settings.GridView ? "settings-grid" : ""} mt-8`}>
        {onekoTweaks.map(tweak => (
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

module.exports = OnekoSection; 