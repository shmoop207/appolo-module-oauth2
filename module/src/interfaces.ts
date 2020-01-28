import {IModuleOptions} from "appolo";
import {
    createOAuth2Server,
    OAuth2Server,
    IOptions as OAuth2Options,
    IAuthenticationModel,
    IPasswordModel,
    IRefreshTokenModel
} from "appolo-oauth2";


export interface IOptions extends IModuleOptions {
    id?: string,
    model: IModelClass
    config?: Omit<OAuth2Options, "model">
}

export interface IModelClass {
    new(args: any): IAuthenticationModel | IPasswordModel | IRefreshTokenModel
}


export {OAuth2Server}
