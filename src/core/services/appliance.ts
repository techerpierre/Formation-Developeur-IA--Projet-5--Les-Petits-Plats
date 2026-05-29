import { Appliance, ApplianceSearchQuery } from '../domain/appliance';
import { ApplianceAdapter } from '../ports/repositories';

export class ApplianceService {
  constructor(private readonly applianceAdapter: ApplianceAdapter) {}

  public async list(query?: ApplianceSearchQuery): Promise<Appliance[]> {
    return this.applianceAdapter.list(query);
  }
}
