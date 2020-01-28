"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const client_1 = require("./src/client");
let OAuth2Module = class OAuth2Module extends appolo_1.Module {
    constructor(options) {
        super(options);
        this.Defaults = {
            id: "oAuth2Server"
        };
    }
    get exports() {
        return [{ id: this.moduleOptions.id, type: client_1.Client }];
    }
};
OAuth2Module = tslib_1.__decorate([
    appolo_1.module()
], OAuth2Module);
exports.OAuth2Module = OAuth2Module;
//# sourceMappingURL=oAuth2Module.js.map