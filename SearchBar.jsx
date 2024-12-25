const React = require("react");

function SearchBar({ onSearch }) {
  return (
    <div
      className="search-container mb-4"
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <input
        type="text"
        placeholder="Search settings..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
        style={{
          width: "100%",
          padding: "10px 36px",
          backgroundColor: "var(--background-secondary)",
          border: "1px solid var(--background-modifier-accent)",
          borderRadius: "8px",
          color: "var(--text-normal)",
          fontSize: "14px",
        }}
      />
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        style={{
          position: "absolute",
          left: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "var(--text-muted)",
        }}
      >
        <path
          fill="currentColor"
          d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18C11.799 18 13.504 17.403 14.9 16.314L20.293 21.707L21.707 20.293ZM10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16Z"
        />
      </svg>
    </div>
  );
}

module.exports = SearchBar;
