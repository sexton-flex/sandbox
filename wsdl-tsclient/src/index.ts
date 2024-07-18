import "dotenv/config";
import soap from "soap";
import { createClientAsync } from "../generated/miwebservicejbms";

const wsdlPath = "./resources/wsdl/mi-web-service-jbms.wsdl";

const run = async () => {
  const client = await createClientAsync(wsdlPath);
  const pfxAuth = new soap.ClientSSLSecurityPFX(
    "./resources/certificate/EndUser.p12",
    process.env.PFX_PASSPHRASE
  );
  client.setSecurity(pfxAuth);

  // TODO: Encode
  const encodedRequestSignature = "";
  const encodedRequestData = "";
  const requestAttInfo = {
    requestType: "mp.market",
    adminRole: false,
    requestDataCompressed: false,
    requestDataType: "XML",
    sendRequestDataOnSuccess: false,
    sendResponseDataCompressed: false,
    requestSignature: encodedRequestSignature,
    requestData: encodedRequestData,
  };
  const [success, responseData] = await client.submitAttachmentAsync(
    requestAttInfo
  );
  const decodedResponseData = Buffer.from(responseData, "base64").toString(
    "utf-8"
  );

  console.log("Success:", success);
  console.log("Response Data:", decodedResponseData);
};

run().catch((error) => console.error(error));
