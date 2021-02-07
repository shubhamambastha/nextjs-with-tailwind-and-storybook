module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./pages/**/*.js"],
  variants: {
    backgroundOpacity: ["responsive", "hover", "focus", "active", "disabled"],
    backgroundColor: ["responsive", "hover", "focus", "active", "disabled"],
    animation: ["responsive", "motion-safe", "motion-reduce"],
    cursor: ["responsive", "hover", "focus", "active", "disabled"],
    borderStyle: ["responsive", "hover", "focus", "active", "disabled"],
    textColor: ["responsive", "hover", "focus", "active", "disabled"],
  },
  theme: {
    extend: {},
    plugins: [],
  },
};
