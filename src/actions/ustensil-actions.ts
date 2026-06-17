'use server';

import core from '@/core';
import { Listed } from '@/core/domain/common';
import { Ustensil, UstensilSearchQuery } from '@/core/domain/ustensil';

export async function listUstensils(
  query: UstensilSearchQuery
): Promise<Listed<Ustensil>> {
  return core.ustensil.list(query);
}
