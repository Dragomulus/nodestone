import { Request } from "express";
import { CssSelectorRegistry } from "../core/css-selector-registry";
import { PaginatedPageParser } from "../core/paginated-page-parser";
export declare class Achievements extends PaginatedPageParser {
    protected getCSSSelectors(): CssSelectorRegistry;
    protected getBaseURL(req: Request): string;
    parse(req: Request, columnsPrefix?: string): Promise<Object>;
}
