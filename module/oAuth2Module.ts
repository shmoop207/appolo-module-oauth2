import {module, Module, Util} from 'appolo';
import {IOptions} from "./src/interfaces";
import {Client} from "./src/client";

@module()
export class OAuth2Module extends Module<IOptions> {

    constructor(options: IOptions) {
        super(options)
    }

    protected readonly Defaults: Partial<IOptions> = {
        id: "oAuth2Server"
    };

    public get exports() {
        return [{id: this.moduleOptions.id, type: Client}];
    }

}
