import { PageParser } from "./page-parser";
import { Request } from "express";
export declare abstract class PaginatedPageParser extends PageParser {
    protected abstract getBaseURL(req: Request): string;
    protected getURL(req: Request): string;
    parse(req: Request, columnsPrefix?: string): Promise<Object>;
}
