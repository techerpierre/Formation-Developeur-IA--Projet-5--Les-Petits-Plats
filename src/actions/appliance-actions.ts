'use server';

import core from '@/core';
import { Appliance, ApplianceSearchQuery } from '@/core/domain/appliance';
import { Listed } from '@/core/domain/common';

export async function listAppliances(
  query: ApplianceSearchQuery
): Promise<Listed<Appliance>> {
  return core.appliance.list(query);
}
