const React = require("react");

function PreviewModal({ previewBefore, previewAfter, onClose }) {
  return (
    <div
      className="preview-modal-backdrop"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        className="preview-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "var(--background-primary)",
          borderRadius: "8px",
          padding: "16px",
          maxWidth: "90vw",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          animation: "scaleIn 0.2s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            className="text-md/normal_dc00ef"
            style={{ color: "var(--header-primary)" }}
          >
            Preview
          </h2>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              borderRadius: "4px",
              color: "var(--interactive-normal)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
              />
            </svg>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            overflow: "auto",
            justifyContent: "center",
          }}
        >
          {previewBefore && (
            <div
              style={{
                flex: "0 1 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{ marginBottom: "8px", color: "var(--header-primary)" }}
              >
                Before
              </div>
              <img
                src={previewBefore}
                alt="Before preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  borderRadius: "4px",
                  border: "1px solid var(--background-modifier-accent)",
                }}
              />
            </div>
          )}
          {previewAfter && (
            <div
              style={{
                flex: "0 1 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{ marginBottom: "8px", color: "var(--header-primary)" }}
              >
                After
              </div>
              <img
                src={previewAfter}
                alt="After preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  borderRadius: "4px",
                  border: "1px solid var(--background-modifier-accent)",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

module.exports = PreviewModal; 