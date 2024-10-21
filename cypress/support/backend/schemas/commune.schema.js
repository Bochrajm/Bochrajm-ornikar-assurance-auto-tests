// cypress/support/backend/schemas/commune.schema.js
export const communeSchema = {
  type: "array",
  items: {
    type: "object",
    required: ["commune"],
    properties: {
      commune: { type: "string" }
    }
  }
};