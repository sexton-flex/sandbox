import { baseArgs } from "../../../constants/index.mjs";
import { reportListRequestData } from "./templates/report-list-request/report-list-request.mjs";

export class MPReport {
  constructor() {
    this.name = "mpReport";
    this.requestType = "mp.report";
    this.partialArgs = { requestType: this.requestType, ...baseArgs }; // Order of request args matters
    this.requests = [
      {
        fn: "getReportListArgs",
        lib: this.name,
        name: "report-list-request",
      },
    ];
  }

  /**
   * ReportListRequest
   * Response is successful, however contains error saying we are using the wrong certificate.
   * TODO: Update xml attributes and order alphabetically.
   */
  getReportListArgs = () => ({
    ...this.partialArgs,
    requestData: reportListRequestData,
  });
}
