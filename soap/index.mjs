import "dotenv/config";
import soap from "soap";

// Resource paths
const urlPath = `${process.cwd()}/resources/wsdl/mi-web-service-jbms.wsdl`;
const privateKeyPath = `${process.cwd()}/resources/certificate/private.key`;
const certificatePath = `${process.cwd()}/resources/certificate/certificate.cer`;

const requestArgs = {
  requestType: "mp.market",
  adminRole: false,
  requestDataCompressed: false,
  requestDataType: "XML",
  sendRequestDataOnSuccess: false,
  sendResponseDataCompressed: false,
  requestData:
    "PE1hcmtldERhdGE+PE1hcmtldFN1Ym1pdCBEYXRlPSIyMDI0LTA3LTExIiBNYXJrZXRUeXBlPSJEQU0iIE51bU9mRGF5cz0iMSIgUGFydGljaXBhbnROYW1lPSJGMTAwIiBVc2VyTmFtZT0iRkFLRVVTRVIiPjxPZmZlckRhdGEgRGlyZWN0aW9uPSIxIiBFbmRUaW1lPSIyMDI0LTAzLTE1VDIxOjAwOjAwIiBSZXNvdXJjZU5hbWU9IkZBS0VfUkVTTyIgU3RhcnRUaW1lPSIyMDI0LTAzLTE1VDEyOjAwOjAwIj48T2ZmZXJTdGFjayBNaW5pbXVtUXVhbnRpdHlJbkt3PSIxMDAiIE9mZmVyVW5pdFByaWNlPSIxMDAiIFN0YWNrTnVtYmVyPSIxIj48L09mZmVyU3RhY2s+PC9PZmZlckRhdGE+PC9NYXJrZXRTdWJtaXQ+PC9NYXJrZXREYXRhPg==",
};

const clientOptions = {
  endpoint: process.env.ENDPOINT,
};

const submitAttachment = async () => {
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

  // Make request
  console.log("\nMaking request using submitAttachment action..\n");
  const response = await client.submitAttachmentAsync(requestArgs);

  // Log out response
  console.log("submitAttachment response:", response);
  const [{ success, responseData }] = response;

  console.log("\nDestructured response:");
  console.log("\tsuccess:", success);
  // Convert responseData from base64 to string
  console.log(
    "\tresponseData:",
    Buffer.from(responseData, "base64").toString("utf-8")
  );
};

submitAttachment().catch((error) => console.error(error));
