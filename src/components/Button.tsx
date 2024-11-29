import { NavLink } from 'react-router'
import { twMerge } from 'tailwind-merge'

type Props = {
  text: string
  variant: 'primary' | 'secondary'
  href?: string
  to?: string
  fit?: 'content' | 'parent'
  isDisabled?: boolean
}

export const Button = ({ text, variant, href, to, fit, isDisabled }: Props) => {
  const baseClasses = 'text-center block py-2 rounded-2xl'
  const primaryVariant = 'bg-amber-500'
  const secondaryVariant =
    'bg-white shadow-2xl border border-solid border-4 border-slate-900'
  const parentFit = 'w-full'
  const disabledLink = 'pointer-events-none'

  const combinedClasses = twMerge(
    baseClasses,
    variant === 'primary' && primaryVariant,
    variant === 'secondary' && secondaryVariant,
    fit === 'parent' && parentFit,
    !!href && isDisabled && disabledLink
  )

  if (!!href) {
    return (
      <a href={href} className={combinedClasses}>
        {text}
      </a>
    )
  } else if (!!to) {
    return (
      <NavLink className={combinedClasses} to={to}>
        {text}
      </NavLink>
    )
  }

  return (
    <button type="button" disabled={isDisabled} className={combinedClasses}>
      {text}
    </button>
  )
}
