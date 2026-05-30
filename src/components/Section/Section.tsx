import { HTMLAttributes } from "react";
import styles from "./Section.module.css";
import clsx from "@/libs/clsx";

export type SectionProps = HTMLAttributes<HTMLElement>;

export function Section({
    className,
    ...rest
}: SectionProps) {
    return <section className={clsx(styles.section, className)} {...rest}/>
}