import { LightningElement } from 'lwc';

export default class LightChild extends LightningElement {
    static renderMode = "light"; // the default is 'shadow'

    connectedCallback() {
        const content = this.querySelector('.main-container');
        console.log('content');
        console.log(content);
    }

    testPdf() {
        debugger;
        // const content = this.querySelector('.main-container');
        console.log('content');
        // console.log(this.template.querySelector('.main-container'));
        // console.log(this.template.querySelector('div'));
        // console.log(this.template.querySelector('h1'));
        // console.log(this.template.querySelector('#mainid'));
        // console.log(this.template.querySelector('[ref=main]'));

        console.log(this.querySelector('.main-container'));
        console.log(this.querySelector('div'));
        console.log(this.querySelector('h1'));
        console.log(this.querySelector('#mainid'));
        console.log(this.querySelector('[ref=main]'));
    }

}