import { container } from 'tsyringe';

import { CountGuessesService } from '../../../services/CountGuessesService';

export class GuessController {
  async count() {
    const countGuessesService = container.resolve(CountGuessesService);

    return countGuessesService.execute();
  }
}
