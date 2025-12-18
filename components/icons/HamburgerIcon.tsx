type IconProps = {
  className?: string;
};

export function HamburgerIcon({ className = 'shrink-0' }: IconProps) {
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

export function HamburgerCrossIcon({ className = 'shrink-0' }: IconProps) {
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
        d="M2.97929 13.6062C2.53735 14.0481 2.54577 14.6879 2.92879 15.0709C3.34127 15.4834 3.95157 15.4623 4.39351 15.0204L17.0204 2.39346C17.4308 1.98309 17.4834 1.34122 17.0709 0.928741C16.6879 0.545725 16.0166 0.568874 15.6062 0.979248L2.97929 13.6062Z"
        fill="currentColor"
      />
      <path
        d="M4.39336 0.979294C3.95141 0.537352 3.31165 0.54577 2.92864 0.928786C2.51616 1.34127 2.5372 1.95157 2.97914 2.39351L15.606 15.0204C16.0164 15.4308 16.6583 15.4834 17.0708 15.0709C17.4538 14.6879 17.4306 14.0166 17.0203 13.6062L4.39336 0.979294Z"
        fill="currentColor"
      />
    </svg>
  );
}
