import "dotenv/config";
import soap from "soap";
import { CombinedRequests } from "./lib/requests/index.mjs";

// Resource paths
const urlPath = `${process.cwd()}/src/resources/wsdl/mi-web-service-jbms.wsdl`;

const clientOptions = {
  endpoint: process.env.ENDPOINT,
};

const getRequestArgs = (requestName) => {
  const combinedRequests = new CombinedRequests();
  const { fn, lib } = combinedRequests.requests.find(
    ({ name }) => name === requestName
  );
  const args = combinedRequests.getArgs(lib, fn);

  return args;
};

const submitAttachment = async (requestName) => {
  console.log("Creating client..\n");
  const client = await soap.createClientAsync(urlPath, clientOptions);

  const clientSSLSecurityPFX = new soap.ClientSSLSecurityPFX(
    `${process.cwd()}/src/resources/certificate/EndUser.p12`,
    process.env.PFX_PASSPHRASE
  );
  client.setSecurity(clientSSLSecurityPFX);

  console.log("Getting contract in JSON format..\n");
  const description = client.describe();
  console.log("Contract description:", JSON.stringify(description));

  // Get request args
  const requestArgs = getRequestArgs(requestName);

  // Make request
  console.log(
    `\nMaking ${requestName} request using submitAttachment WSDL action with args:`
  );
  console.log(requestArgs, "\n");
  const response = await client.submitAttachmentAsync(requestArgs);

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

const args = process.argv.slice(2);
const requestNameIndex = args.indexOf("--requestName");
const requestName = args[requestNameIndex + 1];
submitAttachment(requestName).catch((error) => console.error(error));
