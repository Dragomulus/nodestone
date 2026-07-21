import { Request } from "express";
import { CssSelectorRegistry } from "./css-selector-registry";
export declare abstract class PageParser {
    protected abstract getURL(req: Request): string;
    protected abstract getCSSSelectors(): CssSelectorRegistry;
    parse(req: Request, columnsPrefix?: string): Promise<Object>;
    private handleColumn;
    private getDefinition;
    private handleElement;
    private isDefinition;
    private definitionNameToColumnName;
    private handleDefinitionWithRoot;
}
