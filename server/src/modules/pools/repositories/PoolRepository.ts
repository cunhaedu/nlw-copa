import { PoolDTO } from '../dtos/PoolDTO';

export type CreatePool = {
  title: string;
  code: string;
}

export interface PoolRepository {
  count(): Promise<number>;
  create(data: CreatePool): Promise<PoolDTO>;
}
