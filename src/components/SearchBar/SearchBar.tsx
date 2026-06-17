'use client';

import styles from './SearchBar.module.css';
import { useRecipeSearch } from '@/contexts/RecipeSearchContext';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

export function SearchBar() {
  const { query, setQuery } = useRecipeSearch();
  const [inputValue, setInputValue] = useState(query.globalQuery ?? '');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (value.length >= 3 || value.length == 0) {
      setQuery({
        ...query,
        globalQuery: value,
      });
    }

    setInputValue(value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchBarInput}
        placeholder="Rechercher une recette, un ingrédient, ..."
        value={inputValue}
        onChange={handleInputChange}
      />
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
