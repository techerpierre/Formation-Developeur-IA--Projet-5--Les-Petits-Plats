'use server';

import core from '@/core';
import { Listed } from '@/core/domain/common';
import { Ingredient, IngredientSearchQuery } from '@/core/domain/ingredient';

export async function listIngredients(
  query: IngredientSearchQuery
): Promise<Listed<Ingredient>> {
  return core.ingredient.list(query);
}
