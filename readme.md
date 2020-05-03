<p align="center"><img alt="Logotipo do Projeto" title="Back-end em Node" src=".github/logo.png" width="400px" /></p>

# Front-end em ReactJS

<p align="center">Autor: Jobson Gilberto Barros Amorim &lt;jobsonita@gmail.com&gt;</p>

Baseado nas aulas do curso [GoStack](https://rocketseat.com.br/gostack) (turma 11) da Rocketseat.

## Sobre este projeto

Este projeto demonstra as configurações básicas de um front-end em ReactJS usando as bibliotecas react e typescript.

Para maiores detalhes sobre o passo-a-passo da configuração do projeto, utilize a seção "Comandos utilizados na construção do projeto" deste readme em conjunto com o detalhamento dos [commits](https://github.com/jobsonita/rocketseat-bootcamp-nivel03-modulo01/commits/master) deste repositório.

## Dependências Globais

É necessário ter [Node](https://github.com/nvm-sh/nvm) e [Yarn](https://yarnpkg.com) instalados.

## Bibliotecas e ferramentas utilizadas

- react
- typescript
- [VS Code](https://code.visualstudio.com) (editor de código preferido)

## Instalação e execução

Com um terminal aberto na raiz do projeto, execute:

```
yarn
```

Após a instalação, execute:

```
yarn start
```

Finalmente, navegue até o endereço http://localhost:3000

## Comandos utilizados na construção do projeto

Caso deseje criar um projeto do zero seguindo os passos dos commits, listo abaixo os comandos executados neste projeto.

### Sessão 01

#### Aula 01

```
yarn create react-app project_name --template=typescript
cd project_name
yarn start
```

#### Aula 03

```
yarn add eslint -D
yarn eslint --init
```

Configurações do eslint:

```
? How would you like to use ESLint?
> To check syntax, find problems, and enforce code style
? What type of modules does your project use?
> JavaScript modules (import/export)
? Which framework does your project use?
> React
? Does your project use TypeScript?
> y
? Where does your code run?
* Browser
? How would you like to define a style for your project?
> Use a popular style guide
? Which style guide do you want to follow?
> Standard: https://github.com/standard/standard
? What format do you want your config file to be in?
> JSON
? Would you like to install them now with npm?
> n
```

```
yarn add -D eslint-config-standard eslint-config-standard-react @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-node eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-jsx-a11y
```

```
yarn add eslint-import-resolver-typescript -D
```
