# DISCLAIMER

### We have ended up rewriting the commit history due to a faulty commit, let's take this as a learning to double check our triple checks before making a PR, just to get a PR merged you don't have to rush, you have ample time to work on an issue once assigned, depending on the magnitude of the issue, anyways due to the same you have to take a fresh fork if you are a recurring contributor and if you are a new contributor, do keep this in mind and start contributing, you are good to go

# Project Name: Tiplink

### The following description is going to be updated once the project is complete till then look for all the research and development related progress here at this [Notion Page](https://axatbhardwaj.notion.site/Tiplink-47ebac1bab1b484d89fc5476c9860202?pvs=4)

## Table of Content

- [Description](https://github.com/code100x/tiplink#description)
- [Features](https://github.com/code100x/tiplink#features)
- [Technologies](https://github.com/code100x/tiplink#technologies)
- [Getting Started](https://github.com/code100x/tiplink#getting-started)
- [Contributing](https://github.com/code100x/tiplink#contributing)

## Description

Tiplink is a Web Based Solana wallet. Users can sign up using their Google credentials, upon which a Solana wallet is automatically created and linked to their account. The application securely stores the user's public key & private key, allowing seamless interaction with the Solana blockchain. Also it provides features like making transactions on Solana possible through Links.

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

Using Docker:

1. Clone the repository:
   ```bash
   git clone https://github.com/code100x/tiplink
   ```
2. Navigate to the project directory:
   ```bash
   cd tiplink
   ```
3. Create a .env file in the root folder of your project. Update it following the convention of the .env.example file.
   Here's an example:
   ```bash
    CLIENT_SECRET = '' #Get it from Google developers console
    CLIENT_ID = '' #Get it from Google developers console
    NEXTAUTH_SECRET = ''
    NEXTAUTH_URL = '' #Your frontend base URL
    #DATABASE_URL = 'postgresql://postgres:password@localhost:5432/mydatabase'
    DATABASE_URL = 'postgresql://postgres:password@postgres:5432/mydatabase'  #Use this for setting up docker
    NEXT_PUBLIC_SOLANA_RPC = '' #Your Custom Solana RPC URL
   ```
4. To generate AUTH_SECRET,

   Run this command in your terminal:

   ```bash
   openssl rand -base64 33
   ```

   or

   [Run in browser](https://www.cryptool.org/en/cto/openssl/)

5. Run the following command in your root to start the application:
   ```bash
   docker compose up
   ```
   Without Docker

### Without Docker

1. clone the repository:

   ```bash
   git clone https://github.com/code100x/tiplink.git
   ```

2. (optional) Start a PostgreSQL database using Docker:
   ```bash
   docker run -d \
       --name tiplink-db \
       -e POSTGRES_USER=myuser \
       -e POSTGRES_PASSWORD=mypassword \
       -e POSTGRES_DB=mydatabase \
       -p 5432:5432 \
       postgres
   ```
   based on this command the connection url will be
   ```
   DATABASE_URL=postgresql://myuser:mypassword@localhost:5432/mydatabase?schema=public
   ```
3. Create a .env file based on the .env.example file and configure the DATABASE_URL with your postgreSQL connection string.
4. Install dependencies:
   ```bash
   npm install
   ```
5. Run database migrations:
   ```bash
   npx prisma generate
   ```
6. Seed the database:
   ```bash
   npm run db:push
   ```
7. Start the development server:
   ```bash
   npm run dev
   ```

## Contributing

Contributions are welcome! If you'd like to contribute to the Tiplink project, please fork the repository and submit a pull request.

- `github/pull_request_template.md`: Template for pull requests.
- `github/issue_template.md`: Template for issues.

## Resource Reference Section for various pieces of the project

### For reading up on AWS KMS:

- [AWS KMS Docs](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/js-examples.html)
- [Data Encryption on AWS](https://enlear.academy/data-encryption-on-aws-8d6be6033351)
- [AWS Encryption SDK Guide](https://enlear.academy/aws-encryption-sdk-d38bfae40e9f)

### For reading up on GCP KMS:

- [GCP KMS Docs](https://cloud.google.com/nodejs/docs/reference/kms/latest)
- [Video Guide for GCP on Google Cloud Tech](https://www.youtube.com/watch?v=WKZC93y-aWI)

### Note

Please take an updated pull from the dev branch, and request branches for further features or services we need to add, and make pull requests to the relevant branches, not the main branch itself

- **main** - Stable branch
- **dev** - Branch for all the developer changes (Where your code will reside before moving to production)
- **dev-backend**- Branch for all developer changes in the backend
- **dev-backend/\*** - Branch for changes in specific features within the backend
- **dev-frontend** - Branch for all developer changes in the frontend
- **dev-frontend/\*** - Branch for changes in specific features within the frontend

## License

Tiplink is licensed under the [MIT License](https://opensource.org/licenses/MIT).
