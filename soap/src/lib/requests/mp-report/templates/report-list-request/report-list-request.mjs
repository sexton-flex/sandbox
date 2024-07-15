import { getMinifiedXML } from "../../../../utils/xml.mjs";

const action = "report-list-request";
const path = `${process.cwd()}/src/lib/requests/mp-report/templates/${action}/${action}.xml`;
export const reportListRequestData = getMinifiedXML(path);
