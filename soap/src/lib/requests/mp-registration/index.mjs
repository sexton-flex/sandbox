import { baseArgs } from "../../../constants/index.mjs";
import { getSignedRequestData } from "../../utils/signature.mjs";
import { rqUserRequestData } from "./templates/rq-user/rq-user.mjs";

export class MPRegistration {
  constructor() {
    this.name = "mpRegistration";
    this.requestType = "mp.registration";
    this.partialArgs = { requestType: this.requestType, ...baseArgs }; // Order of request args matters
    this.requests = [
      {
        fn: "getRegistrationQueryUserArgs",
        lib: this.name,
        name: "rq-user",
      },
    ];
  }

  /**
   *
   * RegistrationQuery_User
   * Digital signature verification failed.
   * TODO: Update xml attributes and order alphabetically.
   */
  getRegistrationQueryUserArgs = () => ({
    ...this.partialArgs,
    requestSignature: getSignedRequestData(rqUserRequestData),
    requestData: rqUserRequestData,
  });
}
