function plus () {
    let num_1;
    num_1 = document.getElementById('num_1').value;
    num_1 = parseInt(num_1);
    
    let num_2;
    num_2 = document.getElementById('num_2').value;
    num_2 = parseInt(num_2);

    let result = num_1 + num_2;
    document.getElementById('res').innerHTML = result;

}

function minus () {
    let num_1;
    num_1 = document.getElementById('num_1').value;
    num_1 = parseInt(num_1);
    
    let num_2;
    num_2 = document.getElementById('num_2').value;
    num_2 = parseInt(num_2);

    let m_result = num_1 - num_2;
    document.getElementById('res').innerHTML = m_result;
}

function mult () {
    let num_1;
    num_1 = document.getElementById('num_1').value;
    num_1 = parseInt(num_1);
    
    let num_2;
    num_2 = document.getElementById('num_2').value;
    num_2 = parseInt(num_2);

    let multResult = num_1 * num_2;
    document.getElementById('res').innerHTML = multResult;
}

function divis () {
    let num_1;
    num_1 = document.getElementById('num_1').value;
    num_1 = parseInt(num_1);
    
    let num_2;
    num_2 = document.getElementById('num_2').value;
    num_2 = parseInt(num_2);

    let divisResult = num_1 / num_2;
    document.getElementById('res').innerHTML = divisResult;
}