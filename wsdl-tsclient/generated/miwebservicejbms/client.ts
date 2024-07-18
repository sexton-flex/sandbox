import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { RequestAttInfo } from "./definitions/RequestAttInfo";
import { ResponseAttInfo } from "./definitions/ResponseAttInfo";
import { MiWebService } from "./services/MiWebService";

export interface MiWebServiceJbmsClient extends SoapClient {
    MiWebService: MiWebService;
    submitAttachmentAsync(requestAttInfo: RequestAttInfo, options?: ISoapExOptions): Promise<[result: ResponseAttInfo, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create MiWebServiceJbmsClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<MiWebServiceJbmsClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
