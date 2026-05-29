import {
  ApplianceAdapter,
  IngredientAdapter,
  RecipeAdapter,
  UstensilAdapter,
} from '@/core/ports/repositories';
import { RecipeService } from './services/recipe';
import { IngredientService } from './services/ingredient';
import { ApplianceService } from './services/appliance';
import { UstensilService } from './services/ustensil';

type CoreDeps = {
  repositories: {
    recipe: RecipeAdapter;
    ingredient: IngredientAdapter;
    appliance: ApplianceAdapter;
    ustensil: UstensilAdapter;
  };
};

export class Core {
  readonly recipe: RecipeService;
  readonly ingredient: IngredientService;
  readonly appliance: ApplianceService;
  readonly ustensil: UstensilService;

  constructor(params: CoreDeps) {
    this.recipe = new RecipeService(params.repositories.recipe);
    this.ingredient = new IngredientService(params.repositories.ingredient);
    this.appliance = new ApplianceService(params.repositories.appliance);
    this.ustensil = new UstensilService(params.repositories.ustensil);
  }
}
