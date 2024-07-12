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
   * Requires Email attribute in User xml tag.
   * Cannot finish this query.
   */
  getRegistrationQueryUserArgs = () => ({
    ...this.partialArgs,
    requestData: "",
  });
}
