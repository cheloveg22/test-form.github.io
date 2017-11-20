$("[name='checkbox']").bootstrapSwitch();

function one(){
    var container = document.getElementsByClassName("section-container");
    var input = document.getElementById("number");
    var html = '<button class="btn">';
    // console.log("The input value is " + input.value);
    if (input.checked) {
        console.log("checked");
    } else {
        console.log("not checked");
    }
    console.log(container[0].children.appendChild(html));
}

// function addElement() {
//     var container = document.getElementsByClassName("section-container");
//     var section = document.getElementsByClassName('section');
//     var newSection = section[0].cloneNode(true);
//     container[0].appendChild(newSection);
//
//     console.log(container);
// }

function addElement() {
    var doc = document;
    var container = doc.getElementsByClassName("section-container");
    var row = doc.createElement('div');
    var section = doc.createElement('section');
    var switchBox = doc.createElement('div');
    var quantityBox = doc.createElement('div');
    var heightBox = doc.createElement('div');
    var weightBox = doc.createElement('div');

    row.className = "row";
    switchBox.className = "col-lg-2";
    quantityBox.className = "col-lg-2";
    heightBox.className = "col-lg-2";
    weightBox.className = "col-lg-2";

    switchBox.innerHTML = '<input type="checkbox" name="checkbox">';
    quantityBox.innerHTML = '<span>Number of pallets:</span><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon">Pcs</span></div>';
    heightBox.innerHTML = '<span>Height:</span><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon">Cm</span></div>';
    weightBox.innerHTML = '<span>Weight:</span><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon">Kg</span></div>';

    row.appendChild(switchBox);
    row.appendChild(quantityBox);
    row.appendChild(heightBox);
    row.appendChild(weightBox);
    section.appendChild(row);
    container[0].appendChild(section);
    console.log(row);
}

function deleteElement() {
    var container = document.getElementsByClassName("section-container");
    var section = document.getElementsByClassName('section');
    var lastChild = container[0].children[container[0].children.length - 1];
    // container[0].removeChild(section[0]);
    // console.log(container);
    container[0].removeChild(lastChild);
    console.log(lastChild);
}