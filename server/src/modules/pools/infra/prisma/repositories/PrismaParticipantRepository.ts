import { injectable } from 'tsyringe';

import { CreateParticipant, ParticipantRepository } from '../../../repositories/ParticipantRepository';
import { prisma } from '../../../../../infra/prisma/client';

@injectable()
export class PrismaParticipantRepository implements ParticipantRepository {
  private repository;

  constructor() {
    this.repository = prisma.participant;
  }

  async create({ userId, poolId }: CreateParticipant): Promise<void> {
    await this.repository.create({
      data: {
        userId,
        poolId,
      }
    });
  }
}
