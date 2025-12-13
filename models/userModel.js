import Database from "../db/database.js";
const banco = new Database();

export default class UserModel {
    #usuID;
    #usuEmail;
    #usuNome;
    #usuSenha;
    #usuPerfil;
    #usuSituacao;

    get usuID() { return this.#usuID; } set usuID(value) { this.#usuID = value; }
    get usuEmail() { return this.#usuEmail; } set usuEmail(value) { this.#usuEmail = value; }
    get usuSenha() { return this.#usuSenha; } set usuSenha(value) { this.#usuSenha = value; }
    get usuPerfil() { return this.#usuPerfil; } set usuPerfil(value) { this.#usuPerfil = value; }
    get usuSituacao() { return this.#usuSituacao; } set usuSituacao(value) { this.#usuSituacao = value; }

    constructor(id, email, nome, senha, perfil, situacao) {
        this.#usuID = id;
        this.#usuEmail = email;
        this.#usuNome = nome;
        this.#usuSenha = senha;
        this.#usuPerfil = perfil;
        this.#usuSituacao = situacao === "ATIVO" ? 1 : 0;
    }

    async cadastrar(email, senha) {
        const sql = "SELECT * FROM USUARIO WHERE LOGIN = ? AND SENHA_HASH = ?";
        const valores = [email, senha];
        const result = await banco.ExecutaComando(sql, valores);
        if(result.length > 0) {
            let row = result[0];
            return new UserModel(row["ID_USUARIO"], row["LOGIN"], row["NOME"], row["SENHA_HASH"], row["PERFIL"], row["SITUACAO"]);
        }
        return null;
    }

    async obter(id) {
        const sql = `
            SELECT ID_USUARIO, LOGIN, SENHA_HASH, PERFIL, SITUACAO
            FROM USUARIO
            WHERE ID_USUARIO = ?
        `;
        const result = await banco.ExecutaComando(sql, [id]);

        if (result.length > 0) {
            let row = result[0];
            return new UserModel(
                row["ID_USUARIO"],
                row["LOGIN"],
                row["NOME"],
                row["SENHA_HASH"],
                row["PERFIL"],
                row["SITUACAO"]
            );
        }
        return null;
    }
}