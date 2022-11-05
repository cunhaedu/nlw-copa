import { injectable } from 'tsyringe';

import { CreatePool, PoolRepository } from '../../../repositories/PoolRepository';
import { prisma } from '../../../../../infra/prisma/client';
import { PoolDTO } from '../../../dtos/PoolDTO';

@injectable()
export class PrismaPoolRepository implements PoolRepository {
  private repository;
  private participantRepository;

  constructor() {
    this.repository = prisma.pool;
    this.participantRepository = prisma.participant;
  }

  async count(): Promise<number> {
    return this.repository.count();
  }

  async findByCode(code: string, userId: string): Promise<PoolDTO | null> {
    return this.repository.findUnique({
      where: { code },
      include: {
        participants: {
          where: {
            userId
          }
        }
      }
    })
  }

  async updateOwner(poolId: string, ownerId: string): Promise<void> {
    await this.repository.update({
      where: {
        id: poolId,
      },
      data: {
        ownerId,
      }
    })
  }

  async create({ title, code, ownerId }: CreatePool): Promise<PoolDTO> {
    const createdPool = await this.repository.create({
      data: {
        title,
        code,
        ownerId,
      }
    });

    if (ownerId) {
      await this.participantRepository.create({
        data: {
          userId: ownerId,
          poolId: createdPool.id,
        }
      })
    }

    return createdPool;
  }
}
