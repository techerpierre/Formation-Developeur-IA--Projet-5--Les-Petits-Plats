import { ApplianceSearchQuery, Appliance } from '@/core/domain/appliance';
import { ApplianceAdapter } from '@/core/ports/repositories';
import RecipesData from '@/data/recipes.json';

type ApplianceSearchFilterFunction = (a: Appliance) => boolean;

const AppliancesData: Appliance[] = Array.from(
  new Set(RecipesData.map((r) => r.appliance))
).map((a) => ({ name: a }));

export class ApplianceJSONRepository implements ApplianceAdapter {
  public async list(query?: ApplianceSearchQuery): Promise<Appliance[]> {
    let results = AppliancesData;
    if (query) {
      results = results.filter(this.createSearchFilter(query));
    }
    return results;
  }

  private createSearchFilter(
    query: ApplianceSearchQuery
  ): ApplianceSearchFilterFunction {
    return (a: Appliance) => {
      if (query.globalQuery?.length) {
        const lowerCaseQuery = query.globalQuery.toLocaleLowerCase();
        const lowerCaseName = a.name.toLocaleLowerCase();

        const isNameOk = lowerCaseName.includes(lowerCaseQuery);

        if (!isNameOk) {
          return false;
        }
      }
      return true;
    };
  }
}
