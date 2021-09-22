const rgbInput = document.getElementById('RGB')
const hexDisplay = document.getElementById('HEX')
const button = document.getElementById('btn')
const form = document.getElementById('HexGeneratorForm')

const REGEX_NUMBERS = /\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])+/g;
const REGEX_SYMBOLS = /[^0-9,]+/g

form.addEventListener('submit', e => {
    e.preventDefault();
    const input = rgbInput.value
    const checkForSymbols = input.match(REGEX_SYMBOLS)
    if(checkForSymbols == null){
        const RGBvalues = input.match(REGEX_NUMBERS);
        const isValid = validateData(RGBvalues); // Not sure if the task requires validation, but i've made it
        if(isValid){
            hexDisplay.value = RgbToHex(RGBvalues)
        }
    }
    else
        alert("Error!\n Use numbers only")
})

function RgbToHex(RGBvalues){
    return '#' + IntToHex(RGBvalues[0]) + IntToHex(RGBvalues[1]) + IntToHex(RGBvalues[2])
}

function IntToHex(integer){
    var hex = Number(integer).toString(16);
    if(hex.length < 2)
        hex = "0" + hex
    return hex
}

function validateData(valuesArray){
    if(valuesArray.length != 3)
    {
        alert("Error!\nNot enought numbers")
        return false;
    }


    if(valuesArray[0] < 0 || valuesArray[0] > 255 ||
        valuesArray[1] < 0 || valuesArray[1] > 255 ||
        valuesArray[2] < 0 || valuesArray[2] > 255)
        {
            alert("Error!\nUse numbers between 0-255")
            return false;
        }
    return true;
}
