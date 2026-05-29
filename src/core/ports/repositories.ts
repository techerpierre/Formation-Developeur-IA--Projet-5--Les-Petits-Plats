import { Recipe, RecipeSearchQuery } from '@/core/domain/recipe';
import { Ingredient, IngredientSearchQuery } from '@/core/domain/ingredient';
import { Appliance, ApplianceSearchQuery } from '../domain/appliance';
import { Ustensil, UstensilSearchQuery } from '../domain/ustensil';

export interface RecipeAdapter {
  list(query?: RecipeSearchQuery): Promise<Recipe[]>;
  findBySlug(slug: string): Promise<Recipe | null>;
}

export interface IngredientAdapter {
  list(query?: IngredientSearchQuery): Promise<Ingredient[]>;
}

export interface ApplianceAdapter {
  list(query?: ApplianceSearchQuery): Promise<Appliance[]>;
}

export interface UstensilAdapter {
  list(query?: UstensilSearchQuery): Promise<Ustensil[]>;
}
