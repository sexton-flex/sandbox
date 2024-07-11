import { MPMarket } from "./mp-market/index.mjs";

export class CombinedRequests {
  constructor() {
    this.mpMarket = new MPMarket();
    this.requests = [...this.mpMarket.requests];
  }

  getArgs = (lib, fn) => this[lib][fn]();
}
