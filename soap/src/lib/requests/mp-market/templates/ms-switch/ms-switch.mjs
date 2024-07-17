import { getMinifiedXML } from "../../../../utils/xml.mjs";

const action = "ms-switch";
const path = `${process.cwd()}/src/lib/requests/mp-market/templates/${action}/${action}.xml`;
export const msSwitchRequestData = getMinifiedXML(path);
