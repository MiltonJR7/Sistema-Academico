import PerfilModel from "../models/perfilModel.js";
import UserModel from "../models/userModel.js";


export default class UserController {
    loginView(req, res) {
        res.render('login/loginPage', { layout: false });
    }

    async registerView(req, res) {
        let banco = new PerfilModel();
        const result = await banco.listarTipo();
        res.render('register/registerPage', { layout: false, result: result});
    }

    async login(req, res) {
        let ok = false;
        let msg = "";

        if(req.body.email !== null && req.body.senha !== null) {
            let banco = new UserModel();
            banco = await banco.logar(req.body.email, req.body.senha);

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
        let ok = false;
        let msg = "";
        const {nome, email, senha, tipo} = req.body;

        if(nome && email && senha && tipo) {
            const banco = new UserModel(0, nome, email, senha, tipo);
            let result = await banco.cadastrar();

            if(result) {
                ok = true;
                res.send({ok: ok});
            } else {
                ok = false;
                res.send({ok: ok});
            }
        } else {
            ok = false;
            res.send({ok: ok});
        }
    }
}