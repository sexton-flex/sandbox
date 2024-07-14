# SOAP Web Services

## What is this for?

This soap sub-repo is to play around and learn SOAP with different implementations.

## Basics

[SOAP Web Services Basics](https://youtube.com/playlist?list=PLqq-6Pq4lTTZTYpk_1DOowOGWJMIH5T39&si=BBOVeDqlB79r9jp8) is a great YouTube playlist to get started with SOAP Web Services. It will explain:

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

### Set Environment Variables

Create `.env` file at the root of the project. The `env-template` has been provided.

Currently it is just the endpoint and pfx passphrase passphrase, which will be our verification environment URL and certificate passphrase, provided to us in the `user.txt` file in Box.

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
