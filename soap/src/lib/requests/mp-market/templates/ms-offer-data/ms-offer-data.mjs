import fs from "fs";

const action = "ms-offer-data";
const msOfferDataXML = fs.readFileSync(
  `${process.cwd()}/src/lib/requests/mp-market/templates/${action}/${action}.xml`,
  "utf8"
);

export const msOfferDataEncodedRequestData =
  Buffer.from(msOfferDataXML).toString("base64");
