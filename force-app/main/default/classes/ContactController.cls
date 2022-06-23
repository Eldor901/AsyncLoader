/**
 * @description       : 
 * @author            : https://github.com/Eldor901
 * @group             : 
 * @last modified on  : 06-23-2022
 * @last modified by  : https://github.com/Eldor901
**/
public with sharing class ContactController {
    
    @AuraEnabled
    public static List<Contact> getContactList() {
        return [SELECT Id, Name, Title, Phone, Email FROM Contact LIMIT 10];
    }
}
