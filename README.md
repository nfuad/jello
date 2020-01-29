# Jello

Jello is a simple task management web application. The frontend is built with React/Redux, Next.js, Apollo Client, etc. The backend is built with GraphQL, and MongoDB database. [Auth0](https://auth0.com) has been used for authentication and user login more. Deployed with [Zeit's Now](https://zeit.co). View the Live site here: <a href="https://jello.now.sh">https://jello.now.sh</a>. The graphQL API is essentially built with serverless functions.

_Here's a glimpse of the live demo:_
<a href="https://jello.now.sh"><img src="./public/img/jello.png" /></a>

### Web App Features

1. Sign in/ Sign up functionality, i.e. User creation and authentication
2. Robust semi-user-friendly error handling + warning and error messages
3. Mostly Responsive
4. Minimal Form Validation
5. Creating, Updating, Deleting Boards
6. Task management features

### Development (Running Locally)

Please follow these steps:

1. Clone this repo from the terminal: `git clone https://github.com/nfuad/jello.git`
2. From the terminal, move into the cloned repo's backend dir: `cd jello`
3. Once in the jello dir, install the dependencies with: `yarn`
4. To start in development mode, use: `yarn dev`

##### Deploying Backend (Zeit's Now)

Please make sure that the Now cli is installed properly. Then follow these steps:

1. Create a `now.json` file in the root of the project
2. Run `yarn deploy`

### Something Missing?

If you found any bugs/issues, then feel free to [let me know](https://github.com/nfuad/jello/issues) or contribute something new!

### License

[MIT](./LICENSE)
