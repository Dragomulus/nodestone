import { PaginatedPageParser } from "../core/paginated-page-parser";
import { CssSelectorRegistry } from "../core/css-selector-registry";
import { Request } from "express";
export declare class CharacterSearch extends PaginatedPageParser {
    protected getBaseURL(req: Request): string;
    protected getCSSSelectors(): CssSelectorRegistry;
}
