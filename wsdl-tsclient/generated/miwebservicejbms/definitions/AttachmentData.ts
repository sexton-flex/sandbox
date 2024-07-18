
/**
 * attachmentData
 * @targetNSAlias `types`
 * @targetNamespace `urn:abb.com:project/mms/types`
 */
export interface AttachmentData {
    /** xsd:base64Binary */
    binaryData?: string;
    /** AttachmentSignature|xsd:string|minLength,maxLength */
    signature?: string;
    /** xsd:string */
    name?: string;
}
