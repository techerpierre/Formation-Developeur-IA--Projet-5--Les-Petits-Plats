import { Recipe, RecipeSearchQuery } from '@/core/domain/recipe';
import { RecipeAdapter } from '@/core/ports/repositories';

export class RecipeService {
  constructor(private readonly recipeAdapter: RecipeAdapter) {}

  public async list(query?: RecipeSearchQuery): Promise<Recipe[]> {
    return this.recipeAdapter.list(query);
  }

  public async findBySlug(slug: string): Promise<Recipe | null> {
    return this.recipeAdapter.findBySlug(slug);
  }
}
