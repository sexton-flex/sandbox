import fs from "fs";

const msOfferDataXML = fs.readFileSync(
  `${process.cwd()}/src/lib/requests/mp-market/templates/ms-offer-data/ms-offer-data.xml`,
  "utf8"
);

export const msOfferDataEncodedRequestData =
  Buffer.from(msOfferDataXML).toString("base64");
