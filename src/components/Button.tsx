interface Props {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  color: 'primary' | 'light' | 'google';
  className?: string;
  includeIcon?: boolean;
}

export const Button = ({
  children,
  type = 'button',
  color,
  className = '',
  includeIcon = false,
}: Props) => {
  let colorClasses = '';
  switch (color) {
    case 'primary':
      colorClasses =
        'bg-gradient-to-r hover:bg-gradient-to-br text-white from-sky-500 via-sky-600 to-sky-700 focus:ring-sky-700 dark:focus:ring-sky-800';
      break;
    case 'light':
      colorClasses =
        'bg-gradient-to-r hover:bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 focus:ring-gray-400 dark:focus:ring-gray-800';
      break;
    case 'google':
      colorClasses = 'bg-white border-2 box-border focus:ring-gray-400';
      break;
    default:
      colorClasses = '';
  }
  const iconButtonClass = includeIcon ? 'inline-flex items-center space-x-3' : '';
  const buttonClass = `focus:ring-2 focus:outline-none font-medium rounded-lg px-5 py-2 text-center h-10 ${colorClasses} ${iconButtonClass} ${className}`;

  return (
    <button type={type} className={buttonClass}>
      {children}
    </button>
  );
};
