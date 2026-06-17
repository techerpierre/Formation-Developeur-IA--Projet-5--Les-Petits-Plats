import { Recipe } from '@/core/domain/recipe';
import styles from './RecipeList.module.css';
import { Section } from '../Section/Section';
import { RecipeCard } from '../RecipeCard/RecipeCard';

export type RecipeListProps = {
  recipes: Recipe[];
};

export function RecipeList({ recipes }: RecipeListProps) {
  return (
    <Section className={styles.recipesSection}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </Section>
  );
}
