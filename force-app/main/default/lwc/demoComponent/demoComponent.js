import { LightningElement, wire } from 'lwc';
import Demo from '@salesforce/apex/Demo.Demo';

export default class DemoComponent extends LightningElement {
  @wire(Demo, {})
  Accounts;

  constructor() {
    super();
    console.log('hello from the constructor');
  }

  connectedCallback() {
    console.log('hello from the connectedCallback');
  }
}
