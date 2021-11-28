 
 ////// login area event handler///// 

    const loginBtn = document.getElementById("login");
    loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';

                ////// Deposit button event handler/////

    const depositBtn = document.getElementById("addDeposit");
    depositBtn.addEventListener('click', function(){
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);
    const depositNumber = getInputNumber("depositAmount"); // function two


    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;
    updateSpanText("currentDeposit", depositNumber);

    // for total balance

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;
    updateSpanText("currentBalance", depositNumber);



    // withdraw button event handler 
    const withdrawBtn = document.getElementById("addWithdraw");
    withdrawBtn.addEventListener('click', function(){
       const withdrawNumber = getInputNumber("withdrawAmount");
       //use function 
       updateSpanText("currentWithdraw", withdrawNumber);
       updateSpanText("currentBalance", -1 * withdrawNumber);
       document.getElementById("withdrawAmount").value = "";
    })

        ///// function /////
    function updateSpanText (id, depositNumber){
        const currentDeposit = document.getElementById(id).innerText;
        const currentDepositNumber = parseFloat(currentDeposit);
        const totalDeposit = depositNumber + currentDepositNumber;
        document.getElementById(id).innerText = totalDeposit;
    }

    ///// function two ////
    function getInputNumber(id) {
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
    }

    //remove amount after submit
    document.getElementById("depositAmount").value = "";
    }) //deposit button handler function 
}) //login-area event handler function
