import {module, Module, IModuleParams} from '@appolo/engine';
import {IOptions} from "./src/interfaces";
import {Client} from "./src/client";

@module()
export class OAuth2Module extends Module<IOptions> {

    public static for(options: IOptions): IModuleParams {
        return {type: OAuth2Module, options}
    }

    protected readonly Defaults: Partial<IOptions> = {
        id: "oAuth2Server"
    };

    public get exports() {
        return [{id: this.moduleOptions.id, type: Client}];
    }

}
