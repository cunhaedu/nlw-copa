export type CreateParticipant = {
  userId: string;
  poolId: string;
}

export interface ParticipantRepository {
  create(data: CreateParticipant): Promise<void>;
}
