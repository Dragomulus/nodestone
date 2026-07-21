import { Request } from "express";
import { PageParser } from "../core/page-parser";
import { CssSelectorRegistry } from "../core/css-selector-registry";
export declare class Character extends PageParser {
    protected getURL(req: Request): string;
    protected getCSSSelectors(): CssSelectorRegistry;
}
