"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const appolo_oauth2_1 = require("appolo-oauth2");
let Client = class Client {
    async get() {
        try {
            let model = this.injector.get(this.moduleOptions.model);
            let client = await appolo_oauth2_1.createOAuth2Server(Object.assign(Object.assign({}, this.moduleOptions.config), { model }));
            return client;
        }
        catch (e) {
            throw e;
        }
    }
};
tslib_1.__decorate([
    inject_1.inject()
], Client.prototype, "moduleOptions", void 0);
tslib_1.__decorate([
    inject_1.inject()
], Client.prototype, "app", void 0);
tslib_1.__decorate([
    inject_1.inject()
], Client.prototype, "injector", void 0);
Client = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton(),
    inject_1.factory()
], Client);
exports.Client = Client;
//# sourceMappingURL=client.js.map