import { MPMarkets } from "./mp-market/index.mjs";

export class CombinedRequests {
  constructor() {
    this.mpMarkets = new MPMarkets();
    this.requests = [...this.mpMarkets.requests];
  }

  getArgs = (lib, fn) => this[lib][fn]();
}
