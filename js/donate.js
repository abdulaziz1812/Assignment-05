document.getElementById('btn-donation-noakhali')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const input = 'input-donation-noakhali';
        const donation = inputAmountById(input);
        const balance = textAmountToNumberById('balance');
        const cardBalance = textAmountToNumberById('balance-noakhali');
        const titleChange = document.getElementById('title-noakhali');
        const cardCurrentBalance = document.getElementById('balance-noakhali');
        const donationInput = document.getElementById(input)


        donationBtnClick(donation, balance, cardBalance, titleChange, cardCurrentBalance, donationInput);


    })


document.getElementById('btn-donation-feni')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const input = 'input-donation-feni';
        const donation = inputAmountById(input);
        const balance = textAmountToNumberById('balance');
        const cardBalance = textAmountToNumberById('balance-feni');
        const titleChange = document.getElementById('title-feni');
        const cardCurrentBalance = document.getElementById('balance-feni');
        const donationInput = document.getElementById(input)


        donationBtnClick(donation, balance, cardBalance, titleChange, cardCurrentBalance, donationInput);

    })

document.getElementById('btn-donation-quota')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const input = 'input-donation-quota';
        const donation = inputAmountById(input);
        const balance = textAmountToNumberById('balance');
        const cardBalance = textAmountToNumberById('balance-quota');
        const titleChange = document.getElementById('title-quota');
        const cardCurrentBalance = document.getElementById('balance-quota');
        const donationInput = document.getElementById(input)


        donationBtnClick(donation, balance, cardBalance, titleChange, cardCurrentBalance, donationInput);


    })
