import { baseArgs } from "../../../constants/index.mjs";
import { getSignedRequestData } from "../../utils/signature.mjs";
import { mqAwardResultsQueryRequestData } from "./templates/mq-award-results-query/mq-award-results-query.mjs";
import { mqOfferQueryRequestData } from "./templates/mq-offer-query/mq-offer-query.mjs";
import { msOfferDataEncodedRequestData } from "./templates/ms-offer-data/ms-offer-data.mjs";

export class MPMarket {
  constructor() {
    this.name = "mpMarket";
    this.requestType = "mp.market";
    this.partialArgs = { requestType: this.requestType, ...baseArgs }; // Order of request args matters
    this.requests = [
      { fn: "getMsOfferDataArgs", lib: this.name, name: "ms-offer-data" },
      {
        fn: "getMqAwardResultsQueryArgs",
        lib: this.name,
        name: "mq-award-results-query",
      },
      { fn: "getMqOfferQueryArgs", lib: this.name, name: "mq-offer-query" },
      { fn: "getMsBupSubmitArgs", lib: this.name, name: "ms-bup-submit" },
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
    requestSignature: getSignedRequestData(msOfferDataEncodedRequestData),
    requestData: msOfferDataEncodedRequestData,
  });

  /**
   * MarketQuery_AwardResultsQuery
   * Does not require requestSignature
   * Successful
   */
  getMqAwardResultsQueryArgs = () => ({
    ...this.partialArgs,
    requestData: mqAwardResultsQueryRequestData,
  });

  /**
   * MarketQuery_OfferQuery
   */
  getMqOfferQueryArgs = () => ({
    ...this.partialArgs,
    // requestSignature: getSignedRequestData(msOfferDataEncodedRequestData),
    requestData: mqOfferQueryRequestData,
  });

  /**
   * MarketSubmit_BupSubmit
   */
  getMsBupSubmitArgs = () => ({
    ...this.partialArgs,
    requestData: msBupSubmitRequestData,
  });
}
