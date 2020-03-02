HTML-Table-Generator




function getData() {

    for(let i = 0; i < data.length; i++) {
        console.log(data[i].header);

        for(let j = 0; j < data[i].rows.length; j++) {
        console.log(data[i].rows[j]);
        };
    };
};


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
