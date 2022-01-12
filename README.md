# Express + Prisma Template 🐙
An Express template using Prisma with Postgresql

## Requirements
- [Node 16](https://nodejs.org/en)
- [Postgresql](https://www.postgresql.org)

## Instalation Guide
1.  Create two enviroment files in the root of the project:
    - `.env`
    - `.env.test`
    It must contain the following variable:
    ```bash
    DATABASE_URL=postgresql://<USERNAME>:<PASSWORD>@<HOST>:<PORT>/<DATABASE_NAME>?schema=public
    ```
    An example would be:
    ```bash
    DATABASE_URL=postgresql://postgres:postgres@localhost:5432/template_dev?schema=public
    ```
    Keep in mind that the test database connection url (in `.env.test`) must have a different database name.
2. Install the project dependencies:  
    ```bash
    yarn install
    ```
3. Add a model to the schema  
    ```bash
    Pending documentation...
    ```
  
