import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class UploadService {
	httpClient: HttpClient;
    
	constructor( httpClient: HttpClient ) {	
        this.httpClient = httpClient; 
    }

	public async uploadFile( file: File ) : Promise<any> {
		let result = await this.httpClient
			.post<any>("./api/upload.cfm",file,
				{
					headers: {
						"Content-Type": file.type
					},
					params: {
						clientFilename: file.name,
						mimeType: file.type
					}
				}
			).toPromise();

		return({
			name: file.name,
			type: file.type,
			size: file.size,
			url: result.url
		});
	}
}