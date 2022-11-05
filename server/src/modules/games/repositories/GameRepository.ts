import { GameDTO } from '../dtos/GameDTO';

export interface GameRepository {
  listByPoolAndUserId(poolId: string, userId: string): Promise<GameDTO[]>;
}
