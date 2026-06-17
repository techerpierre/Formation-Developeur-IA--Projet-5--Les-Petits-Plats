'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ComboBox.module.css';
import clsx from '@/libs/clsx';
import { ComboBoxSearchBar } from './ComboBoxSearchBar';

export type ComboBoxProps = {
  label: string;
  items: string[];
  pending?: boolean;
  onSearch: (searchQuery: string) => void;
  onItemSelected: (item: string) => void;
};

export function ComboBox({
  label,
  items,
  pending = false,
  onSearch,
  onItemSelected,
}: ComboBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onSearch('');
  }, []);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    return () => {
      onItemSelected(item);
    };
  };

  return (
    <div className={clsx(styles.comboBox, isOpen && styles.open)}>
      <button className={styles.comboBoxButton} onClick={handleButtonClick}>
        <span>{label}</span>
        <Image
          className={styles.comboBoxButtonChevron}
          src="icons/chevron-down.svg"
          alt="Chevron up"
          width={26}
          height={6}
        />
      </button>
      <div className={styles.comboBoxContent}>
        <div className={styles.searchBarContainer}>
          <ComboBoxSearchBar onSearch={onSearch} />
        </div>
        <div className={styles.comboBoxItems}>
          {items.map((item) => (
            <button
              key={item}
              className={styles.comboBoxItem}
              onClick={handleItemClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
