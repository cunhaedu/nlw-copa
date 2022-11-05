import { PoolDTO } from '../dtos/PoolDTO';

export type CreatePool = {
  title: string;
  code: string;
  ownerId: string | null;
}

export interface PoolRepository {
  findByCode(code: string, userId: string): Promise<PoolDTO | null>;
  updateOwner(poolId: string, ownerId: string): Promise<void>;
  create(data: CreatePool): Promise<PoolDTO>;
  count(): Promise<number>;
}
