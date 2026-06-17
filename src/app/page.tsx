import core from '@/core';
import styles from './page.module.css';
import { Header } from '@/components/Header/Header';
import { RecipeSearchProvider } from '@/contexts/RecipeSearchContext';
import { RecipeList } from '@/components/RecipeList/RecipeList';
import { SearchParams } from '@/libs/types';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { TagSearch } from '@/components/TagSearch/TagSearch';

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const { results: recipes, count: recipesCount } = await core.recipe.list({
    globalQuery: searchParams.q?.toString(),
  });

  return (
    <RecipeSearchProvider>
      <Header className={styles.header}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Découvrez nos recettes
            <br />
            du quotidien, simples et délicieuses
          </h1>
          <SearchBar />
        </div>
      </Header>
      <TagSearch recipeResultsCount={recipesCount} />
      <RecipeList recipes={recipes} />
    </RecipeSearchProvider>
  );
}
