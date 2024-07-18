import { RequestAttInfo } from "../definitions/RequestAttInfo";
import { ResponseAttInfo } from "../definitions/ResponseAttInfo";

export interface MiWebService {
    submitAttachment(requestAttInfo: RequestAttInfo, callback: (err: any, result: ResponseAttInfo, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
