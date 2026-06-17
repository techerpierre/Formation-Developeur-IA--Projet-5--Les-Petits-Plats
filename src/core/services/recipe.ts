import { Recipe, RecipeSearchQuery } from '@/core/domain/recipe';
import { RecipeAdapter } from '@/core/ports/repositories';
import { Listed } from '../domain/common';

export class RecipeService {
  constructor(private readonly recipeAdapter: RecipeAdapter) {}

  public async list(query?: RecipeSearchQuery): Promise<Listed<Recipe>> {
    return this.recipeAdapter.list(query);
  }

  public async findBySlug(slug: string): Promise<Recipe | null> {
    return this.recipeAdapter.findBySlug(slug);
  }
}
