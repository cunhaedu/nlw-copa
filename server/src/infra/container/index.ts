import { container } from 'tsyringe';

import { PrismaPoolRepository } from '../../modules/pools/infra/prisma/repositories/PrismaPoolRepository';
import { PoolRepository } from '../../modules/pools/repositories/PoolRepository';

container.registerSingleton<PoolRepository>(
  'PoolRepository',
  PrismaPoolRepository
);
