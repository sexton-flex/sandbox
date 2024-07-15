import { getMinifiedXML } from "../../../../utils/xml.mjs";

const action = "mq-offer-query";
const path = `${process.cwd()}/src/lib/requests/mp-market/templates/${action}/${action}.xml`;
export const mqOfferQueryRequestData = getMinifiedXML(path);
