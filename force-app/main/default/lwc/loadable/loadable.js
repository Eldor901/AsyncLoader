/**
 * @description       : 
 * @author            : https://github.com/Eldor901
 * @group             : 
 * @last modified on  : 06-23-2022
 * @last modified by  : https://github.com/Eldor901
**/
import { LightningElement, api  } from 'lwc';

export default class Lodable extends LightningElement {

    @api promise
    @api showLoader = false
    loading = false;
    error = false;
    errorMessage = "";
    value; 

    get isLoading() {
        return this.loading && this.showLoader
    }


    async connectedCallback() {
        try {
            this.loading = true;
            this.value = await this.promise;
            const selectedEvent = new CustomEvent('load', { detail: this.value });
            this.dispatchEvent(selectedEvent);
            this.loading = false;
            this.error = false;
        }catch(e) {
            this.loading = false;
            this.error = true;
        }
    }

}