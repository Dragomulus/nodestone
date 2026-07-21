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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./logger/logger"));
var pino_http_1 = __importDefault(require("pino-http"));
var character_1 = require("./profile/character");
var achievements_1 = require("./profile/achievements");
var classjob_1 = require("./profile/classjob");
var freecompany_1 = require("./freecompany/freecompany");
var members_1 = require("./freecompany/members");
var character_search_1 = require("./search/character-search");
var freecompany_search_1 = require("./search/freecompany-search");
var app = (0, express_1.default)();
var httpLogger = (0, pino_http_1.default)({ logger: logger_1.default });
app.use(httpLogger);
var characterParser = new character_1.Character();
var achievementsParser = new achievements_1.Achievements();
var classJobParser = new classjob_1.ClassJob();
var freeCompanyParser = new freecompany_1.FreeCompany();
var freeCompanyMemberParser = new members_1.FCMembers();
var characterSearch = new character_search_1.CharacterSearch();
var freecompanySearch = new freecompany_search_1.FreeCompanySearch();
app.get("/Character/Search", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var parsed, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                res.set("Access-Control-Allow-Origin", "*");
                if (req.method === "OPTIONS") {
                    return [2 /*return*/, res.sendStatus(200)];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, characterSearch.parse(req)];
            case 2:
                parsed = _a.sent();
                return [2 /*return*/, res.status(200).send(parsed)];
            case 3:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(500).send(err_1)];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get("/FreeCompany/Search", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var parsed, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                res.set("Access-Control-Allow-Origin", "*");
                if (req.method === "OPTIONS") {
                    return [2 /*return*/, res.sendStatus(200)];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, freecompanySearch.parse(req)];
            case 2:
                parsed = _a.sent();
                return [2 /*return*/, res.status(200).send(parsed)];
            case 3:
                err_2 = _a.sent();
                return [2 /*return*/, res.status(500).send(err_2)];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get("/Character/:characterId", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var character, parsed, additionalData, _a, _b, err_3;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                res.set("Access-Control-Allow-Origin", "*");
                if (((_c = req.query["columns"]) === null || _c === void 0 ? void 0 : _c.indexOf("Bio")) > -1) {
                    res.set("Cache-Control", "max-age=3600");
                }
                if (req.method === "OPTIONS") {
                    return [2 /*return*/, res.sendStatus(200)];
                }
                _d.label = 1;
            case 1:
                _d.trys.push([1, 7, , 8]);
                return [4 /*yield*/, characterParser.parse(req, "Character.")];
            case 2:
                character = _d.sent();
                parsed = {
                    Character: __assign({ ID: +req.params.characterId }, character),
                };
                additionalData = Array.isArray(req.query.data)
                    ? req.query.data
                    : [req.query.data].filter(function (d) { return !!d; });
                if (!additionalData.includes("AC")) return [3 /*break*/, 4];
                _a = parsed;
                return [4 /*yield*/, achievementsParser.parse(req, "Achievements.")];
            case 3:
                _a.Achievements = _d.sent();
                _d.label = 4;
            case 4:
                if (!additionalData.includes("CJ")) return [3 /*break*/, 6];
                _b = parsed;
                return [4 /*yield*/, classJobParser.parse(req, "ClassJobs.")];
            case 5:
                _b.ClassJobs = _d.sent();
                _d.label = 6;
            case 6: return [2 /*return*/, res.status(200).send(parsed)];
            case 7:
                err_3 = _d.sent();
                if (err_3.message === "404") {
                    return [2 /*return*/, res.sendStatus(404)];
                }
                return [2 /*return*/, res.status(500).send(err_3)];
            case 8: return [2 /*return*/];
        }
    });
}); });
app.get("/FreeCompany/:fcId", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var freeCompany, parsed, additionalData, _a, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                res.set("Access-Control-Allow-Origin", "*");
                if (req.method === "OPTIONS") {
                    return [2 /*return*/, res.sendStatus(200)];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, freeCompanyParser.parse(req, "FreeCompany.")];
            case 2:
                freeCompany = _b.sent();
                parsed = {
                    FreeCompany: __assign({ ID: +req.params.fcId }, freeCompany),
                };
                additionalData = Array.isArray(req.query.data)
                    ? req.query.data
                    : [req.query.data].filter(function (d) { return !!d; });
                if (!additionalData.includes("FCM")) return [3 /*break*/, 4];
                _a = parsed;
                return [4 /*yield*/, freeCompanyMemberParser.parse(req, "FreeCompanyMembers.")];
            case 3:
                _a.FreeCompanyMembers = _b.sent();
                _b.label = 4;
            case 4: return [2 /*return*/, res.status(200).send(parsed)];
            case 5:
                err_4 = _b.sent();
                if (err_4.message === "404") {
                    return [2 /*return*/, res.sendStatus(404)];
                }
                return [2 /*return*/, res.status(500).send(err_4)];
            case 6: return [2 /*return*/];
        }
    });
}); });
var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
    logger_1.default.info("Listening at http://localhost:".concat(port));
});
server.on("error", console.error);
//# sourceMappingURL=server.js.map