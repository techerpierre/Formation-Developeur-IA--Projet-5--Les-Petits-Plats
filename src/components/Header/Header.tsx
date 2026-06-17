import { HTMLAttributes } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import clsx from '@/libs/clsx';

export type HeaderProps = HTMLAttributes<HTMLElement>;

export function Header({ children, className, ...rest }: HeaderProps) {
  return (
    <header className={clsx(styles.header, className)} {...rest}>
      <Image
        className={styles.headerBackground}
        src="/images/hero-image.png"
        alt="Hero image"
        fill
      />

      <div className={styles.headerTop}>
        <Image
          src="/Logo.svg"
          alt="Logo Les petits plats"
          width={207}
          height={25}
        />
      </div>

      {children && <div className={styles.headerContent}>{children}</div>}
    </header>
  );
}
