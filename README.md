# Projeto de Automação de Testes de API Rest: banco-api-tests

---

## Objetivo do Projeto

Este projeto tem como objetivo principal fornecer uma suíte de testes automatizados para a API Rest do projeto [banco-api](https://github.com/matheusalexan/banco-api). Ele visa contribuindo com a qualidade e a funcionalidade da API, validando seus endpoints e comportamentos esperados através de testes de integração e end-to-end.

---

## Stack Utilizada

O projeto é desenvolvido em **Javascript** e utiliza as seguintes bibliotecas para a estruturação e execução dos testes:

* **Mocha:** Um framework de testes flexível e rico em recursos para JavaScript.
* **Supertest:** Uma biblioteca que facilita o teste de APIs HTTP, abstraindo a necessidade de iniciar um servidor HTTP diretamente.
* **Chai:** Uma biblioteca de asserções que permite escrever testes expressivos e legíveis.

*Observação: A lista completa de dependências, conforme especificado no `package.json`, não pôde ser recuperada diretamente do repositório para inclusão neste README.*

---

## Estrutura de Diretórios

A estrutura de diretórios do projeto é organizada da seguinte forma:

.
├── fixtures/
├── helpers/
├── test/
├── .gitignore
├── package-lock.json
└── package.json


* `fixtures/`: Este diretório pode conter dados de teste estáticos ou mocks utilizados nos testes.
* `helpers/`: Pode conter funções utilitárias ou módulos auxiliares que são reutilizados em vários testes.
* `test/`: Este é o diretório principal onde os arquivos de teste estão localizados.
* `.gitignore`: Arquivo que especifica arquivos e diretórios a serem ignorados pelo Git.
* `package-lock.json`: Arquivo gerado automaticamente que registra as versões exatas das dependências.
* `package.json`: Arquivo de manifesto do projeto, que lista dependências e scripts de execução.

---

## Configuração do Ambiente (.env)

Para a execução dos testes, é necessário criar um arquivo `.env` na raiz do projeto. Este arquivo deve conter a variável de ambiente `BASE_URL`, que define o endereço base da API a ser testada.

Exemplo de `.env`:

BASE_URL=http://localhost:3000


Certifique-se de substituir `http://localhost:3000` pela URL correta da sua instância da API `banco-api`.

---

## Comandos para Execução e Relatórios

Os comandos de execução dos testes geralmente são definidos no arquivo `package.json` na seção `scripts`. Embora os scripts exatos não tenham sido recuperados, os comandos típicos para projetos Mocha e Supertest seriam:

1.  **Instalação das Dependências:**
    ```bash
    npm install
    ```

2.  **Execução dos Testes:**
    ```bash
    npm test
    ```
    Ou, se houver um script específico no `package.json` como `test:api`:
    ```bash
    npm run test:api
    ```

### Geração de Relatórios (Mochawesome)

Este projeto utiliza **Mochawesome** para gerar relatórios de testes em formato HTML. Após a execução dos testes, um relatório detalhado será gerado no diretório `mochawesome/` (ou outro diretório configurado).

Para visualizar o relatório, basta abrir o arquivo HTML gerado (por exemplo, `mochawesome-report.html`) em seu navegador web.

---

## Documentação das Dependências

Abaixo estão os links para a documentação oficial das principais bibliotecas utilizadas neste projeto:

* [Mocha Documentation](https://mochajs.org/)
* [Supertest Documentation](https://github.com/visionmedia/supertest)
* [Chai Documentation](https://www.chaijs.com/)
