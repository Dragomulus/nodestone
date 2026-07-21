export declare const PAGE_REGION: string;
export interface CssSelectorDefinition {
    selector: string;
    multiple?: boolean;
    attribute?: string;
    regex?: string;
}
export interface CssSelectorRegistry {
    [key: string]: CssSelectorDefinition | CssSelectorRegistry;
}
