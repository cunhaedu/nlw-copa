import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';

import { CountPoolsService } from '../../../services/CountPoolsService';
import { CreatePoolService } from '../../../services/CreatePoolService';
import { CreatePoolInput } from '../../../schemas/create-pool.schema';

export class PoolController {
  async count() {
    const countPoolService = container.resolve(CountPoolsService);

    return countPoolService.execute();
  }

  async create(
    request: FastifyRequest<{ Body: CreatePoolInput }>,
    reply: FastifyReply
  ) {
    const { title } = request.body;

    const createPoolService = container.resolve(CreatePoolService);

    const pool = await createPoolService.execute({ title });

    return reply.status(201).send({ code: pool.code })
  }
}
