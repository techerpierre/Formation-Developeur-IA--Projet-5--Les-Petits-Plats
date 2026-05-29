import { Ingredient, IngredientSearchQuery } from '@/core/domain/ingredient';
import { IngredientAdapter } from '@/core/ports/repositories';

export class IngredientService {
  constructor(private readonly ingredientAdapter: IngredientAdapter) {}

  public async list(query?: IngredientSearchQuery): Promise<Ingredient[]> {
    return this.ingredientAdapter.list(query);
  }
}
