const React = require("react");
const SettingsToggle = require('../SettingsToggle');
const SectionHeader = require('../SectionHeader');

function OnekoSection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
  return (
    <div className="settings-section mb-16">
      <SectionHeader title="Oneko Skins" />
      <div className={`${settings.GridView ? "settings-grid" : ""} mt-8`}>
      {filterSettings(
            "Eevee Oneko",
            "Replaces the Oneko cat with an Eevee",
          ) && (
            <SettingsToggle
              label="Eevee Oneko"
              description="Replaces the Oneko cat with an Eevee"
              value={settings.EeveeOneko}
              onChange={() => handleToggle("EeveeOneko")}
            />
          )}
          {filterSettings(
            "Calico Oneko",
            "Replaces the Oneko cat with a Calico cat",
          ) && (
            <SettingsToggle
              label="Calico Oneko"
              description="Replaces the Oneko cat with a Calico cat"
              value={settings.CalicoOneko}
              onChange={() => handleToggle("CalicoOneko")}
            />
          )}
          {filterSettings("Fox Oneko", "Replaces the Oneko cat with a Fox") && (
            <SettingsToggle
              label="Fox Oneko"
              description="Replaces the Oneko cat with a Fox"
              value={settings.FoxOneko}
              onChange={() => handleToggle("FoxOneko")}
            />
          )}
          {filterSettings(
            "Ghost Oneko",
            "Replaces the Oneko cat with a Ghost cat",
          ) && (
            <SettingsToggle
              label="Ghost Oneko"
              description="Replaces the Oneko cat with a Ghost cat"
              value={settings.GhostOneko}
              onChange={() => handleToggle("GhostOneko")}
            />
          )}
          {filterSettings(
            "Grey Oneko",
            "Replaces the Oneko cat with a Grey cat",
          ) && (
            <SettingsToggle
              label="Grey Oneko"
              description="Replaces the Oneko cat with a Grey cat"
              value={settings.GreyOneko}
              onChange={() => handleToggle("GreyOneko")}
            />
          )}
          {filterSettings("Kina Oneko", "Replaces the Oneko cat with Kina") && (
            <SettingsToggle
              label="Kina Oneko"
              description="Replaces the Oneko cat with Kina"
              value={settings.KinaOneko}
              onChange={() => handleToggle("KinaOneko")}
            />
          )}
          {filterSettings("Lucy Oneko", "Replaces the Oneko cat with Lucy") && (
            <SettingsToggle
              label="Lucy Oneko"
              description="Replaces the Oneko cat with Lucy"
              value={settings.LucyOneko}
              onChange={() => handleToggle("LucyOneko")}
            />
          )}
          {filterSettings("Maia Oneko", "Replaces the Oneko cat with Maia") && (
            <SettingsToggle
              label="Maia Oneko"
              description="Replaces the Oneko cat with Maia"
              value={settings.MaiaOneko}
              onChange={() => handleToggle("MaiaOneko")}
            />
          )}
          {filterSettings(
            "Maria Oneko",
            "Replaces the Oneko cat with Maria",
          ) && (
            <SettingsToggle
              label="Maria Oneko"
              description="Replaces the Oneko cat with Maria"
              value={settings.MariaOneko}
              onChange={() => handleToggle("MariaOneko")}
            />
          )}
          {filterSettings("Mike Oneko", "Replaces the Oneko cat with Mike") && (
            <SettingsToggle
              label="Mike Oneko"
              description="Replaces the Oneko cat with Mike"
              value={settings.MikeOneko}
              onChange={() => handleToggle("MikeOneko")}
            />
          )}
          {filterSettings(
            "Silver Oneko",
            "Replaces the Oneko cat with Silver",
          ) && (
            <SettingsToggle
              label="Silver Oneko"
              description="Replaces the Oneko cat with Silver"
              value={settings.SilverOneko}
              onChange={() => handleToggle("SilverOneko")}
            />
          )}
          {filterSettings(
            "Silversky Oneko",
            "Replaces the Oneko cat with Silversky",
          ) && (
            <SettingsToggle
              label="Silversky Oneko"
              description="Replaces the Oneko cat with Silversky"
              value={settings.SilverskyOneko}
              onChange={() => handleToggle("SilverskyOneko")}
            />
          )}
          {filterSettings(
            "Snuupy Oneko",
            "Replaces the Oneko cat with Snuupy",
          ) && (
            <SettingsToggle
              label="Snuupy Oneko"
              description="Replaces the Oneko cat with Snuupy"
              value={settings.SnuupyOneko}
              onChange={() => handleToggle("SnuupyOneko")}
            />
          )}
          {filterSettings(
            "Spirit Oneko",
            "Replaces the Oneko cat with Spirit",
          ) && (
            <SettingsToggle
              label="Spirit Oneko"
              description="Replaces the Oneko cat with Spirit"
              value={settings.SpiritOneko}
              onChange={() => handleToggle("SpiritOneko")}
            />
          )}
          {filterSettings("Tora Oneko", "Replaces the Oneko cat with Tora") && (
            <SettingsToggle
              label="Tora Oneko"
              description="Replaces the Oneko cat with Tora"
              value={settings.ToraOneko}
              onChange={() => handleToggle("ToraOneko")}
            />
          )}
          {filterSettings(
            "Valentine Oneko",
            "Replaces the Oneko cat with Valentine",
          ) && (
            <SettingsToggle
              label="Valentine Oneko"
              description="Replaces the Oneko cat with Valentine"
              value={settings.ValentineOneko}
              onChange={() => handleToggle("ValentineOneko")}
            />
          )}
          {filterSettings("Ace Oneko", "Replaces the Oneko cat with Ace") && (
            <SettingsToggle
              label="Ace Oneko"
              description="Replaces the Oneko cat with Ace"
              value={settings.AceOneko}
              onChange={() => handleToggle("AceOneko")}
            />
          )}
          {filterSettings("Mono Oneko", "Replaces the Oneko cat with Mono") && (
            <SettingsToggle
              label="Mono Oneko"
              description="Replaces the Oneko cat with Mono"
              value={settings.MonoOneko}
              onChange={() => handleToggle("MonoOneko")}
            />
          )}
          {filterSettings(
            "Bunny Oneko",
            "Replaces the Oneko cat with Bunny",
          ) && (
            <SettingsToggle
              label="Bunny Oneko"
              description="Replaces the Oneko cat with Bunny"
              value={settings.BunnyOneko}
              onChange={() => handleToggle("BunnyOneko")}
            />
          )}
          {filterSettings(
            "Esmeralda Oneko",
            "Replaces the Oneko cat with Esmeralda",
          ) && (
            <SettingsToggle
              label="Esmeralda Oneko"
              description="Replaces the Oneko cat with Esmeralda"
              value={settings.EsmeraldaOneko}
              onChange={() => handleToggle("EsmeraldaOneko")}
            />
          )}
          {filterSettings("Jess Oneko", "Replaces the Oneko cat with Jess") && (
            <SettingsToggle
              label="Jess Oneko"
              description="Replaces the Oneko cat with Jess"
              value={settings.JessOneko}
              onChange={() => handleToggle("JessOneko")}
            />
          )}

      </div>
    </div>
  );
}

module.exports = OnekoSection; 