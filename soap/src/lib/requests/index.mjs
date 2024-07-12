import { MPReport } from "./mp-report/index.mjs";
import { MPMarket } from "./mp-market/index.mjs";
import { MPRegistration } from "./mp-registration/index.mjs";

export class CombinedRequests {
  constructor() {
    this.mpMarket = new MPMarket();
    this.mpRegistration = new MPRegistration();
    this.mpReport = new MPReport();
    this.requests = [
      ...this.mpMarket.requests,
      ...this.mpRegistration.requests,
      ...this.mpReport.requests,
    ];
  }

  getArgs = (lib, fn) => this[lib][fn]();
}
