import { FastifyInstance } from "fastify";

import { UserController } from '../controllers/UserController';

export async function userRoutes(server: FastifyInstance) {
  const userController = new UserController();

  server.get(
    "/count",
    userController.count,
  );
}
