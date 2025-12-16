
import Database from "../db/database.js";
const banco = new Database();

export default class PerfilModel {
    #perID;
    #perTipo;

    get perID() { return this.#perID; } set perID(value) { this.#perID = value; }
    get perTipo() { return this.#perTipo; } set perTipo(value) { this.#perTipo = value; }

    constructor({id, tipo} = {}) {
        this.#perID = id;
        this.#perTipo = tipo;
    }

    async listarTipo() {
        const sql = "SELECT * FROM TB_PERFIL";
        const result = await banco.ExecutaComando(sql);
        let lista = [];

        for(let i = 0; i < result.length; i++) {
            lista.push(new PerfilModel({ id:result[i]["PER_ID"], tipo:result[i]["PER_TIPO"] }));
        }
        console.log(lista)
        return lista;
    }

}