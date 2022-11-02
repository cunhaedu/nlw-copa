import Fastify from 'fastify';
import cors from '@fastify/cors';

import { PrismaPoolRepository } from '../../modules/pools/infra/prisma/repositories/PrismaPoolRepository';
import { CountPools } from '../../modules/pools/useCases/CountPools/CountPools';

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });


  fastify.get('/pools/count', async () => {
    const poolRepository = new PrismaPoolRepository()
    const countPoolService = new CountPools(poolRepository);

    const { count } = await countPoolService.execute();

    return { count }
  })

  await fastify.listen({ port: 3333, host: '0.0.0.0' });
}

bootstrap();
