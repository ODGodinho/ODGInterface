<h1 align="center">
    <a href="https://github.com/ODGodinho">
        <img
            src="https://raw.githubusercontent.com/ODGodinho/Stanley-TheTemplate/main/public/images/Stanley.jpg"
            alt="Stanley Imagem" width="500"
        />
    </a>
    <br />
    ODG Log Interface By Dragons Gamers
    <br />
</h1>

<h4 align="center">Log Package interface 🔊</h4>
<h5 align="center">Using Stanley</h5>

<p align="center">

[![Stargazers](https://img.shields.io/github/stars/ODGodinho/ODGLog?color=F430A4)](https://github.com/ODGodinho/ODGLog/stargazers)
[![Made by ODGodinho](https://img.shields.io/badge/made%20by-ODGodinho-%2304A361)](https://www.linkedin.com/in/victor-alves-odgodinho/)
[![Forks](https://img.shields.io/github/forks/ODGodinho/ODGLog?color=CD4D34)](https://github.com/ODGodinho/ODGLog/network/members)
![Repository size](https://img.shields.io/github/repo-size/ODGodinho/ODGLog)
[![GitHub last commit](https://img.shields.io/github/last-commit/ODGodinho/ODGLog)](https://github.com/ODGodinho/ODGLog/commits/master)
[![License](https://img.shields.io/badge/license-MIT-brightgreen)](https://opensource.org/licenses/MIT)

</p>

# Table of Contents

- [🎇 Benefits](#-benefits)
- [📗 Libraries](#-libraries)
- [📁 Dependencies](#-dependencies)
- [⏩ Get Started](#-get-started)
  - [🔘 Use Log Interface](#-use-log-interface)
- [📰 Usage](#-usage)
  - [🙈 Exception](#-exception)
  - [🔐 Implementation](#-implementation)
- [💻 Prepare to develop](#-prepare-to-develop)
  - [📍 Start Project](#-start-project)
  - [📨 Build and Run](#-build-and-run)
  - [🧪 Teste Code](#-teste-code)

---

## 🎇 Benefits

- 🚀 Logs Pattern interface
- 🚨 Similar PHP psr-3

## 📗 Libraries

- [Node.js 16](https://nodejs.org/?n=dragonsgamers)
- [Typescript](https://www.typescriptlang.org/?n=dragonsgamers)
- [Eslint](https://eslint.org/?n=dragonsgamers)
- [ODG-Linter-JS](https://github.com/ODGodinho/ODG-Linter-Js?n=dragonsgamers)
- [EditorConfig](https://editorconfig.org/?n=dragonsgamers)
- [ReviewDog](https://github.com/reviewdog/action-eslint)

## 📁 Dependencies

- [Node.js](https://nodejs.org) 16 or later
- [Yarn](https://yarnpkg.com/) Optional/Recommended
- [ODG TsConfig](https://github.com/ODGodinho/tsconfig) Last Version

## ⏩ Get Started

---

### 🔘 Use Log Interface

Install in your project using this command

```powershell
yarn add @odg/log
```

### 📰 Usage

#### 📰 Exception

InvalidArgumentException dispatch if send invalid arguments

#### 🌎 Implementation

- LoggerAwareInterface Implements this if your class dependencies Logger
- LogLevel it is an enum with the types of logs
- LogLevelType is a list of log types
- LoggerInterface for create a logger class
- AbstractLogger Abstract class to logger implements only log function
- NullLogger Generic logger without action

## 💻 Prepare To Develop

Copy `.env.example` to `.env` and add the values according to your needs.

### 📍 Start Project

First install dependencies with the following command

```bash
yarn install
# or
npm install
```

## 📨 Build and Run

To build the project, you can use the following command

> if you change files, you need to run `yarn build` and `yarn start` again

```bash
yarn build && yarn start
# or
yarn dev
```

## 🧪 Teste Code

To Test execute this command

```bash
yarn test
# or
yarn test:watch
```
