# Project Name: Tiplink

## Table of Content

- [Description](https://github.com/mehetab-01/tiplink-project#description)
- [Features](https://github.com/mehetab-01/tiplink-project#features)
- [Technologies](https://github.com/mehetab-01/tiplink-project#technologies)
- [Getting Started](https://github.com/mehetab-01/tiplink-project#getting-started)
- [Contributing](https://github.com/mehetab-01/tiplink-project#contributing)


## Description

Tiplink is a decentralized application (dApp) designed to create and manage Solana crypto wallets. Users can sign up using their Google credentials, upon which a crypto wallet is automatically created and linked to their account. The application securely stores the user's public key, allowing seamless interaction with the Solana blockchain.

## Features
- **User Registration with Google OAuth:** Secure and easy registration using Google credentials.

- **Crypto Wallet Generation:** Automatic creation of a Solana wallet for each registered user.

- **Public Key Management:** Secure storage and retrieval of user public keys.

## Technologies

- **Web-app:** Next.js, TypeScript
- **Database:** PostgreSQL, Prisma ORM
- **Authentication:** Google OAuth via next-auth
- **Blockchain:** Solana

## Getting Started

To get started with the Tiplink, follow these steps:

1. **Clone the repository:** `git clone https://github.com/code100x/tiplink`
2. **Install dependencies:** `npm install`
3. **Run this command**:     `cp .env.sample .env` and change the DATABASE_URL in the .env file with your postgres url
4. **Migrate the prisma and Generate the clients:** Run this command `prisma migrate dev && prisma generate`
6. **Start the application:** `npm run dev`

## Contributing

Contributions are welcome! If you'd like to contribute to the Tiplink project, please fork the repository and submit a pull request.

- `github/pull_request_template.md`: Template for pull requests.
- `github/issue_template.md`: Template for issues.


## License

The Tiplink is licensed under the [MIT License](https://opensource.org/licenses/MIT).