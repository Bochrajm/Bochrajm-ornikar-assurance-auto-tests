// cypress/support/backend/schemas/vehicle.schema.js
export const vehicleSchema = {
  type: "object",
  required: ["specifications", "versions"],
  properties: {
    specifications: {
      type: "object",
      required: ["brand", "model", "energy", "tax_horsepower", "first_registration_date", "last_registration_date"],
      properties: {
        brand: { type: "string" },
        model: { type: "string" },
        energy: { type: "string" },
        tax_horsepower: { type: "number" },
        first_registration_date: { type: "string" },
        last_registration_date: { type: "string" }
      }
    },
    versions: {
      type: "array",
      items: {
        type: "object",
        required: ["version", "is_utility", "ids"],
        properties: {
          version: { type: "string" },
          is_utility: { type: "boolean" },
          ids: {
            type: "array",
            items: { type: "string" }
          }
        }
      }
    }
  }
};