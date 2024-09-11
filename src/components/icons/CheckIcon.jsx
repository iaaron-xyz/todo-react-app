const CheckIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 3,
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className}`}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

export default CheckIcon;
