import { baseArgs } from "../../constants/index.mjs";

export class MPMarket {
  constructor() {
    this.name = "mpMarket";
    this.requestType = "mp.market";
    this.partialArgs = { requestType: this.requestType, ...baseArgs }; // Order of request args matters
    this.requests = [
      { fn: "getMsOfferDataArgs", lib: this.name, name: "ms-offer-data" },
    ];
  }

  getMsOfferDataArgs = () => ({
    ...this.partialArgs,
    requestData:
      "PE1hcmtldERhdGE+PE1hcmtldFN1Ym1pdCBEYXRlPSIyMDI0LTA3LTExIiBNYXJrZXRUeXBlPSJEQU0iIE51bU9mRGF5cz0iMSIgUGFydGljaXBhbnROYW1lPSJGMTAwIiBVc2VyTmFtZT0iRkFLRVVTRVIiPjxPZmZlckRhdGEgRGlyZWN0aW9uPSIxIiBFbmRUaW1lPSIyMDI0LTAzLTE1VDIxOjAwOjAwIiBSZXNvdXJjZU5hbWU9IkZBS0VfUkVTTyIgU3RhcnRUaW1lPSIyMDI0LTAzLTE1VDEyOjAwOjAwIj48T2ZmZXJTdGFjayBNaW5pbXVtUXVhbnRpdHlJbkt3PSIxMDAiIE9mZmVyVW5pdFByaWNlPSIxMDAiIFN0YWNrTnVtYmVyPSIxIj48L09mZmVyU3RhY2s+PC9PZmZlckRhdGE+PC9NYXJrZXRTdWJtaXQ+PC9NYXJrZXREYXRhPg==",
  });
}
