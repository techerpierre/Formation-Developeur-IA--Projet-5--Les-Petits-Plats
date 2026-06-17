import { Appliance, ApplianceSearchQuery } from '../domain/appliance';
import { Listed } from '../domain/common';
import { ApplianceAdapter } from '../ports/repositories';

export class ApplianceService {
  constructor(private readonly applianceAdapter: ApplianceAdapter) {}

  public async list(query?: ApplianceSearchQuery): Promise<Listed<Appliance>> {
    return this.applianceAdapter.list(query);
  }
}
