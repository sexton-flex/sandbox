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

### Extract Public/Private Keys from P12 Certificate

A `.p12 (PKCS #12)` is a file format that stores many cryptographic objects as a single file. A caveat of the `.p12` file, is that it is considered a legacy file. We must set these flags when interacting with the following:

- OpenSSL: `--legacy`
- NodeJS: `--openssl-legacy-provider` as exported `NODE_OPTIONS`.

We want to use the provided certificate's decrypted private key to sign the request data (`requestSignature`) and the public key to verify it is signed correctly.

We can do this by extracting the **private** and **public** keys from the `.p12` file.

Extract commands:

#### Public Key

```bash
openssl pkcs12 --legacy -in EndUser.p12 -clcerts -nokeys -out certificate.cer
```

#### Private Key (Encrypted)

```bash
openssl pkcs12 --legacy -in EndUser.p12 -nocerts -out privatekey-encrypted.key
```

#### Private Key (Decrypted)

```bash
openssl rsa -in privatekey-encrypted.key -out private.key
```

#### Sources

Followed guide here: https://www.cisco.com/c/en/us/support/docs/security/web-security-appliance/118339-technote-wsa-00.html

Please place these files in the correct directory so the paths match in the script.

### Set Environment Variables

Create `.env` file at the root of the project. The `env-template` has been provided.

Currently it is just the endpoint and pfx passphrase passphrase, which will be our verification environment URL and certificate passphrase, provided to us in the `user.txt` file in Box.

### Run the script

Run the following commands to run the script:

```bash
# Install dependencies
npm install

# Run script
npm start --requestName "mq-award-results-query"
```

## Contributions

Add your own MMS request action by following these instructions:

### Identify request type

Request types fall under the following:

- `mp.info`
- `mp.market`
- `mp.registration`

This will determine where we can our template. These folders can be found under:
`src/lib/requests/`

### Add folder structure and .xml/.mjs files

Define your request name. Example: `mq-award-results-query`.
Add the following structure:

- Folder within templates using the defined request name.
- Within that folder, add a `.xml` and `.mjs` file named using the defined request name.
- Define XML for your request in the `.xml` file
- Copy an existing template `.mjs` file and update the relevant details.

### Update Request Type Class

We map the request action name to a function that gets the relevant arguments which will be used in the request to MMS.

We will still use the `mq-award-results-query` example which is a `mp.market` request type.

1. Navigate to `src/lib/requests/mp-market/index.mjs`.
2. Add request object mapping to the class's requests list:

   `{ fn: "<FUNCTION_NAME>", lib: this.name, name: "<YOUR_DEFINED_REQUEST_NAME>" }`

3. Add function following the same pattern as the other functions.
   - Depending on your request, a digital signature might be required.

### Running the script

`npm start --requestName "<YOUR_DEFINED_REQUEST_NAME>"`

## Tools

- [NodeSoap Docs](https://github.com/vpulim/node-soap)
- Base64 [Encode](https://www.base64encode.org/)/[Decode](https://www.base64decode.org/)
- [XML Editor](https://www.tutorialspoint.com/online_xml_editor.htm)
