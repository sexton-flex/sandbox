import { getMinifiedXML } from "../../../../utils/xml.mjs";

const action = "ms-offer-data";
const path = `${process.cwd()}/src/lib/requests/mp-market/templates/${action}/${action}.xml`;
export const msOfferDataEncodedRequestData = getMinifiedXML(path);
