const React = require("react");
const SearchBar = require('../SearchBar');
const SettingsToggle = require('../SettingsToggle');
const PreviewModal = require('../PreviewModal');
const CoreUISection = require('./CoreUISection');
const InterfaceSection = require('./InterfaceSection');
const ChatSection = require('./ChatSection');
const VisualSection = require('./VisualSection');
const FunSection = require('./FunSection');
const OnekoSection = require('./OnekoSection');
const tweaks = require('../tweaks');

function M0chaTweaksTab() {
  const [settings, setSettings] = React.useState({});
  const [searchTerm, setSearchTerm] = React.useState("");
  const [showStats, setShowStats] = React.useState(false);
  const [previewModalState, setPreviewModalState] = React.useState({
    isOpen: false,
    before: null,
    after: null,
  });

  // Calculate enabled counts
  const enabledCounts = React.useMemo(() => {
    const countBySection = (section) => 
      tweaks.filter(tweak => 
        tweak.section === section && settings[tweak.id]
      ).length;

    return {
      coreUI: countBySection('coreUI'),
      interface: countBySection('interface'),
      chat: countBySection('chat'),
      visual: countBySection('visual'),
      fun: countBySection('fun'),
      oneko: countBySection('oneko'),
      get total() {
        return this.coreUI + this.interface + this.chat + 
               this.visual + this.fun + this.oneko;
      }
    };
  }, [settings]);

  // Load settings from NekocordNative preferences on mount
  React.useEffect(() => {
    const savedPrefs = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "settings"
    );
    if (savedPrefs) {
      setSettings(savedPrefs);
    }
  }, []);

  const handleToggle = (settingKey) => {
    setSettings((prev) => {
      const newSettings = {
        ...prev,
        [settingKey]: !prev[settingKey],
      };

      // Save to NekocordNative preferences
      NekocordNative.preferences.setForPlugin(
        "cat.kitties.arcane.Essentials",
        "settings",
        newSettings
      );

      // Trigger the settings changed event for CSS refresh
      window.dispatchEvent(new CustomEvent("essentials-settings-changed"));

      return newSettings;
    });
  };

  // Function to filter settings based on search term
  const filterSettings = (label, description) => {
    if (!searchTerm) return true;
    
    const search = searchTerm.toLowerCase();
    return (
      label.toLowerCase().includes(search) ||
      description.toString().toLowerCase().includes(search)
    );
  };

  // Add handler for preview clicks
  const handlePreviewClick = (before, after) => {
    setPreviewModalState({
      isOpen: true,
      before: before,
      after: after
    });
  };

  return (
    <div>
      <h1 className="defaultColor_a595eb text-md/normal_dc00ef">
        M0chaTweaks Settings
      </h1>
      
      {/* Header section with search and controls */}
      <div className="defaultColor_a595eb text-md/normal_dc00ef mb-8">
        <p>Welcome to the M0chaTweaks page!</p>
        <SearchBar onSearch={setSearchTerm} />
        
        {/* View controls container */}
        <div className="view-controls mt-4" style={{ display: "flex", gap: "16px" }}>
          <SettingsToggle
            label="Grid View"
            description="Toggle between grid and list view"
            value={settings.GridView}
            onChange={() => handleToggle("GridView")}
          />
          <SettingsToggle
            label="Show Statistics"
            description="Toggle statistics visibility"
            value={showStats}
            onChange={() => setShowStats(!showStats)}
          />
        </div>

        {/* Statistics section */}
        {showStats && (
          <div
            className="stats-container mt-4 mb-4"
            style={{
              backgroundColor: "var(--background-secondary)",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid var(--background-modifier-accent)",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>Enabled Settings</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "8px",
              }}
            >
              <div>Total: {enabledCounts.total}</div>
              <div>Core UI: {enabledCounts.coreUI}</div>
              <div>Interface: {enabledCounts.interface}</div>
              <div>Chat: {enabledCounts.chat}</div>
              <div>Visual: {enabledCounts.visual}</div>
              <div>Fun: {enabledCounts.fun}</div>
            </div>
          </div>
        )}
      </div>

      {/* Section components */}
      <CoreUISection 
        settings={settings}
        filterSettings={filterSettings}
        handleToggle={handleToggle}
        handlePreviewClick={handlePreviewClick}
      />
      <InterfaceSection 
        settings={settings}
        filterSettings={filterSettings}
        handleToggle={handleToggle}
        handlePreviewClick={handlePreviewClick}
      />
      <ChatSection 
        settings={settings}
        filterSettings={filterSettings}
        handleToggle={handleToggle}
        handlePreviewClick={handlePreviewClick}
      />
      <VisualSection 
        settings={settings}
        filterSettings={filterSettings}
        handleToggle={handleToggle}
        handlePreviewClick={handlePreviewClick}
      />
      <FunSection 
        settings={settings}
        filterSettings={filterSettings}
        handleToggle={handleToggle}
        handlePreviewClick={handlePreviewClick}
      />
      <OnekoSection 
        settings={settings}
        filterSettings={filterSettings}
        handleToggle={handleToggle}
        handlePreviewClick={handlePreviewClick}
      />

      {/* Styles and Preview Modal */}
      <style>
        {`
          .container_c669ee {
            width: 42px;
            height: 24px;
            position: relative;
            flex-shrink: 0;
          }

          .slider_c669ee {
            width: 100%;
            height: 100%;
            background-color: var(--background-tertiary);
            border-radius: 12px;
            transition: all .15s ease;
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);
          }

          .slider_c669ee.checked_c669ee {
            background-color: var(--status-positive);
          }

          .handle_c669ee {
            position: absolute;
            top: 2px;
            left: 2px;
            width: 20px;
            height: 20px;
            background-color: var(--interactive-normal);
            border-radius: 10px;
            transition: all .15s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }

          .slider_c669ee.checked_c669ee .handle_c669ee {
            left: 20px;
            background-color: #fff;
          }

          .icon_c669ee {
            width: 12px;
            height: 12px;
            color: var(--background-primary);
            opacity: 0.7;
          }

          .slider_c669ee.checked_c669ee .icon_c669ee {
            color: var(--status-positive);
          }

          .settings-section {
            animation: fadeIn 0.3s ease;
            padding-top: 16px;  /* Added top padding */
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .settings-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .settings-grid > div {
            margin-top: 0 !important;
          }

          .view-toggle {
            max-width: 300px;
          }

          .search-input:focus {
            outline: none;
            border-color: var(--brand-experiment);
            box-shadow: 0 0 0 1px var(--brand-experiment);
          }

          .search-input::placeholder {
            color: var(--text-muted);
          }

          // Add transition for smooth filtering
          .settings-section > div > div {
            transition: opacity 0.2s ease;
          }

          // Hide empty sections
          .settings-section:not(:has(> div > div:visible)) {
            display: none;
          }

          .setting-toggle {
            transform: scale(1);
          }

          .setting-toggle.animating {
            animation: togglePulse 0.3s ease;
          }

          @keyframes togglePulse {
            0% { transform: scale(1); }
            50% { transform: scale(0.98); }
            100% { transform: scale(1); }
          }

          /* Enhance existing transitions */
          .slider_c669ee {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .handle_c669ee {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .icon_c669ee {
            transition: opacity 0.2s ease;
          }
        `}
      </style>

      {previewModalState.isOpen && (
        <PreviewModal
          previewBefore={previewModalState.before}
          previewAfter={previewModalState.after}
          onClose={() =>
            setPreviewModalState({ isOpen: false, before: null, after: null })
          }
        />
      )}
    </div>
  );
}

module.exports = M0chaTweaksTab; 