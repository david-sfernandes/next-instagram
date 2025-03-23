import type { User } from "./user";

declare global {
  interface CustomJwtSessionClaims extends User {}
}
