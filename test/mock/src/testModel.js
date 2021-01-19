"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModel = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const utils_1 = require("@appolo/utils");
let TestModel = class TestModel {
    constructor() {
        this._tokens = {};
        this._refreshTokens = {};
    }
    async getClient(clientId, clientSecret) {
        if (clientId == "aa" && clientSecret == "bb") {
            return { grants: ["password", "refreshToken"], id: "111" };
        }
    }
    async validateScope(user, client, scope) {
        if (scope.includes("scopeTest")) {
            return ["scopeTest"];
        }
    }
    async getUser(username, password) {
        if (username == "ccc" && password == "ddd") {
            return { userName: "test" };
        }
    }
    async revokeAccessToken(token) {
        delete this._tokens[token.accessToken];
        return true;
    }
    async saveAccessToken(token, client, user) {
        this._tokens[token.accessToken] = token;
        return token;
    }
    async generateAccessToken(client, user, scope) {
        return utils_1.Guid.guid();
    }
    async generateRefreshToken(client, user, scope) {
        return utils_1.Guid.guid();
    }
    async getAccessToken(accessToken) {
        return this._tokens[accessToken];
    }
    async getRefreshToken(refreshToken) {
        return this._refreshTokens[refreshToken];
    }
    async revokeRefreshToken(token) {
        delete this._tokens[token.accessToken];
        return true;
    }
    async saveRefreshToken(token, client, user) {
        this._refreshTokens[token.refreshToken] = token;
        return token;
    }
    async verifyScope(token, scope) {
        return token.scope.every(item => scope.includes(item));
    }
};
TestModel = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], TestModel);
exports.TestModel = TestModel;
//# sourceMappingURL=testModel.js.map