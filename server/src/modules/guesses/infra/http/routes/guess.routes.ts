import { FastifyInstance } from "fastify";

import { GuessController } from '../controllers/GuessController';

export async function guessRoutes(server: FastifyInstance) {
  const guessController = new GuessController();

  server.get(
    "/count",
    guessController.count,
  );
}
