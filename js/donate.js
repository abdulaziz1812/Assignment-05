document.getElementById('btn-donation-noakhali')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donation = inputAmountById('input-donation-noakhali');
        const balance = textAmountToNumberById('balance');
        const cardBalance = textAmountToNumberById('balance-noakhali');
        const titleChange = document.getElementById('title-noakhali');
        const cardCurrentBalance = document.getElementById('balance-noakhali')


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

            const newTransaction = document.createElement('p');
            newTransaction.classList.add('border', 'p-8', 'rounded-xl')
            console.log(newTransaction);
            const date = new Date();
            

            newTransaction.innerHTML = `<strong>${donation} Taka is ${newTitle}</strong>
            <br>
            Date: ${date}`;
            
           
            document.getElementById('history-container').appendChild(newTransaction);

            titleChange.innerText = titleChange.innerText.replace("Donated", "Donate");

        }
    })
