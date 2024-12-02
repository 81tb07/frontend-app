import { NavLink } from 'react-router';
import { twMerge } from 'tailwind-merge';
import styles from './styles.module.css';

type Variant = 'primary' | 'secondary' | 'tertiary';

type NavLinkProps = {
  to: string;
  onClick?: never;
};

type CtaProps = {
  onClick: () => void;
  to?: never;
};

type ButtonProps = {
  text: string;
  variant: Variant;
  to?: string;
  isDisabled?: boolean;
  className?: string;
} & (NavLinkProps | CtaProps);

// Need to modfiy the below line with named import for CSS modules
const { primary, secondary, tertiary } = styles;

const VARIANTS: Record<Variant, string> = {
  primary,
  secondary,
  tertiary,
};

const Button = ({
  text,
  variant,
  to,
  isDisabled,
  className,
  onClick,
}: ButtonProps) => {
  const combinedClasses = twMerge(
    'text-center block py-2 rounded-2xl',
    VARIANTS[variant],
    isDisabled && 'pointer-events-none',
    className,
  );

  if (to) {
    return (
      <NavLink className={combinedClasses} to={to}>
        {text}
      </NavLink>
    );
  }

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={combinedClasses}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
