import { IngredientSearchQuery, Ingredient } from '@/core/domain/ingredient';
import { IngredientAdapter } from '@/core/ports/repositories';
import RecipesData from '@/data/recipes.json';

type RecipeSearchFilterFunction = (i: Ingredient) => boolean;

const IngredientsData: Ingredient[] = Array.from(
  new Set(RecipesData.flatMap((r) => r.ingredients.map((i) => i.ingredient)))
).map((i) => ({ name: i }));

export class IngredientJSONRepository implements IngredientAdapter {
  public async list(query?: IngredientSearchQuery): Promise<Ingredient[]> {
    let results = IngredientsData;
    if (query) {
      results = results.filter(this.createSearchFilter(query));
    }
    return results;
  }

  private createSearchFilter(
    query: IngredientSearchQuery
  ): RecipeSearchFilterFunction {
    return (i: Ingredient) => {
      if (query.globalQuery?.length) {
        const lowerCaseQuery = query.globalQuery.toLocaleLowerCase();
        const lowerCaseName = i.name.toLocaleLowerCase();

        const isNameOk = lowerCaseName.includes(lowerCaseQuery);

        if (!isNameOk) {
          return false;
        }
      }

      return true;
    };
  }
}
