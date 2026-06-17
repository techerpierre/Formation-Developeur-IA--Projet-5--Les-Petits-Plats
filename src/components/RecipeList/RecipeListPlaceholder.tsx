import { PropsWithChildren } from 'react';
import styles from './RecipeListPlaceholder.module.css';
import { useRecipeSearch } from '@/contexts/RecipeSearchContext';
import { Section } from '../Section/Section';

export type RecipeListPlaceholderProps = PropsWithChildren & {
  isRecipeListEmpty?: boolean;
  searchQuery: string;
};

export function RecipeListPlaceholder({
  isRecipeListEmpty = false,
  searchQuery,
  children,
}: RecipeListPlaceholderProps) {
  if (!isRecipeListEmpty) {
    return children;
  }

  const text =
    searchQuery.length > 0
      ? `Aucune recette ne contient ‘${searchQuery}’ vous pouvez chercher « tarte aux pommes », « poisson », etc.`
      : 'Aucune recette ne correspond au critères de recherche.';

  return (
    <Section className={styles.recipeListPlaceholder}>
      <h2 className={styles.recipeListPlaceholderTitle}>{text}</h2>
    </Section>
  );
}
