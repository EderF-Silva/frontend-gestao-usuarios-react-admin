# Frontend Gestão de Usuários - React Admin

Este é o frontend de um sistema de gestão de usuários, desenvolvido com React e utilizando a biblioteca `react-admin` para a interface administrativa. Este projeto consome uma API RESTful que pode ser encontrada no repositório [node-js-api-gestao-usuarios](https://github.com/EderF-Silva/node-js-api-gestao-usuarios).

> Projeto desenvolvido como parte da Pós-Graduação na **PUC Minas** – Qualidade de Software e Testes.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- A API backend disponível e configurada ([node-js-api-gestao-usuarios](https://github.com/EderF-Silva/node-js-api-gestao-usuarios))

## Instalação

1. Clone este repositório:

   ```sh
   git clone https://github.com/EderF-Silva/frontend-gestao-usuarios-react-admin.git
   cd frontend-gestao-usuarios-react-admin
   ```

2. Instale as dependências do projeto:

   ```sh
   npm install
   ```

3. Certifique-se de que a API backend está rodando no endereço `http://localhost:3000`. Caso esteja em outro endereço, atualize a URL base no arquivo [`src/dataProvider.ts`](src/dataProvider.ts).

## Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```sh
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`.

## Testes End-to-End

Este projeto utiliza o Cypress para testes end-to-end. Para abrir a interface do Cypress, execute:

```sh
npm run cypress:open
```

Os testes estão localizados na pasta [`cypress/e2e`](cypress/e2e).

## Produção

Para construir o aplicativo para produção, execute:

```sh
npm run build
```

Os arquivos de produção serão gerados na pasta `dist`. Para pré-visualizar a aplicação em produção, execute:

```sh
npm run serve
```
## ⚠️ Configuração da API Backend

Este projeto depende da API backend disponível no repositório [node-js-api-gestao-usuarios](https://github.com/EderF-Silva/node-js-api-gestao-usuarios). Certifique-se de seguir as instruções de instalação e execução da API antes de iniciar o frontend.

## 🧑‍💻 Autor
Desenvolvido por **Eder Silva.**  


