import { container } from 'tsyringe';

import { PrismaGuessRepository } from '../../modules/guesses/infra/prisma/repositories/PrismaGuessRepository';
import { PrismaPoolRepository } from '../../modules/pools/infra/prisma/repositories/PrismaPoolRepository';
import { PrismaUserRepository } from '../../modules/users/infra/prisma/repositories/PrismaUserRepository';
import { GuessRepository } from '../../modules/guesses/repositories/GuessRepository';
import { PoolRepository } from '../../modules/pools/repositories/PoolRepository';
import { UserRepository } from '../../modules/users/repositories/UserRepository';

container.registerSingleton<PoolRepository>(
  'PoolRepository',
  PrismaPoolRepository,
);

container.registerSingleton<UserRepository>(
  'UserRepository',
  PrismaUserRepository,
);

container.registerSingleton<GuessRepository>(
  'GuessRepository',
  PrismaGuessRepository,
);
