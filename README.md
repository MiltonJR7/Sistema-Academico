# 📚 SCHOOLSYS — Sistema de Gestão Escolar (Back End)

Este projeto é o desenvolvimento de um **sistema de gestão escolar com foco exclusivo em Back End**, voltado para o estudo e aplicação prática de **modelagem de banco de dados, regras de negócio e autenticação**.

O sistema foi pensado para simular um ambiente real de uma instituição de ensino, priorizando **consistência de dados, relacionamentos corretos e validações de negócio**, sem implementação de interface gráfica neste momento.

> 🎯 **Objetivo principal:** Consolidar conhecimentos em arquitetura back end, banco de dados relacional e controle de autenticação, preparando a base para futuras integrações com front end ou APIs REST.

---

## 🚀 Status do Projeto

🟢 **Em desenvolvimento ativo**

- ✅ Estrutura inicial do banco de dados concluída  
- ✅ Tabela de usuários implementada  
- ✅ Sistema de login funcional  
- 🟡 Registro de usuários (REGISTER) ~ **75% concluído**  
- 🔜 Implementação de regras avançadas de negócio  
- 🔜 Integração com autenticação segura (hash de senha)

---

## 🧩 Funcionalidades Atuais

O sistema atualmente contempla:

- 🔐 Autenticação de usuários
- 👤 Controle de perfis:
  - ADMIN
  - PROFESSOR
  - ALUNO
- 🗄️ Modelagem completa do banco de dados escolar
- 🔄 Relacionamentos consistentes entre entidades
- 🧱 Estrutura preparada para crescimento modular

---

## 🗂️ Modelagem de Dados

O banco de dados foi projetado seguindo boas práticas de **normalização (3FN)**, evitando redundância e garantindo integridade referencial.

Principais entidades:

- USUARIO
- ALUNO
- PROFESSOR
- DISCIPLINA
- TURMA
- MATRICULA
- AVALIACAO
- NOTA
- FREQUENCIA
- HISTORICO_ESCOLAR
- PERIODO_LETIVO

Cada entidade possui:
- Chave primária bem definida
- Chaves estrangeiras claras
- Restrições de integridade (CHECK, UNIQUE)
- Regras de negócio aplicáveis no banco ou na camada de serviço

---

## 🧠 Conceitos Aplicados

- Modelagem relacional avançada
- Separação clara de responsabilidades
- Uso de tabelas de relacionamento (N:N)
- Controle de estados (ativos, inativos, encerrados)
- Pensamento orientado a regras de negócio
- Preparação para arquitetura em camadas (Controller, Service, Repository)

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** Back End (agnóstico de framework no momento)
- **Banco de Dados:** MySQL 8+
- **Engine:** InnoDB
- **Padrões:** SQL ANSI, Normalização, Integridade Referencial
- **Controle de Versão:** Git / GitHub

---

## 🔒 Segurança (Planejado)

Atualmente o login está funcional para testes.  
As próximas etapas incluem:

- Hash de senha (bcrypt ou equivalente)
- Validação de credenciais
- Controle de sessão / token
- Separação total entre dados sensíveis e domínio acadêmico

---

## 📈 Próximas Etapas

- Finalizar fluxo de registro de usuários
- Implementar validações de negócio no backend
- Criar camada de serviços
- Implementar regras como:
  - Limite de vagas em turma
  - Conflito de horário
  - Cálculo automático de média e frequência
- Preparar endpoints para futura API REST

---

## 📌 Considerações Finais

Este projeto foi estruturado para ser **robusto, escalável e didático**, permitindo evolução gradual sem refatorações drásticas.

Ideal para:
- Projetos acadêmicos
- Portfólio de Back End
- Base para APIs educacionais
- Estudo aprofundado de regras de negócio

---

📄 **Autor:** Milton de Oliveira Junior  
🎓 **Finalidade:** Educacional / Aprendizado contínuo  
🛠️ **Status:** Em progresso
