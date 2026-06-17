import { Ingredient, IngredientSearchQuery } from '@/core/domain/ingredient';
import { IngredientAdapter } from '@/core/ports/repositories';
import { Listed } from '../domain/common';

export class IngredientService {
  constructor(private readonly ingredientAdapter: IngredientAdapter) {}

  public async list(
    query?: IngredientSearchQuery
  ): Promise<Listed<Ingredient>> {
    return this.ingredientAdapter.list(query);
  }
}
