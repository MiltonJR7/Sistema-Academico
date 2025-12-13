import UserModel from "../models/userModel.js";


export default class UserController {
    loginView(req, res) {
        res.render('login/loginPage', { layout: false });
    }

    registerView(req, res) {
        res.render('register/registerPage', { layout: false });
    }

    async login(req, res) {
        let ok = false;
        let msg = "";

        if(req.body.email !== null && req.body.senha !== null) {
            let banco = new UserModel();
            banco = await banco.cadastrar(req.body.email, req.body.senha);

            if(banco != null) {
                ok = true;
                res.cookie("usuarioLogado", banco.usuID, {
                    httpOnly: true,
                    sameSite: "lax",
                    path: "/"
                })
                res.send({ok: ok});
            } else {
                msg = "Erro com banco de dados!"
                res.send({ok: ok, msg: msg});
            }

        } else {
            msg = "Erro com dados invalidos!"
            res.send({ok: ok, msg: msg});
        }
    }

    async register(req, res) {
        
    }
}