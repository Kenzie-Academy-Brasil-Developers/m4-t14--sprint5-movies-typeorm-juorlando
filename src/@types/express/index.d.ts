import * as express from "express"

declare global {
  namespace Express {
    interface Request {
      validatedMovie: {
        id: number;
        name: string;
        description: string | null;
        duration: number;
        price: number;
      };
    }
  }
}
