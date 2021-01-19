"use strict";
var OAuth2Module_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2Module = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const client_1 = require("./src/client");
let OAuth2Module = OAuth2Module_1 = class OAuth2Module extends engine_1.Module {
    constructor() {
        super(...arguments);
        this.Defaults = {
            id: "oAuth2Server"
        };
    }
    static for(options) {
        return { type: OAuth2Module_1, options };
    }
    get exports() {
        return [{ id: this.moduleOptions.id, type: client_1.Client }];
    }
};
OAuth2Module = OAuth2Module_1 = tslib_1.__decorate([
    engine_1.module()
], OAuth2Module);
exports.OAuth2Module = OAuth2Module;
//# sourceMappingURL=oAuth2Module.js.map