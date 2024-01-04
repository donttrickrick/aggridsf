({
    doInit: function (cmp, event, helper) {
        

        
    },
    handleClick: function(cmp, event, helper) {
        const columnDefs = [
            { headerName: "Make", field: "make" },
        ];

        // specify the data
        const rowData = [
            { make: "Toyota" }
        ];

        const gridOptions = {
            columnDefs: columnDefs,
            rowData: rowData
        };

        var gridDiv = document.querySelector('#myGrid');
        const grid = agGrid.createGrid(gridDiv, gridOptions);
        grid.gridOptions.api.sizeColumnsToFit();
    }
})