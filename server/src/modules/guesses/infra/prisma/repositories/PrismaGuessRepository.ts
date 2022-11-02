import { injectable } from 'tsyringe';

import { GuessRepository } from '../../../repositories/GuessRepository';
import { prisma } from '../../../../../infra/prisma/client';

@injectable()
export class PrismaGuessRepository implements GuessRepository {
  private repository;

  constructor() {
    this.repository = prisma.guess;
  }

  async count(): Promise<number> {
    return this.repository.count();
  }
}
