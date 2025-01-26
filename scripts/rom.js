// function getRombosValue() {
//     const romValue = document.getElementById('rombus');
//     const romText = romValue.value;
//     const romw = parseFloat(romText);
//     console.log(romw)
//     const romHeight = document.getElementById('romboH');
//     const romHtext = romHeight.value;
//     const romH = parseFloat(romHtext);
//     console.log(romH)
//     const rombosArea = romw * romH;
//     console.log('Rombus are are :', rombosArea);

// }

function getRombosValue() {
    const frombus = getValueById('rombus');
    console.log(frombus);
    const hRombos = getValueById('romboH');
    console.log(hRombos);
}

function getValueById(inPutFieldId) {
    const inPutField = document.getElementById(inPutFieldId);
    const romT = inPutField.value;
    const floatRombus = parseFloat(romT);
    inPutField.value = '';
    return floatRombus;
}