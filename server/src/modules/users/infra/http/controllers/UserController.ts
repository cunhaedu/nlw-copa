import { container } from 'tsyringe';

import { CountUsersService } from '../../../services/CountPoolsService';

export class UserController {
  async count() {
    const countUserService = container.resolve(CountUsersService);

    return countUserService.execute();
  }
}
