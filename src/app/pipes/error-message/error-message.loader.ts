import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

/**
 * Class abstract that defines the type of the service to use
 */
export abstract class ErrorMessageLoader {
    abstract getErrors(lang: string): any;
}

/**
 * Class that gets the error json file 
 */

export class ErrorMessageHttpLoader implements ErrorMessageLoader {

    /**
     * @param http http service
     * @param prefix prefix of the path
     * @param suffix suffix of the path
     */

    constructor(
        private http: HttpClient,
        public prefix: string,
        public suffix: string
    ) {}
    
    /**
     * It gets the error json file passing it the language as param
     * @param lang language to get
     */

    public getErrors(lang: string): Observable<any> {
        return this.http.get<any>(this.prefix + lang + this.suffix);
    }
}