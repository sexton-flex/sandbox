import { getMinifiedXML } from "../../../../utils/xml.mjs";

const action = "rq-user";
const path = `${process.cwd()}/src/lib/requests/mp-registration/templates/${action}/${action}.xml`;
export const rqUserRequestData = getMinifiedXML(path);
