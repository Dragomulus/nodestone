"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeCompanySearch = void 0;
var paginated_page_parser_1 = require("../core/paginated-page-parser");
var css_selector_registry_1 = require("../core/css-selector-registry");
var freeCompanySearch = __importStar(require("lodestone-css-selectors/search/freecompany.json"));
var logger_1 = __importDefault(require("../logger/logger"));
var FreeCompanySearch = /** @class */ (function (_super) {
    __extends(FreeCompanySearch, _super);
    function FreeCompanySearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FreeCompanySearch.prototype.getBaseURL = function (req) {
        logger_1.default.info(req.query);
        var query = "?q=".concat(req.query.name);
        if (req.query.dc) {
            query += "&worldname=_dc_".concat(req.query.dc);
        }
        else if (req.query.server) {
            query += "&worldname=".concat(req.query.server);
        }
        return "https://".concat(css_selector_registry_1.PAGE_REGION, ".finalfantasyxiv.com/lodestone/freecompany/").concat(query);
    };
    FreeCompanySearch.prototype.getCSSSelectors = function () {
        return freeCompanySearch;
    };
    return FreeCompanySearch;
}(paginated_page_parser_1.PaginatedPageParser));
exports.FreeCompanySearch = FreeCompanySearch;
//# sourceMappingURL=freecompany-search.js.map