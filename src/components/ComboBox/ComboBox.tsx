'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ComboBox.module.css';
import clsx from '@/libs/clsx';
import { ComboBoxSearchBar } from './ComboBoxSearchBar';

type ItemWithSelected = {
  item: string;
  isSelected: boolean;
};

export type ComboBoxProps = {
  label: string;
  items: string[];
  pending?: boolean;
  isItemSelected?: (item: string) => boolean;
  onSearch: (searchQuery: string) => void;
  onItemSelected: (item: string) => void;
  onItemRemoved: (item: string) => void;
};

export function ComboBox({
  label,
  items,
  isItemSelected,
  pending = false,
  onSearch,
  onItemSelected,
  onItemRemoved,
}: ComboBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const itemsWithSelected: ItemWithSelected[] = items.map((item) => ({
    item,
    isSelected: isItemSelected?.(item) ?? false,
  }));

  useEffect(() => {
    onSearch('');
  }, []);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    return () => {
      onItemSelected(item);
      setIsOpen(false);
    };
  };

  const handleItemRemove = (item: string) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onItemRemoved(item);
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
          {itemsWithSelected.map(({ item, isSelected }) => (
            <div
              key={item}
              className={clsx(
                styles.comboBoxItem,
                isSelected && styles.comboBoxItemSelected
              )}
            >
              <button
                className={styles.comboBoxItemLabel}
                onClick={handleItemClick(item)}
              >
                {item}
              </button>
              {isSelected && (
                <button
                  className={styles.comboBoxItemRemoveButton}
                  onClick={handleItemRemove(item)}
                >
                  <Image
                    src="icons/x-circle.svg"
                    alt="X"
                    width={17}
                    height={17}
                  />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
