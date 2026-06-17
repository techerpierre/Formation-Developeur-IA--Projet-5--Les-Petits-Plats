'use client';

import { useRecipeSearch } from '@/contexts/RecipeSearchContext';
import { RecipeSearchQueryTagField } from '@/core/domain/recipe';
import { ComboBox } from '@/components/ComboBox/ComboBox';
import { useIngredients } from '@/hooks/useIngredients';
import { useAppliances } from '@/hooks/useAppliances';
import { useUstensils } from '@/hooks/useUstensils';
import { Section } from '../Section/Section';
import styles from './TagSearch.module.css';

export type TagSearchProps = {
  recipeResultsCount: number;
};

export function TagSearch({ recipeResultsCount }: TagSearchProps) {
  const { query, setQuery } = useRecipeSearch();

  const {
    ingredients,
    isPending: isIngredientsPending,
    fetchIngredients,
  } = useIngredients();
  const {
    appliances,
    isPending: isAppliancesPending,
    fetchAppliances,
  } = useAppliances();
  const {
    ustensils,
    isPending: isUstensilsPending,
    fetchUstensils,
  } = useUstensils();

  const handleItemSelected = (fieldName: RecipeSearchQueryTagField) => {
    return (item: string) => {
      setQuery({
        ...query,
        [fieldName]: [
          ...(query[fieldName] ? (query[fieldName] as string[]) : []),
          item,
        ],
      });
    };
  };

  return (
    <Section className={styles.section}>
      <div className={styles.tagSelectors}>
        <ComboBox
          label="Ingrédients"
          items={ingredients.map((i) => i.name)}
          pending={isIngredientsPending}
          onItemSelected={handleItemSelected('ingredients')}
          onSearch={(globalQuery) => fetchIngredients({ globalQuery })}
        />

        <ComboBox
          label="Appareils"
          items={appliances.map((a) => a.name)}
          pending={isAppliancesPending}
          onItemSelected={handleItemSelected('appliances')}
          onSearch={(globalQuery) => fetchAppliances({ globalQuery })}
        />

        <ComboBox
          label="Ustensiles"
          items={ustensils.map((u) => u.name)}
          pending={isUstensilsPending}
          onItemSelected={handleItemSelected('ustensils')}
          onSearch={(globalQuery) => fetchUstensils({ globalQuery })}
        />
      </div>
      <span className={styles.recipeResultsCount}>
        {recipeResultsCount} recette{recipeResultsCount > 1 ? 's' : ''}
      </span>
    </Section>
  );
}
