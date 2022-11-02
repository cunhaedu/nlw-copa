import { PoolRepository } from '../../repositories/PoolRepository'

export class CountPools {
  constructor(private poolRepository: PoolRepository) {}

  async execute(): Promise<{ count: number }> {
    const count = await this.poolRepository.count();

    return { count }
  }
}
