import { Recipe, RecipeSearchQuery } from '@/core/domain/recipe';
import { Ingredient, IngredientSearchQuery } from '@/core/domain/ingredient';
import { Appliance, ApplianceSearchQuery } from '../domain/appliance';
import { Ustensil, UstensilSearchQuery } from '../domain/ustensil';
import { Listed } from '../domain/common';

export interface RecipeAdapter {
  list(query?: RecipeSearchQuery): Promise<Listed<Recipe>>;
  findBySlug(slug: string): Promise<Recipe | null>;
}

export interface IngredientAdapter {
  list(query?: IngredientSearchQuery): Promise<Listed<Ingredient>>;
}

export interface ApplianceAdapter {
  list(query?: ApplianceSearchQuery): Promise<Listed<Appliance>>;
}

export interface UstensilAdapter {
  list(query?: UstensilSearchQuery): Promise<Listed<Ustensil>>;
}
