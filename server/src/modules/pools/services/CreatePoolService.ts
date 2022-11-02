import { inject, injectable } from 'tsyringe';
import shortUniqueId from 'short-unique-id';

import { PoolRepository } from '../repositories/PoolRepository';

type CreatePoolRequest = {
  title: string;
}

@injectable()
export class CreatePoolService {
  constructor(
    @inject('PoolRepository')
    private poolRepository: PoolRepository
  ) {}

  async execute({ title }: CreatePoolRequest): Promise<{ code: string }> {
    const generate = new shortUniqueId({ length: 6 });
    const code = String(generate()).toUpperCase();

    const createdPool = await this.poolRepository.create({
      title,
      code,
    });

    return { code: createdPool.code }
  }
}
