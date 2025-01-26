function getRombosValue() {
    const romValue = document.getElementById('rombus');
    const romText = romValue.value;
    const romw = parseFloat(romText);
    console.log(romw)
    const romHeight = document.getElementById('romboH');
    const romHtext = romHeight.value;
    const romH = parseFloat(romHtext);
    console.log(romH)
    const rombosArea = romw * romH;
    console.log('Rombus are are :', rombosArea);

}