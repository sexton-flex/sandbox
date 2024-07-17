import { getMinifiedXML } from "../../../../utils/xml.mjs";

const action = "ms-bup-submit";
const path = `${process.cwd()}/src/lib/requests/mp-market/templates/${action}/${action}.xml`;
export const msBupSubmitRequestData = getMinifiedXML(path);
