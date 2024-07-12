import { MPReport } from "./mp-report/index.mjs";
import { MPMarket } from "./mp-market/index.mjs";

export class CombinedRequests {
  constructor() {
    this.mpMarket = new MPMarket();
    this.mpReport = new MPReport();
    this.requests = [...this.mpMarket.requests, ...this.mpReport.requests];
  }

  getArgs = (lib, fn) => this[lib][fn]();
}
