import { listIngredients } from '@/actions/ingredient-actions';
import { Ingredient, IngredientSearchQuery } from '@/core/domain/ingredient';
import { useState, useTransition } from 'react';

export function useIngredients() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [isPending, startTransition] = useTransition();

  const fetchIngredients = (query: IngredientSearchQuery) => {
    startTransition(async () => {
      const data = await listIngredients(query);
      setIngredients(data.results);
    });
  };

  return { ingredients, isPending, fetchIngredients };
}
