/**
 * Join classnames into one strong separated with a space
 */
export default function clsx(
  ...classNames: (string | null | undefined | false)[]
): string {
  return classNames.filter((c) => !!c).join(' ');
}
