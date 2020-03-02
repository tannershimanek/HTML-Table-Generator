"use strict"

let cols = 0;
let rows = 0;
let data = [];


function createColumns(input) {
    cols = input.value;
    data = [];
    let colsArray = [];

    for (let i = 0; i < cols; i++) {
        colsArray.push(`
            <div class="column" id="col${i}">
                <input id="header${i}"type="string" onchange="updateColumnData(${i}, this)" />
                <div class="col-content" id="col-content${i}"></div>
            </div>
        `);
        data.push({
            header: "",
            rows: []
        });
    };

    let content = document.getElementById('content');
    content.innerHTML = colsArray.join('');
};


function createRows(input) {
    let rows = input.value;

    for (let i = 0; i < cols; i++) {
        let rowsArray = [];

        for (let j = 0; j < rows; j++) {
            rowsArray.push(`<input id="column${i}-row${j}"type="string" onchange="updateRowData(${i}, ${j}, this)"/>`)
        };

        let column = document.getElementById(`col-content${i}`);
        column.innerHTML = rowsArray.join('');
    };
};


function updateRowData(col, row, input) {
    data[col].rows[row] = input.value;
    console.log(data)
};


function updateColumnData(col, input) {
    data[col].header = input.value;
    console.log(data)
};


function buildTable() {
    let header = [];
    let rows = [];

    for (let i = 0; i < data.length; i++) {
        let th = `<th> ${data[i].header} </th>`
        header.push(th)

        for (let j = 0; j < data[i].rows.length; j++) {
            let td = `<td> ${data[i].rows[j]} </td>`
            rows.push(td)
        };
    };
    console.log(rows)



    let init = rows.length + header.length

    for (let x = 1; x < (rows.length / header.length); x++) {
        let t = header.length * x

        if (rows.length <= init) {
            rows.splice(t + (x - 1), 0, '</tr>\n\n<tr>')
        } else {
            break
        }
    }


    let headerStr = header.toString()
    let rowsStr = rows.toString()

    let buildTable = `
<table class="table table-bordered">
<thead class="bg-primary">\n
<tr>
${headerStr.replace(/,/g, '\n')}
</tr>\n
</thead>
<tbody> \n
<tr>
${rowsStr.replace(/,/g, '\n')}\n
</tbody>
</table>`

    console.log(buildTable)

    let newTable = document.querySelector('#table');
    newTable.innerHTML = buildTable;

    let tableCode = document.querySelector('#table-code');
    tableCode.innerHTML = `${buildTable.slice(0, -25)}\n\n</tbody>\n</table> `;
};
