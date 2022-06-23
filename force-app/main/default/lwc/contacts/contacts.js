/**
 * @description       : 
 * @author            : https://github.com/Eldor901
 * @group             : 
 * @last modified on  : 06-23-2022
 * @last modified by  : https://github.com/Eldor901
**/
import { LightningElement, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';


export default class Contacts extends LightningElement {
    contactPromise = getContactList();
    
    @track
    contacts = [];


    

    onLoad(event) {
        this.contacts = event.detail;

        console.log(this.contacts)
    }

}