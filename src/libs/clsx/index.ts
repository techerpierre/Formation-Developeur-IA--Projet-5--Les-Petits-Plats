/**
 * Join classnames into one strong separated with a space
 */
export default function clsx(...classNames: string[]): string {
    return classNames.filter(c => !!c).join(" ");
}