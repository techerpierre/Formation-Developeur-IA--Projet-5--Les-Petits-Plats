import { ApplianceJSONRepository } from './adapters/repositories/appliance-json';
import { IngredientJSONRepository } from './adapters/repositories/ingredient-json';
import { RecipeJSONRepository } from './adapters/repositories/recipe-json';
import { UstensilJSONRepository } from './adapters/repositories/ustensil-json';
import { Core } from './core/index';

export default new Core({
  repositories: {
    recipe: new RecipeJSONRepository(),
    ingredient: new IngredientJSONRepository(),
    appliance: new ApplianceJSONRepository(),
    ustensil: new UstensilJSONRepository(),
  },
});
