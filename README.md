# Loadable component.

Main task of loadable component is encapsulation of loading, data and error states and show loaded data in styled version

example 


#####  Js file to handle api logic

```
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
```

#####  show loaded data
```
  <c-loadable promise={contactPromise} show-loader="true" onload={onLoad} >
        <div slot="onFulfilled">
            <template if:true={contacts}>
                <template for:each={contacts} for:item="contact">
                    <p key={contact.Id}>{contact.Name}</p>
                </template>
            </template>
        </div>
    </c-loadable>
```
