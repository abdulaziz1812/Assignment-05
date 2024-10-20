function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}

function changeBtnColorById(id){
    document.getElementById('btn-show-donation').classList.remove('bg-lime-300')
    document.getElementById('btn-show-history').classList.remove('bg-lime-300')

    document.getElementById(id).classList.add('bg-lime-300')
}

// donation 

function inputAmountById(id) {
    const inputAmount = document.getElementById(id).value;
    const valueToNumber = parseFloat(inputAmount);
    return valueToNumber;
}

function textAmountToNumberById(id) {
    const textAmount = document.getElementById(id).innerText;
    const textToNumber = parseFloat(textAmount);
    return textToNumber;
}