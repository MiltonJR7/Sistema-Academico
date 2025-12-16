import Database from "../db/database.js";
const banco = new Database();

export default class UserModel {
    #usuID;
    #usuEmail;
    #usuNome;
    #usuSenha;
    #usuPerfil;

    get usuID() { return this.#usuID; } set usuID(value) { this.#usuID = value; }
    get usuNome() { return this.#usuNome; } set usuNome(value) { this.#usuNome = value; }
    get usuEmail() { return this.#usuEmail; } set usuEmail(value) { this.#usuEmail = value; }
    get usuSenha() { return this.#usuSenha; } set usuSenha(value) { this.#usuSenha = value; }
    get usuPerfil() { return this.#usuPerfil; } set usuPerfil(value) { this.#usuPerfil = value; }

    constructor(id, nome, email, senha, perfil) {
        this.#usuID = id;
        this.#usuNome = nome;
        this.#usuEmail = email;
        this.#usuSenha = senha;
        this.#usuPerfil = perfil;
    }

    async logar(email, senha) {
        const sql = "SELECT * FROM TB_USUARIO WHERE USU_EMAIL = ? AND USU_SENHA = ?";
        const valores = [email, senha];
        const result = await banco.ExecutaComando(sql, valores);
        if(result.length > 0) {
            let row = result[0];
            return new UserModel(row["USU_ID"], row["USU_NOME"], row["USU_EMAIL"], row["USU_SENHA"], row["PER_ID"]);
        }
        return null;
    }

    async cadastrar() {
        const sql = "INSERT INTO TB_USUARIO (USU_ID, USU_NOME, USU_EMAIL, USU_SENHA, PER_ID) VALUES (?, ?, ?, ?, ?)";
        const valores = [this.#usuID, this.#usuNome, this.#usuEmail, this.#usuSenha, this.#usuPerfil];
        const result = await banco.ExecutaComandoNonQuery(sql, valores);
        return result;
    }

    async obter(id) {
        const sql = `
            SELECT USU_ID, USU_NOME, USU_EMAIL, USU_SENHA, PER_ID
            FROM TB_USUARIO
            WHERE USU_ID = ?
        `;
        const result = await banco.ExecutaComando(sql, [id]);

        if (result.length > 0) {
            let row = result[0];
            return new UserModel(
                row["USU_ID"],
                row["USU_NOME"],
                row["USU_EMAIL"],
                row["USU_SENHA"],
                row["PER_ID"]
            );
        }
        return null;
    }

    async listarUsuario() {
        const sql = `
            SELECT
                TB_USUARIO.USU_ID,
                TB_USUARIO.USU_NOME,
                TB_USUARIO.USU_EMAIL,
                TB_USUARIO.USU_SENHA,
                TB_PERFIL.PER_TIPO
            FROM TB_USUARIO
            INNER JOIN TB_PERFIL
                ON TB_USUARIO.PER_ID = TB_PERFIL.PER_ID
        `;
        const result = await banco.ExecutaComando(sql);
        let lista = [];

        for(let i = 0; i < result.length; i++) {
            const row = result[i];
            lista.push(
                new UserModel(
                    row.USU_ID,
                    row.USU_NOME,
                    row.USU_EMAIL,
                    row.USU_SENHA,
                    row.PER_TIPO
                )
            )
        }
        return lista;
    }

    async usuariosFiltro(termoFiltro) {
        let sqlWhere = "";
        let valores = [];

        if (termoFiltro) {
            if (isNaN(termoFiltro)) {
                sqlWhere = " WHERE US.USU_NOME LIKE ? ";
                valores.push("%" + termoFiltro + "%");
            } else {
                sqlWhere = " WHERE US.USU_ID = ? ";
                valores.push(termoFiltro);
            }
        }

        let sql = `
            SELECT
                US.USU_ID,
                US.USU_NOME,
                US.USU_EMAIL,
                US.USU_SENHA,
                P.PER_TIPO
            FROM TB_USUARIO US
            INNER JOIN TB_PERFIL P
                ON US.PER_ID = P.PER_ID
            ${sqlWhere}
            ORDER BY US.USU_NOME ASC
        `;

        const result = await banco.ExecutaComando(sql, valores);
        let lista = [];

        for (let i = 0; i < result.length; i++) {
            let row = result[i];
            lista.push({
                id: row["USU_ID"],      
                nome: row["USU_NOME"],  
                email: row["USU_EMAIL"],
                senha: row["USU_SENHA"],
                perfil: row["PER_TIPO"] 
            });
        }
        return lista;
    }

}