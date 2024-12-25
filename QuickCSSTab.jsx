const React = require("react");
const SectionHeader = require("./SectionHeader");

function QuickCSSTab() {
  const [css, setCss] = React.useState("");

  React.useEffect(() => {
    const savedCss = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "quickcss",
    );
    if (savedCss) {
      setCss(savedCss);
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

    NekocordNative.preferences.setForPlugin(
      "cat.kitties.arcane.Essentials",
      "quickcss",
      newCss,
    );

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

  const handleClear = () => {
    setCss("");
    NekocordNative.preferences.setForPlugin(
      "cat.kitties.arcane.Essentials",
      "quickcss",
      "",
    );
    const styleElement = document.getElementById("essentials-quickcss");
    if (styleElement) {
      styleElement.textContent = "";
    }
  };

  const handleCopy = () => {
    DiscordNative.clipboard.copy(css);
  };

  return (
    <div className="quickcss-container" style={{ padding: "16px" }}>
      <SectionHeader title="QuickCSS" />

      <div className="header-container" style={{ marginBottom: "24px" }}>
        <div
          className="defaultColor_a595eb text-md/normal_dc00ef"
          style={{ opacity: 0.8, lineHeight: "1.5" }}
        >
          <p>Add custom CSS snippets here. Changes apply instantly.</p>
          <p
            style={{
              color: "var(--brand-experiment)",
              fontSize: "13px",
              marginTop: "4px",
              fontStyle: "italic",
            }}
          >
            {""}
          </p>
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
          }}
        >
          Clear All
        </button>
      </div>

      <div className="codeContainer_f8f345">
        <div className="codeActions_f8f345">
          <div
            className="copyButton"
            role="button"
            tabIndex="0"
            onClick={handleCopy}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 16a1 1 0 0 1-1-1v-5a8 8 0 0 1 8-8h5a1 1 0 0 1 1 1v.5a.5.5 0 0 1-.5.5H10a6 6 0 0 0-6 6v5.5a.5.5 0 0 1-.5.5H3Z"
              ></path>
              <path
                fill="currentColor"
                d="M6 18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4h-3a5 5 0 0 1-5-5V6h-4a4 4 0 0 0-4 4v8Z"
              ></path>
              <path
                fill="currentColor"
                d="M21.73 12a3 3 0 0 0-.6-.88l-4.25-4.24a3 3 0 0 0-.88-.61V9a3 3 0 0 0 3 3h2.73Z"
              ></path>
            </svg>
          </div>
        </div>
        <textarea
          value={css}
          onChange={handleCssChange}
          className="scrollbarGhostHairline_c858ce scrollbar_c858ce hljs css"
          style={{
            width: "100%",
            height: "400px",
            backgroundColor: "var(--background-secondary)",
            color: "var(--text-normal)",
            padding: "16px",
            fontFamily: "var(--font-code), monospace",
            resize: "vertical",
            border: "none",
            outline: "none",
            fontSize: "14px",
            lineHeight: "1.5",
            caretColor: "var(--brand-experiment)",
          }}
          spellCheck="false"
          placeholder={`/* Add your custom CSS here */

/* Example: */
.chat-input {
  background-color: var(--background-primary);
  border-radius: 8px;
  padding: 12px;
}

/* You can also use Discord's CSS variables */
.sidebar {
  background: var(--background-secondary);
  color: var(--text-normal);
}`}
        />
      </div>

      <style>{`
        .codeContainer_f8f345 {
          background-color: var(--background-secondary);
          border-radius: 4px;
          position: relative;
        }

        .codeActions_f8f345 {
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.1s ease;
        }

        .codeContainer_f8f345:hover .codeActions_f8f345 {
          opacity: 1;
        }

        .codeActions_f8f345 > div {
          padding: 4px;
          cursor: pointer;
          border-radius: 4px;
          color: var(--text-normal);
          background-color: var(--background-secondary);
          transition: background-color 0.1s ease;
        }

        .codeActions_f8f345 > div:hover {
          background-color: var(--background-modifier-hover);
        }

        .css-editor::selection {
          background-color: var(--brand-experiment-30a);
        }
        
        .css-editor:not(:focus)::placeholder {
          color: var(--text-muted);
          opacity: 0.7;
        }

        .scrollbarGhostHairline_c858ce {
          scrollbar-width: thin;
          scrollbar-color: var(--background-tertiary) transparent;
        }

        .scrollbarGhostHairline_c858ce::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        .scrollbarGhostHairline_c858ce::-webkit-scrollbar-thumb {
          background-color: var(--background-tertiary);
          border-radius: 4px;
        }

        .scrollbarGhostHairline_c858ce::-webkit-scrollbar-track {
          background-color: transparent;
        }

        /* Discord Code Block Syntax Highlighting */
        .hljs {
          color: var(--text-normal);
          background: var(--background-secondary);
        }

        .hljs-selector-tag,
        .hljs-keyword,
        .hljs-at_rule {
          color: #859900;
        }

        .hljs-attribute {
          color: #268bd2;
        }

        .hljs-string,
        .hljs-selector-id,
        .hljs-selector-class,
        .hljs-selector-attr,
        .hljs-selector-pseudo {
          color: #2aa198;
        }

        .hljs-number {
          color: #d33682;
        }

        .hljs-built_in {
          color: #cb4b16;
        }

        .hljs-comment {
          color: var(--text-muted);
        }

        .hljs-operator,
        .hljs-punctuation {
          color: var(--text-normal);
        }
      `}</style>
    </div>
  );
}

module.exports = QuickCSSTab;
