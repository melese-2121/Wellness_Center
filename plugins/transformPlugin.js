// transformPlugin.js

const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".navbar-hidden": {
      transform: "translateY(-100%)",
    },
  };

  addUtilities(newUtilities, ["responsive", "hover"]);
});
