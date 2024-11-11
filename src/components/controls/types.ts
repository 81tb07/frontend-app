export type ButtonProps = {
  text: string
  variant: 'primary' | 'secondary'
  href?: string
  to?: string
  fit?: 'content' | 'parent'
  isDisabled?: boolean
}