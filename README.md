# Projeto de Testes Automatizados - Cypress, K6 e Appium

Este projeto contém testes automatizados de **API**, **E2E** e **Mobile**, integrados com **CI/CD** via GitHub Actions.

---

## 📋 Pré-requisitos

Antes de começar, instale na sua máquina:

- [Node.js >= 18](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Java JDK 11+](https://adoptium.net/) (necessário para Appium)
- [Android Studio](https://developer.android.com/studio) (para testes mobile)
- Emulador Android configurado ou conta no [BrowserStack](https://www.browserstack.com/)
- [Git](https://git-scm.com/)

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/rafaellorenz/e2e-cypress.git
cd e2e-cypress
```

Instale as dependências:

```bash
npm install
```

Dependências principais:

```bash
npm install cypress @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor
npm install mochawesome mochawesome-merge mochawesome-report-generator
npm install k6
npm install @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/spec-reporter appium appium-uiautomator2-driver
```

---

## 📂 Estrutura do Projeto

```
e2e-cypress/
│-- cypress/            # Testes E2E e API
│-- k6/                 # Scripts de teste de carga
│-- appium/             # Testes mobile
│-- .github/workflows/  # Pipelines de CI/CD
│-- README.md
```

---

## ▶️ Executando os testes localmente

### Testes E2E (Cypress)
```bash
npx cypress open
```
ou
```bash
npx cypress run
```

### Testes de API (Cypress)
```bash
npx cypress run --spec "cypress/e2e/api/**/*.cy.js"
```

### Testes de carga (K6)
```bash
k6 run k6/tarefa1.js
```

### Testes Mobile (Appium + WebdriverIO)
```bash
npx wdio wdio.conf.js
```

---

## ☁️ Executando no CI/CD (GitHub Actions)

O repositório contém um pipeline configurado em `.github/workflows/ci.yml` que executa:

- Testes de API
- Testes E2E

---

## 📊 Relatórios

### Cypress (Mochawesome)
Após a execução dos testes, gere o relatório com:

```bash
npx mochawesome-merge cypress/reports/*.json > mochawesome.json
npx mochawesome-report-generator mochawesome.json
```

O relatório estará disponível na pasta `mochawesome-report`.

---

## 🛠 Manutenção

- Atualize as dependências com:
```bash
npm update
```
- Limpe cache do Cypress:
```bash
npx cypress cache clear
```

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.
