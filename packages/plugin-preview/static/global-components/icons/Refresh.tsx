const Refresh = ({ color = 'currentColor', ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    stroke={color}
    strokeWidth="4"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M38.837 18C36.4634 12.1363 30.7148 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C31.4554 40 37.7198 34.9009 39.4959 28M40 8V18H30"
      strokeLinecap="butt"
    ></path>
  </svg>
);

export default Refresh;
