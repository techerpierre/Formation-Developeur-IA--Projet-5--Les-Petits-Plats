import { RecipeCard } from '@/components/RecipeCard/RecipeCard';
import core from '@/core';
import styles from './page.module.css';
import { Section } from '@/components/Section/Section';

export default async function Home() {
  const recipes = await core.recipe.list();

  return (
    <>
      <Section className={styles.recipesSection}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Section>
    </>
  );
}
