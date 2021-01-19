"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@appolo/core");
const chai = require("chai");
const chaiHttp = require("chai-http");
const index_1 = require("../index");
const qs = require("qs");
const testModel_1 = require("./mock/src/testModel");
chai.use(chaiHttp);
let should = require('chai').should();
//chai.use(sinonChai);
describe("auth module Spec", function () {
    let app;
    beforeEach(async () => {
        app = core_1.createApp({ root: __dirname + "/mock", environment: "production", port: 8182 });
        app.set("qsParser", qs.parse);
        app.module.use(index_1.OAuth2Module.for({ model: testModel_1.TestModel }));
        await app.launch();
    });
    afterEach(async () => {
        await app.reset();
    });
    it("should load auth", async () => {
        let reqLogin = await chai.request(app.route.handle)
            .get('/login').auth("aa", "bb").query({ username: "ccc", password: "ddd", "scope[]": ["scopeTest"] });
        let token = reqLogin.body.accessToken;
        token.should.be.ok;
        let reqToken = await chai.request(app.route.handle)
            .get('/token')
            .set("Authorization", "Bearer " + token);
        reqToken.body.accessToken.should.be.eq(token);
    });
    it("should load auth with error", async () => {
        let reqLogin = await chai.request(app.route.handle)
            .get('/login').auth("aa2", "bb").query({ username: "ccc", password: "ddd", "scope[]": ["scopeTest"] });
        reqLogin.body.statusCode.should.be.eq(400);
        reqLogin.body.message.should.be.eq("Invalid client: client is invalid");
    });
});
//# sourceMappingURL=spec.js.map