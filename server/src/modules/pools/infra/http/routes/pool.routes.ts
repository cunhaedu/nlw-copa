import { FastifyInstance } from "fastify";

import { PoolController } from "../controllers/PoolController";
import { $ref } from "../../../schemas/create-pool.schema";

export async function poolRoutes(server: FastifyInstance) {
  const poolController = new PoolController();

  server.post(
    "/",
    {
      schema: {
        body: $ref("createPoolSchema"),
        response: {
          201: $ref("createPoolResponseSchema"),
        },
      },
    },
    poolController.create,
  );

  server.get(
    "/count",
    poolController.count,
  );
}
