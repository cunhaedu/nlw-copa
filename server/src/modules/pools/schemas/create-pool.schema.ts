import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createPoolSchema = z.object({
  title: z
    .string({
      required_error: "title is required",
      invalid_type_error: "title must be a string",
    }).min(1, { message: "title is required" })
});

const createPoolResponseSchema = z.object({
  code: z.string(),
});

export type CreatePoolInput = z.infer<typeof createPoolSchema>;

export const { schemas: poolSchemas, $ref } = buildJsonSchemas({
  createPoolResponseSchema,
  createPoolSchema,
});
