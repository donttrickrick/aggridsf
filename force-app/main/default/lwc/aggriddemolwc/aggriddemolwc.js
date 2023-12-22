import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from "lightning/platformResourceLoader";

export default class Aggriddemolwc extends LightningElement {
    static renderMode = "light"; // the default is 'shadow'

    columnDefs = [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
    ];

    rowData = [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ];

    gridOptions = {};

    connectedCallback() {
        this.gridOptions = { columnDefs: this.columnDefs, rowData: this.rowData };
    
        // debugger;
        // Promise.all([
        //     loadStyle(this, agThemeAlpineCss),
        //     loadScript(this, agGridCommunityJs),
        // ]).then(() => {
        //         const eGridDiv = this.querySelector("div");
        //         new agGrid.Grid(eGridDiv, this.gridOptions);
        //     })
        //     .catch(error => {
        //         console.log('error ' + error);
        //     })
    }

    
}