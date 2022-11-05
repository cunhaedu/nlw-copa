import cors from '@fastify/cors';
import Fastify from 'fastify';
import jwt from '@fastify/jwt';
import env, { fastifyEnvOpt } from '@fastify/env';

import 'reflect-metadata';

import '../container';

import { guessRoutes } from '../../modules/guesses/infra/http/routes/guess.routes';
import { poolRoutes } from '../../modules/pools/infra/http/routes/pool.routes';
import { userRoutes } from '../../modules/users/infra/http/routes/user.routes';
import { poolSchemas } from '../../modules/pools/schemas/pool.schema';
import { userSchemas } from '../../modules/users/schemas/create-user.schema';

const EnvSchema: fastifyEnvOpt = {
  confKey: 'config',
  dotenv: true,
  data: process.env,
  schema: {
    type: 'object',
    required: ['JWT_SECRET'],
    properties: {
      JWT_SECRET: {
        type: 'string',
        default: 'nlw-copa',
      }
    }
  }
}

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(env, EnvSchema);

  for (const schema of [...poolSchemas, ...userSchemas]) {
    fastify.addSchema(schema);
  }

  fastify.register(poolRoutes, { prefix: "pools" });
  fastify.register(guessRoutes, { prefix: "guesses" });
  fastify.register(userRoutes, { prefix: "users" });

  await fastify.register(jwt, {
    secret: fastify.config.JWT_SECRET,
  }).ready();

  await fastify.listen({ port: 3333, host: '0.0.0.0' });
}

bootstrap();
