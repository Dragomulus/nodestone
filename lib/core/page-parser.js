"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageParser = void 0;
// @ts-ignore
var RegexTranslator = __importStar(require("regex-translator"));
var linkedom_1 = require("linkedom");
var lodash_1 = require("lodash");
var axios = require('axios').default;
var PageParser = /** @class */ (function () {
    function PageParser() {
    }
    PageParser.prototype.parse = function (req_1) {
        return __awaiter(this, arguments, void 0, function (req, columnsPrefix) {
            var data, dom, document, columnsQuery, selectors, columns;
            var _this = this;
            if (columnsPrefix === void 0) { columnsPrefix = ''; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get(this.getURL(req)).catch(function (err) {
                            throw new Error(err.response.status);
                        })];
                    case 1:
                        data = (_a.sent()).data;
                        dom = (0, linkedom_1.parseHTML)(data);
                        document = dom.window.document;
                        columnsQuery = req.query && req.query['columns'];
                        selectors = this.getCSSSelectors();
                        if (columnsQuery && !Array.isArray(columnsQuery)) {
                            columns = columnsQuery.toString()
                                .split(',')
                                .filter(function (column) {
                                return column.startsWith(columnsPrefix);
                            })
                                .map(function (column) { return column.replace(columnsPrefix, ''); });
                        }
                        else if (columnsQuery && Array.isArray(columnsQuery)) {
                            columns = columnsQuery.map(function (c) { return c.toString(); })
                                .filter(function (column) {
                                return column.startsWith(columnsPrefix);
                            })
                                .map(function (column) { return column.replace(columnsPrefix, ''); });
                        }
                        else {
                            columns = Object.keys(selectors).map(function (key) {
                                return _this.definitionNameToColumnName(key);
                            }).filter(function (column) { return column !== 'default'; });
                        }
                        return [2 /*return*/, columns.reduce(function (acc, column) {
                                var _a;
                                var _b;
                                var definition = _this.getDefinition(selectors, column);
                                if (column === 'Root') {
                                    var context = (_b = _this.handleColumn(definition, document)) === null || _b === void 0 ? void 0 : _b.data;
                                    var contextDOM = (0, linkedom_1.parseHTML)(context);
                                    document = contextDOM.window.document;
                                    return __assign({}, acc);
                                }
                                var parsed = _this.handleColumn(definition, document);
                                if (parsed.isPatch || column === 'Entry') {
                                    return __assign(__assign({}, acc), (parsed.data || {}));
                                }
                                return __assign(__assign({}, acc), (_a = {}, _a[column] = parsed.data, _a));
                            }, {})];
                }
            });
        });
    };
    PageParser.prototype.handleColumn = function (definition, document) {
        var _this = this;
        if (definition === null) {
            return { isPatch: false, data: null };
        }
        if (this.isDefinition(definition)) {
            if (definition.multiple) {
                var elements_1 = [];
                document.querySelectorAll(definition.selector).forEach(function (e) { return elements_1.push(e); });
                return { isPatch: false, data: elements_1.map(function (element) { return _this.handleElement(element, definition); }) };
            }
            var element = document.querySelector(definition.selector);
            var data = this.handleElement(element, definition);
            return {
                isPatch: typeof data === 'object',
                data: data
            };
        }
        if (definition['ROOT']) {
            return {
                isPatch: false,
                data: this.handleDefinitionWithRoot(definition, document)
            };
        }
        return {
            isPatch: false,
            data: Object.keys(definition).reduce(function (acc, key) {
                var _a;
                var parsed = _this.handleColumn(_this.getDefinition(definition, key), document);
                if (parsed.data) {
                    if (parsed.isPatch) {
                        return __assign(__assign({}, (acc || {})), (parsed.data || {}));
                    }
                    return __assign(__assign({}, (acc || {})), (_a = {}, _a[_this.definitionNameToColumnName(key)] = parsed.data, _a));
                }
                return acc;
            }, null)
        };
    };
    PageParser.prototype.getDefinition = function (selectors, name) {
        if (selectors[name.toUpperCase()]) {
            return selectors[name.toUpperCase()];
        }
        if (selectors[(0, lodash_1.snakeCase)(name).toUpperCase()]) {
            return selectors[(0, lodash_1.snakeCase)(name).toUpperCase()];
        }
        return null;
    };
    PageParser.prototype.handleElement = function (element, definition) {
        var _a;
        if (!element) {
            return null;
        }
        var res;
        if (definition.attribute) {
            res = ((_a = element.attributes.getNamedItem(definition.attribute)) === null || _a === void 0 ? void 0 : _a.value) || '';
        }
        else {
            res = element.innerHTML || '';
        }
        if (definition.regex) {
            var mediary = RegexTranslator.getMediaryObjectFromRegexString(definition.regex);
            var regex = RegexTranslator.getRegexStringFromMediaryObject(mediary, 'ecma')
                .replace(/\(\?P/gm, '(?')
                .replace(/\\f\\n\\r\\t\\v/gm, '\\s\\f\\n\\r\\t\\v&nbsp;');
            var match = new RegExp(regex).exec(res);
            if (match) {
                return Object.entries(match.groups).reduce(function (acc, _a) {
                    var _b;
                    var key = _a[0], value = _a[1];
                    if (!(0, lodash_1.isNaN)(value) && (+value).toString() === value) {
                        value = +value;
                    }
                    return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
                }, {}) || null;
            }
            return null;
        }
        return ((0, lodash_1.isNaN)(+res) ? res : +res) || null;
    };
    PageParser.prototype.isDefinition = function (definition) {
        return definition.selector !== undefined;
    };
    PageParser.prototype.definitionNameToColumnName = function (key) {
        return key.split('_')
            .map(function (str) { return "".concat(str.slice(0, 1)).concat(str.slice(1).toLowerCase()); })
            .join('')
            .replace(/Id/gmi, 'ID');
    };
    PageParser.prototype.handleDefinitionWithRoot = function (definition, document) {
        var _this = this;
        var _a;
        var ROOT = definition.ROOT, definitions = __rest(definition, ["ROOT"]);
        var mainList = (_a = this.handleColumn(ROOT, document)) === null || _a === void 0 ? void 0 : _a.data;
        if (!mainList) {
            return null;
        }
        return {
            List: mainList.map(function (element) {
                var _a;
                var miniDOM = (0, linkedom_1.parseHTML)(element);
                var miniDocument = miniDOM.window.document;
                return (_a = _this.handleColumn(definitions, miniDocument)) === null || _a === void 0 ? void 0 : _a.data;
            }).filter(function (row) { return !!row; })
        };
    };
    return PageParser;
}());
exports.PageParser = PageParser;
//# sourceMappingURL=page-parser.js.map