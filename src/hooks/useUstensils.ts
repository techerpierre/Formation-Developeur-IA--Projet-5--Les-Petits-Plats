import { listUstensils } from '@/actions/ustensil-actions';
import { Ustensil, UstensilSearchQuery } from '@/core/domain/ustensil';
import { useState, useTransition } from 'react';

export function useUstensils() {
  const [ustensils, setUstensils] = useState<Ustensil[]>([]);
  const [isPending, startTransition] = useTransition();

  const fetchUstensils = (query: UstensilSearchQuery) => {
    startTransition(async () => {
      const data = await listUstensils(query);
      setUstensils(data.results);
    });
  };

  return { ustensils, isPending, fetchUstensils };
}
