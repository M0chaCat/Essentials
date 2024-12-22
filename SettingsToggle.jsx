const React = require("react");

function SettingsToggle({
  label,
  description,
  value,
  onChange,
  previewBefore,
  previewAfter,
  helpText,
  onPreviewClick,
}) {
  const [showHelp, setShowHelp] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    onChange();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div
      className={`mt-4 defaultColor_a595eb setting-toggle ${isAnimating ? "animating" : ""}`}
      style={{
        width: "100%",
        padding: "16px",
        backgroundColor: "var(--background-secondary-alt)",
        borderRadius: "8px",
        transition: "transform 0.2s ease, background-color 0.2s ease",
        border: "1px solid var(--background-modifier-accent)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: previewBefore || previewAfter ? "8px" : "0",
        }}
      >
        <div style={{ flex: 1 }}>
          <h3 className="text-md/normal_dc00ef" style={{ marginBottom: "4px" }}>
            {label}
          </h3>
          <p className="text-sm/normal_dc00ef" style={{ opacity: 0.7 }}>
            {description}
          </p>
        </div>
        <div
          className="container_c669ee"
          onClick={handleToggle}
          style={{ cursor: "pointer" }}
        >
          <div className={`slider_c669ee${value ? " checked_c669ee" : ""}`}>
            <div className="handle_c669ee">
              <svg
                className="icon_c669ee"
                aria-hidden="true"
                role="img"
                width="10"
                height="10"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d={
                    value
                      ? "M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"
                      : "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z"
                  }
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "8px",
          alignItems: "center",
        }}
      >
        {helpText && (
          <div
            className="help-icon"
            onClick={() => setShowHelp(!showHelp)}
            style={{
              cursor: "pointer",
              width: "16px",
              height: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor: "var(--background-tertiary)",
              color: "var(--text-muted)",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            ?
          </div>
        )}
        {(previewBefore || previewAfter) && (
          <button
            onClick={() => onPreviewClick(previewBefore, previewAfter)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "4px",
              padding: "4px 8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "var(--interactive-normal)",
              fontSize: "12px",
              marginTop: "8px",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
              />
            </svg>
            Preview
          </button>
        )}
      </div>

      {showHelp && helpText && (
        <div
          className="help-tooltip"
          style={{
            backgroundColor: "var(--background-floating)",
            padding: "12px",
            borderRadius: "4px",
            marginTop: "8px",
            color: "var(--text-normal)",
            fontSize: "14px",
            lineHeight: "1.4",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            border: "1px solid var(--background-modifier-accent)",
          }}
        >
          {helpText}
        </div>
      )}
    </div>
  );
}

module.exports = SettingsToggle; 