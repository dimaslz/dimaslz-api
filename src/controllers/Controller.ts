import { Request, Response } from "express";

export interface Controller {
	run(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
