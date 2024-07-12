import fs from "fs";

const action = "mq-award-results-query";
const mqAwardResultsQueryXML = fs.readFileSync(
  `${process.cwd()}/src/lib/requests/mp-market/templates/${action}/${action}.xml`,
  "utf8"
);

export const mqAwardResultsQueryRequestData = Buffer.from(
  mqAwardResultsQueryXML
).toString("base64");
