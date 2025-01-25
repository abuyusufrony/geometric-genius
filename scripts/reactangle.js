function valueReactangle() {
    document.getElementById('wreact');

    const wreact = document.getElementById('wreact');
    const reactValue = wreact.value;
    const wfloat = parseFloat(reactValue);
    console.log(wfloat);

    const lreact = document.getElementById('lreact');

    const lreactval = lreact.value;

    const lflot = parseFloat(lreactval);
    console.log(lflot);
    const rarea = wfloat * lflot;
    console.log('the reactangle are :', rarea);
    const rshow = document.getElementById('rshow');
    rshow.innerText = rarea;



}