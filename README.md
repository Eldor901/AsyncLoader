# Loadable component.

Main task of loadable component is encapsulation of loading, data and error states and show loaded data in styled version

example 


#####  logic in js file

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
| props  | values |  description |
| ------------- |:-------------:| :-------------:|
| show-loader   |true \| false   | whether to show-loader or not
| promise | Promise     | Pass api request promise  |
| onload      |  Callback     | Returns data when promise fullfiled |


#####  c-loadable component usage in html file
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
