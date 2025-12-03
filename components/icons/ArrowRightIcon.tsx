type IconProps = {
  className?: string;
};

function ArrowRightIcon({ className = 'shrink-0' }: IconProps) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={24}
        height={24}
        rx={12}
        fill="currentColor"
        fillOpacity="0.16"
      />
      <path
        d="M18.4375 12.5156L13.6562 17.3281L13.125 17.8594L12.0625 16.7969L12.5938 16.2656L16.0938 12.7344H5.78125H5.03125V11.2344H5.78125H16.0938L12.5938 7.73438L12.0625 7.20312L13.125 6.14062L13.6562 6.67188L18.4375 11.4531L18.9688 11.9844L18.4375 12.5156Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ArrowRightIcon;
