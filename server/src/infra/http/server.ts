import cors from '@fastify/cors';
import Fastify from 'fastify';

import 'reflect-metadata';

import '../container';

import { guessRoutes } from '../../modules/guesses/infra/http/routes/guess.routes';
import { poolRoutes } from '../../modules/pools/infra/http/routes/pool.routes';
import { userRoutes } from '../../modules/users/infra/http/routes/user.routes';
import { poolSchemas } from '../../modules/pools/schemas/create-pool.schema';

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  for (const schema of [...poolSchemas]) {
    fastify.addSchema(schema);
  }

  fastify.register(poolRoutes, { prefix: "pools" });
  fastify.register(guessRoutes, { prefix: "guesses" });
  fastify.register(userRoutes, { prefix: "users" });

  await fastify.listen({ port: 3333, host: '0.0.0.0' });
}

bootstrap();
