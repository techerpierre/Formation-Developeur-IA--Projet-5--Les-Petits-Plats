import { Recipe, RecipeSearchQuery } from '@/core/domain/recipe';
import { RecipeAdapter } from '@/core/ports/repositories';
import RecipesData from '@/data/recipes.json';

type RecipeSearchFilterFunction = (r: Recipe) => boolean;

export class RecipeJSONRepository implements RecipeAdapter {
  public async list(query?: RecipeSearchQuery): Promise<Recipe[]> {
    let results = RecipesData.map(this.mapRecipe);
    if (query) {
      results = results.filter(this.createSearchFilter(query));
    }
    return results;
  }

  public async findBySlug(slug: string): Promise<Recipe | null> {
    const result = RecipesData.find((r) => r.slug === slug);
    if (!result) {
      return null;
    }
    return this.mapRecipe(result);
  }

  private createSearchFilter(
    query: RecipeSearchQuery
  ): RecipeSearchFilterFunction {
    return (r: Recipe) => {
      // Check ingredients tags
      if (query.ingredients?.length) {
        if (
          !r.ingredients.filter((i) =>
            query.ingredients!.includes(i.ingredient)
          ).length
        ) {
          return false;
        }
      }

      // Check appliance tags
      if (query.appliances?.length) {
        if (!query.appliances.includes(r.appliance)) {
          return false;
        }
      }

      // Check appliance tags
      if (query.ustensils?.length) {
        if (!r.ustensils.filter((u) => query.ustensils!.includes(u)).length) {
          return false;
        }
      }

      // Check global query
      if (query.globalQuery?.length) {
        const lowerCaseQuery = query.globalQuery.toLocaleLowerCase();
        const lowerCaseTitle = r.name.toLocaleLowerCase();
        const lowerCaseIngredients = r.ingredients.map((i) =>
          i.ingredient.toLocaleLowerCase()
        );
        const lowerCaseDescription = r.description.toLocaleLowerCase();

        const isTitleOk = lowerCaseTitle.includes(lowerCaseQuery);
        const isIngredientsOk = !!lowerCaseIngredients.filter((i) =>
          i.includes(lowerCaseQuery)
        ).length;
        const isDescriptionOk = lowerCaseDescription.includes(lowerCaseQuery);

        if (!isTitleOk && !isIngredientsOk && !isDescriptionOk) {
          return false;
        }
      }

      return true;
    };
  }

  private mapRecipe(recipe: any): Recipe {
    return {
      ...recipe,
      image: `/images/${recipe.image}`,
    };
  }
}
