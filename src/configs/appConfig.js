import { API_ASSETS, API_URL } from "./env";

const activeConfig = "dev";

const constants = {
  dev: {
    url: {
      api: API_URL,
      assets: API_ASSETS
    }
  },

  prod: {
    url: {
      api: API_URL,
      assets: API_ASSETS
    }
  }
};

const appConfig = constants[activeConfig];

export default appConfig;
