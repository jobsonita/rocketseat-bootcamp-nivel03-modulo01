<p align="center"><img alt="Logotipo do Projeto" title="Front-end em React" src=".github/logo.png" width="400px" /></p>

# Front-end em ReactJS - "Github Explorer"

<p align="center">Autor: Jobson Gilberto Barros Amorim &lt;jobsonita@gmail.com&gt;</p>

Baseado nas aulas do curso [GoStack](https://rocketseat.com.br/gostack) (turma 11) da Rocketseat.

<p align="center"><img alt="Github Explorer demo" title="Github Explorer" src=".github/demo.gif" width="600px" /></p>

## Sobre este projeto

Este projeto demonstra as configurações básicas de um front-end em ReactJS usando as bibliotecas react, typescript e styled-components.

Para maiores detalhes sobre o passo-a-passo da configuração do projeto, utilize a seção "Comandos utilizados na construção do projeto" deste readme em conjunto com o detalhamento dos [commits](https://github.com/jobsonita/rocketseat-bootcamp-nivel03-modulo01/commits/master) deste repositório.

Este projeto faz requisições à api pública do github. Atualmente, há um limite de [60 requisições por hora](https://developer.github.com/v3/#rate-limiting), em outras palavras, 60 pesquisas por hora na página principal ou 30 carregamentos da página de detalhes de repositório. Certifique-se de respeitar esse limite.

## Dependências Globais

É necessário ter [Node](https://github.com/nvm-sh/nvm) e [Yarn](https://yarnpkg.com) instalados.

## Bibliotecas e ferramentas utilizadas

- react
- typescript
- eslint + prettier (padronização de código)
- react-router-dom (roteamento de páginas)
- styled-components (estilização de componentes)
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

#### Aula 04

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

### Sessão 02

#### Aula 01

```
yarn add react-router-dom
yarn add @types/react-router-dom -D
```

#### Aula 02

```
yarn add styled-components
yarn add @types/styled-components -D
```

#### Aula 03

```
yarn add polished
yarn add react-icons
```

#### Aula 04

```
yarn add axios
```
