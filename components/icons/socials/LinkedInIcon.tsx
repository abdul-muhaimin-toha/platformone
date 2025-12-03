type IconProps = {
  className?: string;
};

function LinkedInIcon({ className = 'shrink-0' }: IconProps) {
  return (
    <svg
      className={className}
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={32} height={32} rx={16} fill="currentColor" />
      <path
        d="M11.5156 23H8.24609V12.4883H11.5156V23ZM9.86328 11.082C8.84375 11.082 8 10.2031 8 9.14844C8 8.48047 8.35156 7.84766 8.91406 7.53125C9.51172 7.17969 10.25 7.17969 10.8125 7.53125C11.4102 7.84766 11.7617 8.48047 11.7617 9.14844C11.7617 10.2031 10.918 11.082 9.86328 11.082ZM23.7148 23H20.4805V17.9023C20.4805 16.6719 20.4453 15.125 18.7578 15.125C17.0703 15.125 16.8242 16.4258 16.8242 17.7969V23H13.5547V12.4883H16.6836V13.9297H16.7188C17.1758 13.1211 18.2305 12.2422 19.8125 12.2422C23.1172 12.2422 23.75 14.4219 23.75 17.2344V23H23.7148Z"
        fill="#FFF0F9"
      />
    </svg>
  );
}

export default LinkedInIcon;
