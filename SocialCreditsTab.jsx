const React = require("react");
const SectionHeader = require("./SectionHeader");
const CryptoJS = require("crypto-js"); // Import crypto-js

let points = 0; // Move points outside of the component
let currentUser; // Define currentUser at a higher scope

const updatePoints = (newPoints) => {
  points = newPoints; // Update the global points variable
  NekocordNative.preferences.setForPlugin(
    "cat.kitties.arcane.Essentials",
    "points",
    newPoints,
  );
};

let isListenerSetUp = false; // Flag to check if the listener is already set up

const encrypt = (text, userId) => {
  const encrypted = CryptoJS.AES.encrypt(text, userId).toString(); // Encrypt using crypto-js
  return encrypted;
};

const decrypt = (encryptedText, userId) => {
  const bytes = CryptoJS.AES.decrypt(encryptedText, userId); // Decrypt using crypto-js
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return decrypted;
};

// Wait for Nekocord modules to be initialized before subscribing to MESSAGE_CREATE event
Nekocord.webpackPatcher.onInitializationFinish(() => {
  currentUser = Nekocord.webpackModules.commonModules.UserStore.getCurrentUser(); // Set currentUser here
  if (!isListenerSetUp) {
    const messageCreateListener = ({ message }) => {
      if (message.author.id === currentUser?.id) {
        const savedPoints = NekocordNative.preferences.getForPlugin(
          "cat.kitties.arcane.Essentials",
          "points",
        );
        const decryptedPoints = savedPoints ? decrypt(savedPoints, currentUser.id) : null; // Decrypt points
        points = (typeof decryptedPoints === 'string' && !isNaN(parseInt(decryptedPoints))) 
          ? parseInt(decryptedPoints) 
          : -9999999999; // Set to -9999999999 if decryption fails or is invalid
        
        // Define an array of keywords that grant 2 points with regex for repeated letters
        const meowKeywords = [
          /:3+/,
          /meow+/,
          /mraow+/,
          /mrew+/,
          /mrow+/,
          /nya+/,
        ];
        
        // Check if the message contains any of the meow keywords and adjust points accordingly
        const newPoints = meowKeywords.some(keyword => keyword.test(message.content)) ? points + 2 : points + 1; // Increment points by 2 if any keyword is found, otherwise by 1
        updatePoints(encrypt(newPoints.toString(), currentUser.id)); // Encrypt and update points
        //console.log("mrew");
      }
    };

    // Subscribe to MESSAGE_CREATE event
    Nekocord.webpackModules.commonModules.FluxDispatcher.subscribe("MESSAGE_CREATE", messageCreateListener);
    isListenerSetUp = true; // Set the flag to true to prevent multiple setups
  }
});

function SocialCreditsTab() {
  React.useEffect(() => {
    const savedPoints = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "points",
    );

    // Initialize points with decrypted savedPoints
    const decryptedPoints = savedPoints ? decrypt(savedPoints, currentUser.id) : null; // Decrypt points
    // Check if decryptedPoints is a valid string before parsing
    points = (typeof decryptedPoints === 'string' && !isNaN(parseInt(decryptedPoints))) 
      ? parseInt(decryptedPoints) 
      : -9999999999; // Set to -9999999999 if decryption fails or is invalid

    // Cleanup listener on component unmount
    return () => {
      if (typeof window !== 'undefined' && window.cleanupSocialCreditsListener) {
        window.cleanupSocialCreditsListener();
      }
    };
  }, []); // Empty dependency array to run only on mount

  // Calculate the width of the bar based on points
  const increment = 250; // Define the increment value
  const dynamicMaxPoints = Math.max(500, points * 1.5); // Scale maxPoints based on current points
  const maxPoints = Math.ceil(dynamicMaxPoints / increment) * increment; // Round up to the nearest increment
  const minPoints = 0;
  const barWidth = Math.min(Math.max(points, minPoints), maxPoints) / maxPoints * 100; // Calculate bar width

  // Determine the bar color based on points
  const barColor = points < 0 ? 'red' : 'var(--green, #23a55a)'; // Set bar color to red if points are negative

  const renderMilestoneImage = () => {
    if (points >= 1000000) {
      return (
        <img 
          src="https://preview.redd.it/social-credit-1-000-000-v0-q794inmwz80d1.jpeg?width=686&format=pjpg&auto=webp&s=f1804abf7e16a33d1a4e29a338e3f33849a2d0d3" 
          alt="1 Million Points Milestone" 
          style={{ width: '100%', marginTop: '10px' }} 
        />
      );
    } else if (points >= 69420) {
      return (
        <img 
          src="https://pbs.twimg.com/media/FIKEF5iWYAAK3lc.jpg" 
          alt="69420 Points Milestone" 
          style={{ width: '100%', marginTop: '10px' }} 
        />
      );
    } else if (points >= 15) {
      return (
        <img 
          src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da849953080bb37ebb50041c0f42" 
          alt="15 Points Milestone" 
          style={{ width: '100%', marginTop: '10px' }} 
        />
      );
    } else if (points === 0) {
      return (
        <img 
          src="https://pbs.twimg.com/media/FDVVHxzX0AAwF-r.png" 
          alt="Zero Points Milestone" 
          style={{ width: '100%', marginTop: '10px' }} 
        />
      );
    }
    return null; // No milestone image to display
  };

  return (
    <div className="theme-import-container">
      <SectionHeader title="Social Credits" />
      <div>
        <h3 style={{ color: 'var(--text-normal)', fontSize: '24px', fontWeight: 'bold' }}> 
          Current Points: <span style={{ color: 'var(--text-normal)' }}>{points}</span> 
        </h3>
        <div style={{ 
          width: '100%', 
          height: '20px', 
          backgroundColor: 'var(--background-tertiary)', 
          borderRadius: '5px', 
          overflow: 'hidden', 
          marginTop: '10px', 
          position: 'relative', // Added for positioning markers
          border: '2px solid var(--border-color)' // Outline for the entire graph
        }}>
          <div style={{ 
            width: `${barWidth}%`, 
            height: '100%', 
            backgroundColor: barColor, // Use the determined bar color
            transition: 'width 0.3s ease' 
          }} />
          {/* Markers for certain points */}
          {[0, 0.25, 0.5, 0.75, 1].map((marker) => (
            <div key={marker} style={{
              position: 'absolute',
              left: `${marker * 100}%`,
              height: '100%', // Keep the height of the marker
              width: '4px', // Width of the marker
              backgroundColor: 'var(--text-normal)', // Use var(--text-normal) for visibility
              border: '2px solid var(--background-tertiary)', // Thicker outline for better visibility
              transform: 'translate(-50%, 0)', // Center the marker horizontally
              top: '0', // Ensure the marker starts at the top of the bar
            }} />
          ))}
        </div>
        {/* Show image if points are negative */}
        {points < 0 && (
          <img 
            src="https://static.wikia.nocookie.net/b2f5b823-dd07-493c-b455-a0a31eec2bdf/scale-to-width/755" 
            alt="Negative Points Indicator" 
            style={{ width: '100%', marginTop: '10px' }} 
          />
        )}
        {renderMilestoneImage()} {/* Render milestone images based on points */}
      </div>
    </div>
  );
}

module.exports = SocialCreditsTab;
