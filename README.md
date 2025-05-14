# Gestor de Tarefas

Este é um projeto de **Gestão de Tarefas** com um back-end desenvolvido em **NestJS** e um front-end em **HTML, CSS e JavaScript puro**. O sistema permite o gerenciamento de tarefas, incluindo funcionalidades como adicionar, editar, concluir e excluir tarefas.

## Tecnologias

- **Back-end**: NestJS (Node.js)
- **Front-end**: HTML, CSS, JavaScript puro
- **Banco de dados**: SQLite (arquivo local db.sqlite), ORM: TypeORM (mapeia as entidades Task para tabelas no banco)



## Estrutura do Projeto

O projeto está organizado em duas pastas:

- **Backend**: Contém a aplicação NestJS.
- **Frontend**: Contém a aplicação do front-end em HTML, CSS e JavaScript.

## Pré-requisitos

Antes de iniciar, verifique se você tem os seguintes programas instalados:

- **Node.js** (preferencialmente a versão LTS)
- **NPM** ou **Yarn** (gerenciador de pacotes para o Node.js)

## Como Inicializar o Back-end

1. Navegue até a pasta do **back-end**:

    ```bash
    cd Backend
    ```

2. Instale as dependências do back-end:

    ```bash
    npm install
    ```

3. Inicie o servidor do back-end:

    ```bash
    npm run start
    ```

O servidor estará rodando em `http://localhost:3000`, e você pode interagir com a API para adicionar, editar, concluir ou remover tarefas.

## Como Inicializar o Front-end

1. Navegue até a pasta do **front-end**:

    ```bash
    cd Frontend
    ```

2. Abra o arquivo `index.html` em seu navegador diretamente ou inicie um servidor local (caso prefira):

    - Se estiver utilizando um editor como o **VS Code**, você pode usar a extensão **Live Server** para iniciar o servidor automaticamente.
    - Alternativamente, use um servidor simples com o seguinte comando:

    ```bash
    npx http-server
    ```

Isso iniciará o front-end em `http://localhost:8080`, e você poderá interagir com o sistema de tarefas no navegador.

## Como Testar a Aplicação

### Testando o Back-end

Para testar o back-end, você pode usar ferramentas como o **Postman** ou **Insomnia** para fazer requisições à API:

- **GET** `/tasks`: Listar todas as tarefas.
- **POST** `/tasks`: Criar uma nova tarefa.
- **PATCH** `/tasks/{id}`: Editar uma tarefa existente.
- **DELETE** `/tasks/{id}`: Remover uma tarefa.

### Testando o Front-end

No front-end, você pode interagir diretamente com a interface de usuário, que permite adicionar, editar, concluir e excluir tarefas. Todas as operações são feitas por meio de requisições à API do back-end.



