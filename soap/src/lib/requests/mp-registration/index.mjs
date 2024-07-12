import { baseArgs } from "../../../constants/index.mjs";

export class MPRegistration {
  constructor() {
    this.name = "mpRegistration";
    this.requestType = "mp.registration";
    this.partialArgs = { requestType: this.requestType, ...baseArgs }; // Order of request args matters
    this.requests = [
      {
        fn: "getRegistrationQueryUserArgs",
        lib: this.name,
        name: "mp-registration-query-user",
      },
    ];
  }

  /**
   *
   * RegistrationQuery_User
   * Requires Digital Signature to process the request.
   * Cannot finish this query.
   */
  getRegistrationQueryUserArgs = () => ({
    ...this.partialArgs,
    requestData:
      "PFJlZ2lzdHJhdGlvbkRhdGE+Cgk8UmVnaXN0cmF0aW9uU3VibWl0PgoJICAgIDxVc2VyIFBhcnRpY2lwYW50TmFtZT0iRjEwMCIgVXNlck5hbWU9IkZBS0VVU0VSIiBTdGFydERhdGU9IjIwMjAtMDEtMDEiIEVtYWlsPSJGQUtFQGdtYWlsLmNvbSI+CgkgICAgPC9Vc2VyPgoJPC9SZWdpc3RyYXRpb25TdWJtaXQ+CjwvUmVnaXN0cmF0aW9uRGF0YT4=",
  });
}
