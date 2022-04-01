import { Request, Response } from "express";

export const chapter3Controller = (_: Request<any>, res: Response<any>) => {
  res.render("chapter-3");
};
