import { getMinifiedXML } from "../../../../utils/xml.mjs";

const action = "ms-remaining-reserve-data";
const path = `${process.cwd()}/src/lib/requests/mp-market/templates/${action}/${action}.xml`;
export const msRemainingReserveDataRequestData = getMinifiedXML(path);
