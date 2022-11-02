import { injectable } from 'tsyringe';

import { UserRepository } from '../../../repositories/UserRepository';
import { prisma } from '../../../../../infra/prisma/client';

@injectable()
export class PrismaUserRepository implements UserRepository {
  private repository;

  constructor() {
    this.repository = prisma.user;
  }

  async count(): Promise<number> {
    return this.repository.count();
  }
}
