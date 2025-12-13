
import UserModel from "../models/userModel.js";

export default class AuthMiddleware {

    async verificarUsuarioLogado(req, res, next) {
        if(req.cookies != undefined && req.cookies.usuarioLogado != null){
            let usuID = req.cookies.usuarioLogado;
            let usuario = new UserModel();
            usuario = await usuario.obter(usuID);
            if(usuario != null) {
                next();
            }
            else{
                res.redirect("/user/login");
            }
        }
        else{
            res.redirect("/user/login");
        }
    }

}
