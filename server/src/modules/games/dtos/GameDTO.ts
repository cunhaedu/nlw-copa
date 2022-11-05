import { GuessDTO } from '../../guesses/dtos/GuessDTO';

export interface GameDTO {
  id: string;
  firstTeamCountryCode: string;
  secondTeamCountryCode: string;

  guesses: GuessDTO[];
}
