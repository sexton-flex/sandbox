# SOAP Web Services

## What is this for?

This soap sub-repo is to play around and learn SOAP with different implementations.

## Basics

[SOAP Web Services Basics](https://www.youtube.com/watch?v=dQw4w9WgXcQ) is a great YouTube playlist to get started with SOAP Web Services. It will explain:

- Overview of what SOAP web services are.
- Common SOAP jargon.
- How to interact with SOAP.
- Writing a web service and implementation in Java.

Not all 20 videos are required, but I highly recommend the first 5.

## What is this repo focused on?

1. Sending a request and receiving a response in a NodeJS environment.
2. Creating a SOAP client.
3. Add PFX Certificate to the client options.
4. Describing the WSDL ontract using the `soap` package.
5. Logging the request and response in a readable format.

## How to run the script?

Before running the script, we have to do the following:

### Extract Public/Private Keys from P12 Certificate

A `.p12 (PKCS #12)` is a file format that stores many cryptographic objects as a single file. `node-soap` does have [PFX Security Class](https://github.com/vpulim/node-soap?tab=readme-ov-file#clientsslsecuritypfx) but I could not get it to work with the `.p12` file we are provided with. Another caveat of the `.p12` file, is that it is considered a legacy file when interacting with `openssl` (more on that later..).

We want to use the [SSL Security Class](https://github.com/vpulim/node-soap?tab=readme-ov-file#clientsslsecurity) by specifying the public and private key (we omit the `ca-cert` as we do not have it).

We can do this by extracting the private and public keys from the `.p12` file.

Please follow [this guide](https://www.cisco.com/c/en/us/support/docs/security/web-security-appliance/118339-technote-wsa-00.html). - Please ensure you add the `-legacy` flag after the `openssl pkcs12` portion of the command.

Please place these files in the correct directory so the paths match in the script.

### Set Environment Variables

Create `.env` file at the root of the project. The `env-template` has been provided.

Currently it is just the endpoint, which will be our verification environment URL, provided to us in the `user.txt` file in Box.

### Run the script

Run the following commands to run the script:

```bash
# Install dependencies
npm install

# Run script
npm start --requestName "ms-offer-data"
```

## Tools

- [NodeSoap Docs](https://github.com/vpulim/node-soap)
- Base64 [Encode](https://www.base64encode.org/)/[Decode](https://www.base64decode.org/)
- [XML Editor](https://www.tutorialspoint.com/online_xml_editor.htm)
- [Extracting Public/Private key from .p12 certificate](https://www.cisco.com/c/en/us/support/docs/security/web-security-appliance/118339-technote-wsa-00.html)
