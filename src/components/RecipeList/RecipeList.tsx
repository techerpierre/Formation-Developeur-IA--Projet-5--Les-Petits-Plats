import { Recipe } from '@/core/domain/recipe';
import styles from './RecipeList.module.css';
import { Section } from '../Section/Section';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import { RecipeListPlaceholder } from './RecipeListPlaceholder';

export type RecipeListProps = {
  recipes: Recipe[];
  searchQuery: string;
};

export function RecipeList({ recipes, searchQuery }: RecipeListProps) {
  return (
    <RecipeListPlaceholder
      isRecipeListEmpty={recipes.length === 0}
      searchQuery={searchQuery}
    >
      <Section className={styles.recipesSection}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Section>
    </RecipeListPlaceholder>
  );
}
