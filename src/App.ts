import express from 'express';
import cors from "cors";
import Routes from './Routes';
import knex from 'knex';

interface KnexConfig {
  client: string,
  connection: object,
  migrations: object
};

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.midlewares();
    this.express.use(Routes);
  }


  private midlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

}

export default new App().express;
