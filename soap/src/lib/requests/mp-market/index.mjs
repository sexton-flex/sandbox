import { baseArgs } from "../../../constants/index.mjs";
import { msOfferDataEncodedRequestData } from "./templates/ms-offer-data/ms-offer-data.mjs";

export class MPMarket {
  constructor() {
    this.name = "mpMarket";
    this.requestType = "mp.market";
    this.partialArgs = { requestType: this.requestType, ...baseArgs }; // Order of request args matters
    this.requests = [
      { fn: "getMsOfferDataArgs", lib: this.name, name: "ms-offer-data" },
    ];
  }

  /**
   *
   * MarketSubmit_OfferData
   * Digital signature is mandatory for this type of submission
   * Cannot finish this query.
   */
  getMsOfferDataArgs = () => ({
    ...this.partialArgs,
    requestData: msOfferDataEncodedRequestData,
  });
}
