import "dotenv/config";
import soap from "soap";
import { CombinedRequests } from "./requests/index.mjs";

// Resource paths
const urlPath = `${process.cwd()}/resources/wsdl/mi-web-service-jbms.wsdl`;
const privateKeyPath = `${process.cwd()}/resources/certificate/private.key`;
const certificatePath = `${process.cwd()}/resources/certificate/certificate.cer`;

const clientOptions = {
  endpoint: process.env.ENDPOINT,
};

const getArgs = (requestName) => {
  const combinedRequests = new CombinedRequests();
  const { fn, lib } = combinedRequests.requests.find(
    ({ name }) => name === requestName
  );
  const args = combinedRequests.getArgs(lib, fn);

  return args;
};

const submitAttachment = async (requestName = "ms-offer-data") => {
  console.log("Creating client..\n");
  const client = await soap.createClientAsync(urlPath, clientOptions);

  const clientSSLSecurity = new soap.ClientSSLSecurity(
    privateKeyPath,
    certificatePath
  );
  client.setSecurity(clientSSLSecurity);

  console.log("Getting contract in JSON format..\n");
  const description = client.describe();
  console.log("Contract description:", JSON.stringify(description));

  // Get request args
  const args = getArgs(requestName);
  console.log("Request args:", args);

  // Make request
  console.log(
    `\nMaking ${requestName} request using submitAttachment WSDL action with args:`
  );
  console.log(args, "\n");
  const response = await client.submitAttachmentAsync(args);

  // Log out response
  console.log("submitAttachment response:", response);
  const [{ success, responseData }] = response;

  console.log("\nDestructured response:");
  console.log("\tsuccess:", success);
  console.log(
    "\tresponseData:",
    Buffer.from(responseData, "base64").toString("utf-8")
  );
};

submitAttachment().catch((error) => console.error(error));
