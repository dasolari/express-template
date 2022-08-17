import { config } from 'dotenv';

config();

export default {
  ENV_VAR_1: process.env.ENV_VAR_1,
  ENV_VAR_2: process.env.ENV_VAR_2,
};
