import {calculate} from "./calculate";





const selectElement = document.getElementById('operator');

selectElement.addEventListener('change', actie);


function actie(el) {
    const uitkomst = calculate(document.getElementById('a').value, document.getElementById('b').value, el.value);
    document.getElementById('result').innerHTML = uitkomst;
}