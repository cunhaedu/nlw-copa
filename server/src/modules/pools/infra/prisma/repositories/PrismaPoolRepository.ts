import { prisma } from '../../../../../infra/prisma/client';
import { PoolRepository } from '../../../repositories/PoolRepository';

export class PrismaPoolRepository implements PoolRepository {
  private repository;

  constructor() {
    this.repository = prisma.pool
  }

  async count(): Promise<number> {
    return this.repository.count();
  }
}
