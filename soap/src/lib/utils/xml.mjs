import fs from "fs";
import xmlFormat from "xml-formatter";

export const getMinifiedXML = (path) => {
  const xmlString = fs.readFileSync(path, "utf-8");
  const minifiedXML = xmlFormat.minify(xmlString, {
    collapseContent: true,
  });

  return Buffer.from(minifiedXML).toString("base64");
};
