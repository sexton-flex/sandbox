import crypto from "crypto";
import fs from "fs";

const privateKey = fs.readFileSync(
  `${process.cwd()}/src/resources/certificate/private.key`
);
const publicKey = fs.readFileSync(
  `${process.cwd()}/src/resources/certificate/certificate.cer`
);
const encryptionMethod = "sha256WithRSAEncryption";

export const getSignedRequestData = (data, output = "base64") => {
  const signature = crypto.sign(encryptionMethod, data, {
    key: privateKey,
  });

  // Verify it correctly
  const isVerified = crypto.verify(
    encryptionMethod,
    Buffer.from(data),
    {
      key: publicKey,
    },
    signature
  );

  console.log("Signature verified:", isVerified);

  return signature.toString(output);
};
