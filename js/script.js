
function deliveryType(checkbox) {
    var blocks = checkbox.parentNode.parentNode.parentNode.children;

    if (checkbox.checked) {
        blocks[1].classList.add('hide');
        blocks[2].classList.add('hide');
        blocks[3].classList.add('hide');
        blocks[4].classList.add('show');
        blocks[5].classList.add('show');
        blocks[6].classList.add('show');
        blocks[7].classList.add('show');
    } else {
        blocks[1].classList.remove('hide');
        blocks[2].classList.remove('hide');
        blocks[3].classList.remove('hide');
        blocks[4].classList.remove('show');
        blocks[5].classList.remove('show');
        blocks[6].classList.remove('show');
        blocks[7].classList.remove('show');
    }
}

function addElement() {
    var doc = document;
    var container = doc.getElementsByClassName("section-container");
    var row = doc.createElement('div');
    var section = doc.createElement('section');
    var switchBox = doc.createElement('div');
    var quantityBox = doc.createElement('div');
    var heightBox = doc.createElement('div');
    var weightBox = doc.createElement('div');

    var parcellWeight = doc.createElement('div');
    var parcellLength = doc.createElement('div');
    var parcellWidth = doc.createElement('div');
    var parcellHeight = doc.createElement('div');

    row.className = "row";
    switchBox.className = "col-lg-2 col-md-12";
    quantityBox.className = "col-lg-2 col-md-6 pallet-property";
    heightBox.className = "col-lg-2 col-md-6 pallet-property";
    weightBox.className = "col-lg-2 col-md-6 pallet-property";
    parcellWeight.className = "col-lg-2 col-md-6 parcel-property";
    parcellLength.className = "col-lg-2 col-md-6 parcel-property";
    parcellWidth.className = "col-lg-2 col-md-6 parcel-property";
    parcellHeight.className = "col-lg-2 col-md-6 parcel-property";

    switchBox.innerHTML = '<label class="topcoat-switch"><input type="checkbox" class="topcoat-switch__input" onchange="deliveryType(this)"><div class="topcoat-switch__toggle"></div></label>';
    quantityBox.innerHTML = '<span>Number of pallets:</span><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon">Pcs</span></div>';
    heightBox.innerHTML = '<span>Height:</span><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon">Cm</span></div>';
    weightBox.innerHTML = '<span>Weight:</span><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon">Kg</span></div>';
    parcellWeight.innerHTML = '<span>Weight:</span><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon">Kg</span></div>';
    parcellLength.innerHTML = '<span>Length:</span><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon">Cm</span></div>';
    parcellWidth.innerHTML = '<span>Width:</span><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon">Cm</span></div>';
    parcellHeight.innerHTML = '<span>Height:</span><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon">Cm</span></div>';

    row.appendChild(switchBox);
    row.appendChild(quantityBox);
    row.appendChild(heightBox);
    row.appendChild(weightBox);
    row.appendChild(parcellWidth);
    row.appendChild(parcellLength);
    row.appendChild(parcellWeight);
    row.appendChild(parcellHeight);
    section.appendChild(row);
    container[0].appendChild(section);
    // console.log(row);
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

function result() {
    var doc = document;
    var main = doc.getElementsByClassName("main-package");
    var addressFrom = doc.getElementById("from-address");
    var addressTo = doc.getElementById("to-address");
    var array = new Array;
    array = main[0].children[1].children;


    console.log(array);
    // console.log(main);
    // console.log("Sender address: " + addressFrom.value + ";");
    // console.log("Delivery address: " + addressTo.value + ";");
}
