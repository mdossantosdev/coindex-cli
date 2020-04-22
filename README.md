<h1 align="center">Coindex CLI</h1>

> Command line interface to check cryptocurrency prices.

## 📦 Built with

- Node.js
- Commander.js
- Inquirer.js
- Configstore
- Axios
- Colors.js

## 🖥️ Getting Started

Register an API key at https://nomics.com

1. Clone the repository

```sh
$ git clone https://github.com/mdossantosdev/coindex-cli.git
```

2. Go into coindex-cli

```sh
$ cd coindex-cli
```

3. Install dependencies

```sh
$ npm install
```

4. Create global link

```sh
$ npm link
```

5. Commands

```
# Help & Commands
coindex -h

# Version
coindex -V

# API Key Commands
coindex key set
coindex key show
coindex key remove

# Crypto Check Commands
coindex check price

# Check Specific Coins (default: BTN,ETH,LINK)
coindex check --coin=BTC,ETH

# Choose Currency (Default: USD)
coindex check --cur=EUR
```

## © License

This project is licensed under the [MIT License](LICENSE).
