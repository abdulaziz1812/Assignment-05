function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function changeBtnColorById(id) {
    document.getElementById('btn-show-donation').classList.remove('bg-lime-300');
    document.getElementById('btn-show-history').classList.remove('bg-lime-300');

    document.getElementById(id).classList.add('bg-lime-300');
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

// donation if section
function donationBtnClick(donation, balance, cardBalance, titleChange, cardCurrentBalance, donationInput) {
    if (donation > balance || isNaN(donation) || donation <= 0 || donation === "") {
        alert('Invalid Donation Amount');
        return;
    }
    else {
        // balance update
        const newBalance = balance - donation;
        document.getElementById('balance').innerText = newBalance;

        // Card balance update
        const newCardBalance = cardBalance + donation;
        cardCurrentBalance.innerText = newCardBalance;

        // modal
        document.getElementById('my_modal_1').showModal();

        // history
        titleChange.innerText = titleChange.innerText.replace("Donate", "Donated");
        const newTitle = titleChange.innerText;
        let quota = "";


        if (!titleChange.innerText.includes("Donated")) {
            quota = "Donated for ";
        }

        const newTransaction = document.createElement('p');
        newTransaction.classList.add('border', 'p-8', 'rounded-xl');
        const date = new Date();


        newTransaction.innerHTML = `<strong>${donation} Taka is ${quota}${newTitle}</strong>
        <br>
        Date: ${date}`;


        document.getElementById('history-container').appendChild(newTransaction);

        titleChange.innerText = titleChange.innerText.replace("Donated", "Donate");

        donationInput.value = "";

    }
}