const React = require("react");

function SectionHeader({ title }) {
  return (
    <>
      <h2
        className="defaultColor_a595eb text-md/normal_dc00ef mb-6"
        style={{
          fontSize: "20px",
          fontWeight: "600",
          color: "var(--header-primary)",
          position: "relative",
          paddingBottom: "8px",
        }}
      >
        {title}
      </h2>
      <div
        className="divider mb-12"
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, var(--header-primary) 0%, transparent 100%)",
          opacity: 0.3,
          borderRadius: "1px",
          marginBottom: "24px",
        }}
      />
    </>
  );
}

module.exports = SectionHeader;
