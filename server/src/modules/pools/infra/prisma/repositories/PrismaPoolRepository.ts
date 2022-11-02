import { injectable } from 'tsyringe';

import { CreatePool, PoolRepository } from '../../../repositories/PoolRepository';
import { prisma } from '../../../../../infra/prisma/client';
import { PoolDTO } from '../../../dtos/PoolDTO';

@injectable()
export class PrismaPoolRepository implements PoolRepository {
  private repository;

  constructor() {
    this.repository = prisma.pool
  }

  async count(): Promise<number> {
    return this.repository.count();
  }

  async create({ title, code }: CreatePool): Promise<PoolDTO> {
    return this.repository.create({
      data: {
        title,
        code,
      }
    })
  }
}
