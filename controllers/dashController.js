
import UserModel from "../models/userModel.js";


export default class DashController {
    async dashboardView(req, res) {
        res.render('dashboard/dashPage', { layout: false });
    }


    async listarUsuarios(req, res) {
        let termo = null;

        if (req.query.termo) {
            termo = req.query.termo;
        }

        const banco = new UserModel();
        let lista = await banco.usuariosFiltro(termo);
        res.json({ lista });
    }
}