'use client';

import { useRecipeSearch } from '@/contexts/RecipeSearchContext';
import { RecipeSearchQueryTagField } from '@/core/domain/recipe';
import { ComboBox } from '@/components/ComboBox/ComboBox';
import { useIngredients } from '@/hooks/useIngredients';
import { useAppliances } from '@/hooks/useAppliances';
import { useUstensils } from '@/hooks/useUstensils';
import { Section } from '../Section/Section';
import Tag from '@/components/Tag/Tag';
import styles from './TagSearch.module.css';

export type TagSearchProps = {
  recipeResultsCount: number;
};

export const TAG_FIELDS: RecipeSearchQueryTagField[] = [
  'ingredients',
  'appliances',
  'ustensils',
];

export function TagSearch({ recipeResultsCount }: TagSearchProps) {
  const { query, removeTag, addTag } = useRecipeSearch();

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

  const selectedTags = TAG_FIELDS.flatMap((field) =>
    (query[field] ?? []).map((value) => ({ field, value }))
  );

  const handleItemSelected = (fieldName: RecipeSearchQueryTagField) => {
    return (item: string) => {
      addTag(fieldName, item);
    };
  };

  const handleItemRemoved = (fieldName: RecipeSearchQueryTagField) => {
    return (item: string) => {
      removeTag(fieldName, item);
    };
  };

  return (
    <Section className={styles.section}>
      <div className={styles.topRow}>
        <div className={styles.tagSelectors}>
          <ComboBox
            label="Ingrédients"
            items={ingredients.map((i) => i.name)}
            pending={isIngredientsPending}
            onItemSelected={handleItemSelected('ingredients')}
            onItemRemoved={handleItemRemoved('ingredients')}
            onSearch={(globalQuery) => fetchIngredients({ globalQuery })}
            isItemSelected={(item) => !!query.ingredients?.includes(item)}
          />

          <ComboBox
            label="Appareils"
            items={appliances.map((a) => a.name)}
            pending={isAppliancesPending}
            onItemSelected={handleItemSelected('appliances')}
            onItemRemoved={handleItemRemoved('appliances')}
            onSearch={(globalQuery) => fetchAppliances({ globalQuery })}
            isItemSelected={(item) => !!query.appliances?.includes(item)}
          />

          <ComboBox
            label="Ustensiles"
            items={ustensils.map((u) => u.name)}
            pending={isUstensilsPending}
            onItemSelected={handleItemSelected('ustensils')}
            onItemRemoved={handleItemRemoved('ustensils')}
            onSearch={(globalQuery) => fetchUstensils({ globalQuery })}
            isItemSelected={(item) => !!query.ustensils?.includes(item)}
          />
        </div>
        <span className={styles.recipeResultsCount}>
          {recipeResultsCount} recette{recipeResultsCount > 1 ? 's' : ''}
        </span>
      </div>

      {selectedTags.length > 0 && (
        <div className={styles.selectedTags}>
          {selectedTags.map(({ field, value }) => (
            <Tag
              key={`${field}-${value}`}
              onRemove={() => removeTag(field, value)}
            >
              {value}
            </Tag>
          ))}
        </div>
      )}
    </Section>
  );
}
