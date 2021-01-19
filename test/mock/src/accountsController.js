"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
const index_1 = require("../../../index");
let AccountsController = class AccountsController extends route_1.Controller {
    async login(req, res) {
        try {
            let { pass, name } = index_1.Utils.parseAuthorization(req.headers["authorization"]);
            let token = await this.oAuth2Server.login({
                username: req.query.username,
                password: req.query.password,
                clientId: name,
                clientSecret: pass,
                scope: req.query.scope
            });
            return token;
        }
        catch (e) {
            throw new route_1.HttpError(e.code, e.message);
        }
    }
    async token(req) {
        let reqToken = index_1.Utils.getTokenFromBearer(req.headers["authorization"]);
        let token = await this.oAuth2Server.authenticate({ token: reqToken });
        return token;
    }
};
tslib_1.__decorate([
    inject_1.inject()
], AccountsController.prototype, "oAuth2Server", void 0);
tslib_1.__decorate([
    route_1.get("/login")
], AccountsController.prototype, "login", null);
tslib_1.__decorate([
    route_1.get("/token")
], AccountsController.prototype, "token", null);
AccountsController = tslib_1.__decorate([
    route_1.controller()
], AccountsController);
exports.AccountsController = AccountsController;
//# sourceMappingURL=accountsController.js.map