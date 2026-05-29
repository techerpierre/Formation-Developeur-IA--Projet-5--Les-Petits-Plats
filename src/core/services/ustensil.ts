import { Ustensil, UstensilSearchQuery } from '../domain/ustensil';
import { UstensilAdapter } from '../ports/repositories';

export class UstensilService {
  constructor(private readonly ustensilAdapter: UstensilAdapter) {}

  public async list(query?: UstensilSearchQuery): Promise<Ustensil[]> {
    return this.ustensilAdapter.list(query);
  }
}
