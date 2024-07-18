import { AttachmentData } from "./AttachmentData";

/** ResponseAttInfo */
export interface ResponseAttInfo {
    /** xsd:boolean */
    success?: boolean;
    /** xsd:boolean */
    warnings?: boolean;
    /** xsd:boolean */
    responseBinary?: boolean;
    /** xsd:boolean */
    responseCompressed?: boolean;
    /** ResponseDataType|xsd:string|XML,HTML,CSV,JSON,TXT */
    responseDataType?: string;
    /** xsd:string */
    responseFilename?: string;
    /** xsd:base64Binary */
    responseData?: string;
    /** attachmentData[] */
    attachmentData?: Array<AttachmentData>;
}
