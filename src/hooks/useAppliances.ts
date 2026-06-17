import { listAppliances } from '@/actions/appliance-actions';
import { Appliance, ApplianceSearchQuery } from '@/core/domain/appliance';
import { useState, useTransition } from 'react';

export function useAppliances() {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [isPending, startTransition] = useTransition();

  const fetchAppliances = (query: ApplianceSearchQuery) => {
    startTransition(async () => {
      const data = await listAppliances(query);
      setAppliances(data.results);
    });
  };

  return { appliances, isPending, fetchAppliances };
}
