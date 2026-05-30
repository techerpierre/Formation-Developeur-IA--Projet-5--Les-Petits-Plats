import { Recipe } from '@/core/domain/recipe';
import styles from './RecipeCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipe/${recipe.slug}`}>
      <article className={styles.recipeCard}>
        <Image
          className={styles.recipeImage}
          src={recipe.image}
          alt={recipe.name}
          width={380}
          height={253}
        />
        <div className={styles.recipeContent}>
          <h3>{recipe.name}</h3>
          <h4>Recette</h4>
          <p className={styles.recipeDescription}>{recipe.description}</p>
          <h4>Ingrédients</h4>
          <div className={styles.recipeIngredients}>
            {recipe.ingredients.map((ingredient) => (
              <div key={ingredient.ingredient}>
                <p>{ingredient.ingredient}</p>
                <small>
                  {ingredient.quantity?.toString()} {ingredient.unit}
                </small>
              </div>
            ))}
          </div>
        </div>
        <span className={styles.recipeTime}>{recipe.time} min</span>
      </article>
    </Link>
  );
}
