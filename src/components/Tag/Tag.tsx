import Image from 'next/image';
import styles from './Tag.module.css';

export type TagProps = {
  children: string;
  onRemove: () => void;
};

export default function Tag({ children, onRemove }: TagProps) {
  return (
    <div className={styles.tag}>
      <span>{children}</span>
      <button className={styles.tagClose} onClick={onRemove}>
        <Image src="/icons/x-2.svg" alt="Remove tag" width={10} height={10} />
      </button>
    </div>
  );
}
