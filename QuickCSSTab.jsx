const React = require("react");

function QuickCSSTab() {
  const [css, setCss] = React.useState("");

  React.useEffect(() => {
    // Load saved CSS from preferences
    const savedCss = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "quickcss",
    );
    if (savedCss) {
      setCss(savedCss);
      // Apply saved CSS on startup
      const styleElement = document.getElementById("essentials-quickcss");
      if (styleElement) {
        styleElement.textContent = savedCss;
      } else {
        const newStyle = document.createElement("style");
        newStyle.id = "essentials-quickcss";
        newStyle.textContent = savedCss;
        document.head.appendChild(newStyle);
      }
    }
  }, []);

  const handleCssChange = (event) => {
    const newCss = event.target.value;
    setCss(newCss);

    // Save to preferences
    NekocordNative.preferences.setForPlugin(
      "cat.kitties.arcane.Essentials",
      "quickcss",
      newCss,
    );

    // Apply CSS changes
    const styleElement = document.getElementById("essentials-quickcss");
    if (styleElement) {
      styleElement.textContent = newCss;
    } else {
      const newStyle = document.createElement("style");
      newStyle.id = "essentials-quickcss";
      newStyle.textContent = newCss;
      document.head.appendChild(newStyle);
    }
  };

  return (
    <div>
      <h1 className="defaultColor_a595eb text-md/normal_dc00ef">QuickCSS</h1>
      <div className="defaultColor_a595eb text-md/normal_dc00ef mb-8">
        <p>Add custom CSS snippets here.</p>
      </div>
      <textarea
        value={css}
        onChange={handleCssChange}
        className="input_d266e7"
        style={{
          width: "100%",
          height: "400px",
          backgroundColor: "var(--background-secondary)",
          color: "var(--text-normal)",
          padding: "8px",
          borderRadius: "4px",
          fontFamily: "monospace",
          resize: "vertical",
        }}
        spellCheck="false"
        placeholder="/* Add your custom CSS here */"
      />
    </div>
  );
}

module.exports = QuickCSSTab; 