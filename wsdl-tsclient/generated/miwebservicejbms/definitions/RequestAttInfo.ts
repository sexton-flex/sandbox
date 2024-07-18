import { AttachmentData } from "./AttachmentData";

/** RequestAttInfo */
export interface RequestAttInfo {
    /** RequestType|xsd:string|mp.info,mp.market,mp.registration,mp.report */
    requestType?: string;
    /** xsd:boolean */
    adminRole?: boolean;
    /** xsd:boolean */
    requestDataCompressed?: boolean;
    /** RequestDataType|xsd:string|XML,JSON */
    requestDataType?: string;
    /** xsd:boolean */
    sendRequestDataOnSuccess?: boolean;
    /** xsd:boolean */
    sendResponseDataCompressed?: boolean;
    /** RequestSignature|xsd:string|minLength,maxLength */
    requestSignature?: string;
    /** xsd:base64Binary */
    requestData?: string;
    /** attachmentData[] */
    attachmentData?: Array<AttachmentData>;
}
