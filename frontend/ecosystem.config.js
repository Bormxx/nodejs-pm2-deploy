const dotenv = require("dotenv");
dotenv.config({path: './.env.deploy'});

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REPOSITORY,
  DEPLOY_REF,
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPOSITORY,
      path: DEPLOY_PATH,
      "post-deploy": "cd frontend && npm i && npm run build",
    },
  },
};
