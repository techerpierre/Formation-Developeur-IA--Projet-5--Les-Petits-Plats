'use client';

import Image from 'next/image';
import styles from './ComboBoxSearchBar.module.css';
import { ChangeEvent, useState } from 'react';

export type ComboBoxSearchBarProps = {
  onSearch: (searchQuery: string) => void;
};

export function ComboBoxSearchBar({ onSearch }: ComboBoxSearchBarProps) {
  const [currentSearch, setCurrentSearch] = useState('');

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.currentTarget.value);
    onSearch(e.currentTarget.value);
  };

  const handleResetButtonClicked = () => {
    setCurrentSearch('');
    onSearch('');
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        value={currentSearch}
        onChange={handleValueChange}
      />
      {currentSearch.length > 0 && (
        <button className={styles.resetButton} onClick={handleResetButtonClicked}>
          <Image src="icons/x.svg" alt="X" width={6} height={6} />
        </button>
      )}
      <Image src="icons/search-2.svg" alt="Search" width={14} height={14} />
    </div>
  );
}
