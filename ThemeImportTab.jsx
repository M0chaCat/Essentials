const React = require("react");
const SectionHeader = require("./SectionHeader");

const applyThemeUrls = (urlsText) => {
  if (!document.head) return;

  const existingStyles = document.querySelectorAll(
    '[id^="essentials-themeimport-"]',
  );
  existingStyles.forEach((style) => style.remove());

  const urlList = urlsText
    .split(/[\n,]+/)
    .map((url) => url.trim())
    .filter((url) => url);

  urlList.forEach((url, index) => {
    const styleElement = document.createElement("style");
    styleElement.id = `essentials-themeimport-${index}`;
    styleElement.textContent = `@import url("${url}");`;
    document.head.appendChild(styleElement);
  });
};

function ThemeImportTab() {
  const [urls, setUrls] = React.useState("");

  React.useEffect(() => {
    const savedUrls = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "themeimport",
    );
    if (savedUrls) {
      setUrls(savedUrls);
      applyThemeUrls(savedUrls);
    }
  }, []);

  const handleUrlsChange = (event) => {
    const newUrls = event.target.value;
    setUrls(newUrls);

    NekocordNative.preferences.setForPlugin(
      "cat.kitties.arcane.Essentials",
      "themeimport",
      newUrls,
    );

    applyThemeUrls(newUrls);
  };

  const handleClear = () => {
    setUrls("");
    NekocordNative.preferences.setForPlugin(
      "cat.kitties.arcane.Essentials",
      "themeimport",
      "",
    );
    applyThemeUrls("");
  };

  return (
    <div className="theme-import-container">
      <SectionHeader title="Theme Import" />

      <div className="header-container" style={{ marginBottom: "24px" }}>
        <div
          className="defaultColor_a595eb text-md/normal_dc00ef"
          style={{ opacity: 0.8, lineHeight: "1.5" }}
        >
          <p>
            Import themes by URL. Add each theme URL on a new line or separate
            with commas.
          </p>
          <p
            style={{
              color: "var(--brand-experiment)",
              fontSize: "13px",
              marginTop: "4px",
              fontStyle: "italic",
            }}
          ></p>
        </div>
      </div>

      <div
        className="button-container"
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "16px",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={handleClear}
          className="button-f14gos"
          style={{
            padding: "8px 16px",
            borderRadius: "4px",
            backgroundColor: "var(--button-danger-background)",
            color: "var(--text-normal)",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            transition: "background-color 0.2s, transform 0.2s",
            ":hover": {
              transform: "translateY(-1px)",
              filter: "brightness(1.1)",
            },
          }}
        >
          Clear All
        </button>
      </div>

      <div
        className="textarea-container"
        style={{
          backgroundColor: "var(--background-secondary)",
          borderRadius: "8px",
          padding: "2px",
          border: "1px solid var(--background-tertiary)",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <textarea
          value={urls}
          onChange={handleUrlsChange}
          className="input_d266e7"
          wrap="off"
          style={{
            width: "100%",
            height: "400px",
            backgroundColor: "var(--background-secondary)",
            color: "var(--text-normal)",
            padding: "16px",
            borderRadius: "8px",
            fontFamily: "var(--font-code), monospace",
            resize: "vertical",
            border: "none",
            outline: "none",
            fontSize: "14px",
            lineHeight: "1.5",
            caretColor: "var(--brand-experiment)",
            whiteSpace: "pre",
            overflowX: "scroll",
            overflowY: "auto",
            "&::after": {
              content: '""',
              display: "inline-block",
              width: "32px",
              height: "1px",
            },
            "&::-webkit-input-placeholder": {
              fontSize: "13px",
            },
            "&::-moz-placeholder": {
              fontSize: "13px",
            },
            "&:-ms-input-placeholder": {
              fontSize: "13px",
            },
            "&::placeholder": {
              fontSize: "13px",
            },
          }}
          spellCheck="false"
          placeholder="Enter theme URLs here...

Examples:
https://example.com/theme1.css
https://example.com/theme2.css

Or separate with commas:
https://example.com/theme1.css, https://example.com/theme2.css"
        />
      </div>
    </div>
  );
}

module.exports = { ThemeImportTab, applyThemeUrls };
