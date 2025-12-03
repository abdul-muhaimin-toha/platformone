type IconProps = {
  className?: string;
};

function HamburgerIcon({ className = 'shrink-0' }: IconProps) {
  return (
    <svg
      className={className}
      width={20}
      height={16}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.07143 0C0.446429 0 0 0.458333 0 1C0 1.58333 0.446429 2 1.07143 2H18.9286C19.5089 2 20 1.58333 20 1C20 0.458333 19.5089 0 18.9286 0H1.07143Z"
        fill="currentColor"
      />
      <path
        d="M1.07143 7C0.446429 7 0 7.45833 0 8C0 8.58333 0.446429 9 1.07143 9H18.9286C19.5089 9 20 8.58333 20 8C20 7.45833 19.5089 7 18.9286 7H1.07143Z"
        fill="currentColor"
      />
      <path
        d="M1.07143 14C0.446429 14 0 14.4583 0 15C0 15.5833 0.446429 16 1.07143 16H18.9286C19.5089 16 20 15.5833 20 15C20 14.4583 19.5089 14 18.9286 14H1.07143Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default HamburgerIcon;
