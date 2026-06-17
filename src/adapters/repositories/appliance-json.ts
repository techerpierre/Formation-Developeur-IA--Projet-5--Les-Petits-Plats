import { ApplianceSearchQuery, Appliance } from '@/core/domain/appliance';
import { Listed } from '@/core/domain/common';
import { ApplianceAdapter } from '@/core/ports/repositories';
import RecipesData from '@/data/recipes.json';

type ApplianceSearchFilterFunction = (a: Appliance) => boolean;

const AppliancesData: Appliance[] = Array.from(
  new Set(RecipesData.flatMap((r) => r.appliance.map((a) => a.name)))
).map((a) => ({ name: a }));

export class ApplianceJSONRepository implements ApplianceAdapter {
  public async list(query?: ApplianceSearchQuery): Promise<Listed<Appliance>> {
    let results = AppliancesData;
    if (query) {
      results = results.filter(this.createSearchFilter(query));
    }
    return {
      results,
      count: results.length,
    };
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
