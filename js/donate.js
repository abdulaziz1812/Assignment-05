document.getElementById('btn-donation-noakhali')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donation = inputAmountById('input-donation-noakhali');
        const balance = textAmountToNumberById('balance');
        const cardBalance = textAmountToNumberById('balance-noakhali');
        const titleChange = document.getElementById('title-noakhali');
        const cardCurrentBalance = document.getElementById('balance-noakhali')

       donationBtnClick(donation,balance,cardBalance,titleChange,cardCurrentBalance)
        
    })


document.getElementById('btn-donation-feni')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donation = inputAmountById('input-donation-feni');
        const balance = textAmountToNumberById('balance');
        const cardBalance = textAmountToNumberById('balance-feni');
        const titleChange = document.getElementById('title-feni');
        const cardCurrentBalance = document.getElementById('balance-feni')

       donationBtnClick(donation,balance,cardBalance,titleChange,cardCurrentBalance)
        
    })

    document.getElementById('btn-donation-quota')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donation = inputAmountById('input-donation-quota');
        const balance = textAmountToNumberById('balance');
        const cardBalance = textAmountToNumberById('balance-quota');
        const titleChange = document.getElementById('title-quota');
        const cardCurrentBalance = document.getElementById('balance-quota')

       donationBtnClick(donation,balance,cardBalance,titleChange,cardCurrentBalance)

       titleChange.innerText = titleChange.innerText.replace("Donated", "Donate");
        
    })
