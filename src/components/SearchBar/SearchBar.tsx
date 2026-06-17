'use client';

import styles from './SearchBar.module.css';
import { useRecipeSearch } from '@/contexts/RecipeSearchContext';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

export function SearchBar() {
  const { query, setGlobalQuery } = useRecipeSearch();
  const [inputValue, setInputValue] = useState(query.globalQuery ?? '');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (value.length >= 3 || value.length == 0) {
      setGlobalQuery(value);
    }

    setInputValue(value);
  };

  const handleClearButtonClicked = () => {
    setGlobalQuery('');
    setInputValue('');
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchBarInput}
        placeholder="Rechercher une recette, un ingrédient, ..."
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue.length > 0 && (
        <button
          type="button"
          className={styles.searchBarClear}
          onClick={handleClearButtonClicked}
          aria-label="Vider la recherche"
        >
          <Image src="/icons/x-2.svg" alt="Vider" width={13} height={13} />
        </button>
      )}
      <div className={styles.searchBarSubmit}>
        <Image
          src="/icons/search.svg"
          alt="Rechercher"
          width={28}
          height={28}
        />
      </div>
    </div>
  );
}
