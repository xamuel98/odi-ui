import { primitiveSize } from "./size.js";

export const primitiveBorder = {
  radius: {
    full: "9999px",
    "0": primitiveSize["0"],
    "050": primitiveSize["050"],
    100: primitiveSize["100"],
    150: primitiveSize["150"],
    200: primitiveSize["200"],
    300: primitiveSize["300"],
    400: primitiveSize["400"],
    500: primitiveSize["500"],
    750: primitiveSize["750"],
  },

  width: {
    input: primitiveSize["0165"],
    "025": primitiveSize["025"],
    "050": primitiveSize["050"],
    100: primitiveSize["100"],
  },
} as const;
