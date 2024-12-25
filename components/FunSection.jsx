const React = require("react");
const SettingsToggle = require('../SettingsToggle');
const SectionHeader = require('../SectionHeader');
const tweaks = require('../tweaks');

function FunSection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
  const funTweaks = tweaks.filter(tweak => tweak.section === 'fun');

  return (
    <div className="settings-section mb-16">
      <SectionHeader title="Fun & Experimental" />
      <div className={`${settings.GridView ? "settings-grid" : ""} mt-8`}>
        {funTweaks.map(tweak => (
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

module.exports = FunSection; 