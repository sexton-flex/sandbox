import { getMinifiedXML } from "../../../../utils/xml.mjs";

const action = "mq-award-results-query";
const path = `${process.cwd()}/src/lib/requests/mp-market/templates/${action}/${action}.xml`;
export const mqAwardResultsQueryRequestData = getMinifiedXML(path);
