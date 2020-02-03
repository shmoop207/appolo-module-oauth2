import {controller, Controller, get, inject, middleware, IRequest,HttpError} from 'appolo'
import {OAuth2Server, Utils} from "../../../index";

@controller()
export class AccountsController extends Controller {

    @inject() oAuth2Server: OAuth2Server;

    @get("/login")
    async login(req: IRequest, res) {

        try {
            let {pass, name} = Utils.parseAuthorization(req.headers["authorization"]);

            let token = await this.oAuth2Server.login({
                username: req.query.username,
                password: req.query.password,
                clientId: name,
                clientSecret: pass,
                scope: req.query.scope
            });

            return token;

        }catch (e) {
            throw new HttpError(e.code,e.message)
        }




    }


    @get("/token")
    async token(req: IRequest) {

        let reqToken = Utils.getTokenFromBearer(req.headers["authorization"]);


            let token = await this.oAuth2Server.authenticate({token: reqToken});
            return token;




    }
}
