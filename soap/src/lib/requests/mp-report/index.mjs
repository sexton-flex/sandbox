import { baseArgs } from "../../../constants/index.mjs";

export class MPReport {
  constructor() {
    this.name = "mpReport";
    this.requestType = "mp.report";
    this.partialArgs = { requestType: this.requestType, ...baseArgs }; // Order of request args matters
    this.requests = [
      {
        fn: "getReportListArgs",
        lib: this.name,
        name: "mp-report-report-list",
      },
    ];
  }

  // ReportListRequest
  getReportListArgs = () => ({
    ...this.partialArgs,
    requestData:
      "PE1hcmtldFJlcG9ydCBQYXJ0aWNpcGFudE5hbWU9IkYxMDAiIEFwcGxpY2F0aW9uVHlwZT0iTUFSS0VUX1JFUE9SVCI+Cgk8UmVwb3J0TGlzdFJlcXVlc3QgUmVwb3J0VHlwZT0iUkVHSVNUUkFUSU9OIiBSZXBvcnRTdWJUeXBlPSJSRVNPVVJDRSIgUGVyaW9kaWNpdHk9Ik9OX0RFTUFORCIgRGF0ZT0iMjAyNC0wNy0xMSI+Cgk8L1JlcG9ydExpc3RSZXF1ZXN0Pgo8L01hcmtldFJlcG9ydD4=",
  });
}
