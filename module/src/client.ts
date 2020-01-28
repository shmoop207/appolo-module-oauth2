"use strict";
import {define, factory, IFactory, inject, singleton, Injector, IApp} from 'appolo';
import {IOptions} from "./interfaces";
import {createOAuth2Server, OAuth2Server,IPasswordModel} from "appolo-oauth2";


@define()
@singleton()
@factory()
export class Client implements IFactory<OAuth2Server> {

    @inject() moduleOptions: IOptions;
    @inject() app: IApp;
    @inject() injector: Injector;


    public async get(): Promise<OAuth2Server> {

        try {

            let model = this.injector.get<IPasswordModel>(this.moduleOptions.model);

            let client = await createOAuth2Server({...this.moduleOptions.config, model});

            return client;

        } catch (e) {
            throw e;
        }
    }
}
