import { Header } from '@/components/Header/Header';
import core from '@/core';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';

type RecipePageParams = Promise<{
  slug: string;
}>;

export default async function RecipePage({
  params,
}: {
  params: RecipePageParams;
}) {
  const { slug } = await params;
  const recipe = await core.recipe.findBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return (
    <>
      <Header></Header>
      <div className={styles.recipeContainer}>
        <div>
          <Image
            className={styles.recipeImage}
            src={recipe.image}
            alt={recipe.name}
            width={500}
            height={500}
          />
        </div>
        <div className={styles.recipeInfo}>
          <h1 className={styles.recipeName}>{recipe.name}</h1>
          <div className={styles.recipeInfoSubsection}>
            <h4 className={styles.recipeInfoSubsectionTitle}>
              Temps de préparation
            </h4>
            <p className={styles.recipeTimeValue}>{recipe.time} min</p>
          </div>
          <div className={styles.recipeInfoSubsection}>
            <h4 className={styles.recipeInfoSubsectionTitle}>Ingrédients</h4>
            <div className={styles.recipeInfoSubsectionTable}>
              {recipe.ingredients.map((ingredient) => (
                <div key={ingredient.ingredient}>
                  <p className={styles.recipeInfoSubsectionTableItemName}>
                    {ingredient.ingredient}
                  </p>
                  <small className={styles.recipeInfoSubsectionTableItemValue}>
                    {ingredient.quantity?.toString()} {ingredient.unit}
                  </small>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.recipeInfoSubsection}>
            <h4 className={styles.recipeInfoSubsectionTitle}>
              Ustensiles nécessaires
            </h4>
            <div className={styles.recipeInfoSubsectionTable}>
              {recipe.ustensils.map((ustensil) => (
                <div key={ustensil.name}>
                  <p className={styles.recipeInfoSubsectionTableItemName}>
                    {ustensil.name}
                  </p>
                  <small className={styles.recipeInfoSubsectionTableItemValue}>
                    {ustensil.quantity ?? 1}
                  </small>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.recipeInfoSubsection}>
            <h4 className={styles.recipeInfoSubsectionTitle}>
              Appareils nécessaires
            </h4>
            <div className={styles.recipeInfoSubsectionTable}>
              {recipe.appliance.map((appliance) => (
                <div key={appliance.name}>
                  <p className={styles.recipeInfoSubsectionTableItemName}>
                    {appliance.name}
                  </p>
                  <small className={styles.recipeInfoSubsectionTableItemValue}>
                    {appliance.quantity ?? 1}
                  </small>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.recipeInfoSubsection}>
            <h4 className={styles.recipeInfoSubsectionTitle}>Recette</h4>
            <p>{recipe.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
