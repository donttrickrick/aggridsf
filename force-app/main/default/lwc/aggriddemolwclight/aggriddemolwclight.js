import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from "lightning/platformResourceLoader";


import agGridCommunityJs from '@salesforce/resourceUrl/agGridCommunityJs3';
import agThemeAlpineCss from '@salesforce/resourceUrl/agThemeAlpineCss';


export default class Aggriddemolwclight extends LightningElement {
    static renderMode = "light"; // the default is 'shadow'

    columnDefs = [
        { headerName: "Make", field: "make" },
    ];

    rowData = [
        { make: "Toyota" },
    ];

    gridOptions = {};

    connectedCallback() {
        this.gridOptions = { columnDefs: this.columnDefs, rowData: this.rowData };
        // const eGridDiv = this.refs.greeeting; // this.querySelector("div");
        Promise.all([
            loadStyle(this, agThemeAlpineCss),
            loadScript(this, agGridCommunityJs),
        ]).then(() => {
                // const eGridDiv = this.querySelector("div");
                // agGrid.createGrid(eGridDiv, this.gridOptions);
            })
            .catch(error => {
                console.log('error ' + error);
            })
    }

    handleClick() {
        // const eGridDiv = this.refs.greeeting; // this.querySelector("div");
        const eGridDiv2 = this.querySelector('.ag-theme-alpine'); // this.querySelector("div");

        const spanEle = document.createElement('span');

        // eGridDiv2.insertAdjacentElement('afterbegin', spanEle);

        // eGridDiv2.insertAdjacentHTML('afterbegin', spanEle.outerHTML);


        const agGridCmp = agGrid.createGrid(eGridDiv2, this.gridOptions);
        // agGrid.createGrid(eGridDiv2, this.gridOptions);
        console.log(eGridDiv2);
    }

    
}