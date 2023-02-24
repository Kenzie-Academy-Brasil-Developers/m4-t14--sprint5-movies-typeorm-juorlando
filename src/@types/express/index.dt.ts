import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      validatedMovie: {
        id: number;
        name: string;
        description: string;
        duration: number;
        price: number;
      };
    }
  }
}
