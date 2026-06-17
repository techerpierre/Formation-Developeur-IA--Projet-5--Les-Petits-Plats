'use client';

import { RecipeSearchQuery } from '@/core/domain/recipe';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

export type RecipeSearchContextType = {
  query: RecipeSearchQuery;
  setQuery: (newQuery: RecipeSearchQuery) => void;
};

export const RecipeSearchContext = createContext<
  RecipeSearchContextType | undefined
>(undefined);

export function RecipeSearchProvider({ children }: PropsWithChildren) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [query, setQuery] = useState<RecipeSearchQuery>({
    globalQuery: searchParams.get('q') ?? undefined,
    appliances: searchParams.getAll('appliances'),
    ingredients: searchParams.getAll('ingredients'),
    ustensils: searchParams.getAll('ustensils'),
  });

  const setQueryFn = (newQuery: RecipeSearchQuery) => {
    setQuery(newQuery);
    const params = new URLSearchParams();

    if (newQuery.globalQuery) params.set('q', newQuery.globalQuery);

    newQuery.appliances?.forEach((item) => params.append('appliances', item));
    newQuery.ingredients?.forEach((item) => params.append('ingredients', item));
    newQuery.ustensils?.forEach((item) => params.append('ustensils', item));

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <RecipeSearchContext
      value={{
        query,
        setQuery: setQueryFn,
      }}
    >
      {children}
    </RecipeSearchContext>
  );
}

export function useRecipeSearch() {
  const context = useContext(RecipeSearchContext);
  if (!context) {
    throw new Error(
      'useRecipeSearch must be wrapped by a RecipeSearchProvider.'
    );
  }
  return context;
}
