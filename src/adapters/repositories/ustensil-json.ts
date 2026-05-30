import { UstensilSearchQuery, Ustensil } from '@/core/domain/ustensil';
import { UstensilAdapter } from '@/core/ports/repositories';
import RecipesData from '@/data/recipes.json';

type UstensilSearchFilterFunction = (u: Ustensil) => boolean;

const UstensilsData: Ustensil[] = Array.from(
  new Set(RecipesData.flatMap((r) => r.ustensils))
).map((u) => ({ name: u }));

export class UstensilJSONRepository implements UstensilAdapter {
  public async list(query?: UstensilSearchQuery): Promise<Ustensil[]> {
    let results = UstensilsData;
    if (query) {
      results = results.filter(this.createSearchFilter(query));
    }
    return results;
  }

  private createSearchFilter(
    query: UstensilSearchQuery
  ): UstensilSearchFilterFunction {
    return (u: Ustensil) => {
      if (query.globalQuery?.length) {
        const lowerCaseQuery = query.globalQuery.toLocaleLowerCase();
        const lowerCaseName = u.name.toLocaleLowerCase();

        const isNameOk = lowerCaseName.includes(lowerCaseQuery);

        if (!isNameOk) {
          return false;
        }
      }
      return true;
    };
  }
}
