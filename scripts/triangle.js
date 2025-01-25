function calculateTrainagle() {

    const baseTriangle = document.getElementById('base');
    const newbaseTriangle = baseTriangle.value;
    const baseFloat = parseFloat(newbaseTriangle);
    console.log(baseFloat);

    const triangleHeight = document.getElementById('height');
    const heightValue = triangleHeight.value;
    const hfloat = parseFloat(heightValue);
    console.log(hfloat);
    const area = 0.5 * baseFloat * hfloat;
    console.log('Trainagle are:', area);
    const display = document.getElementById('areap');
    display.innerText = area;



}