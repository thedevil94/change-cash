function result() {
    let x = +document.getElementById('changeCash1').value;
    let y = +document.getElementById('changeCash2').value;
    let z = +document.getElementById('n').value;

    let a = (x*z)/y;
    document.getElementById('feedback').value = a;
}