function plus() {
    let num_1 = document.getElementById('area_1').value;
    num_1 = parseInt(num_1);

    let num_2 = document.getElementById('area_2').value;
    num_2 = parseInt(num_2);

    let resultPlus = num_1 + num_2;
    document.getElementById('res').innerHTML = resultPlus;
}

function minus() {
    let num_1 = document.getElementById('area_1').value;
    num_1 = parseInt(num_1);

    let num_2 = document.getElementById('area_2').value;
    num_2 = parseInt(num_2);

    let resultMinus = num_1 - num_2;
    document.getElementById('res').innerHTML = resultMinus;
}

function mult(){
    let num_1 = document.getElementById('area_1').value;
    num_1 = parseInt(num_1);

    let num_2 = document.getElementById('area_2').value;
    num_2 = parseInt(num_2)

    let resultMult = num_1 * num_2;
    document.getElementById('res').innerHTML = resultMult;
}

function divis() {
    let num_1 = document.getElementById('area_1').value;
    num_1 = parseInt(num_1);

    let num_2 = document.getElementById('area_2').value;
    num_2 = parseInt(num_2);

    let resultDivis = num_1 / num_2;
    document.getElementById('res').innerHTML = resultDivis;
}    

document.querySelectorAll(".clear").forEach(function (elem){
    elem.onclick = function (e) {
        let selector = this.dataset.clearSelector;
        document.querySelectorAll(selector)
        .forEach(function (item) {
          item.value = "";
        });
      };
    });