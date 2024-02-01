function getInputValue(Value){
    const InputValue = document.getElementById(Value);
    const LoadInputValue=InputValue.value;
    const LoadInputValueFloat=parseFloat(LoadInputValue);
    InputValue.value='';
    return LoadInputValueFloat;
}
function getStandValueById(Value){
    const StandValue=document.getElementById(Value);
    const LoadStandValue=StandValue.innerText;
    const LoadStandValueFloat=parseFloat(LoadStandValue);
    return LoadStandValueFloat;
}

function setTextOnPosition(ID,FinalValue,Verify){
    if(isNaN(Verify)){
        alert('Enter the amount of Taka.');
        return;
    }
    if(Verify<0){
        alert('Enter The positive Amount');
        return;
    }
    else{
        const setValue =document.getElementById(ID);
        setValue.innerText=FinalValue;
    }
}


document.getElementById('btn-Deposit').addEventListener('click',function(){
    const InputFinalValue=getInputValue('deposit-field')
    const standValue=getStandValueById('deposit-total');
    
    const FinalDepositValue =InputFinalValue+standValue;
    setTextOnPosition('deposit-total',FinalDepositValue,InputFinalValue)

    const setBalance=getStandValueById('balance');
    const FinalBalance = InputFinalValue+setBalance;
    setTextOnPosition('balance',FinalBalance,InputFinalValue)
})

document.getElementById('btn-Withdraw').addEventListener('click',function(){
    const WithdrawValue=getInputValue('withdraw-field');
    const WithdrawField=getStandValueById('withdraw-total');

    const FinalWithdrawValue= WithdrawValue+WithdrawField;

    setTextOnPosition('withdraw-total',FinalWithdrawValue,WithdrawValue);

    const setBalance=getStandValueById('balance');
    const FinalBalance =setBalance-WithdrawValue;
    setTextOnPosition('balance',FinalBalance,WithdrawValue)
})

document.getElementById('applyBtn').addEventListener('click',function(){
    const valueBtn1=getStandValueById('valueOnStand');
    const finalValue=100*.7;
    setTextOnPosition('valueOnStand',finalValue,finalValue);
    
})

function getInputValue2(Value){
    const InputValue = document.getElementById(Value);
    const LoadInputValue=InputValue.value;
    InputValue.value='';
    return LoadInputValue;
}
function getStandValueById(Value){
    const StandValue=document.getElementById(Value);
    const LoadStandValue=StandValue.innerText;
    return LoadStandValue;
}
document.getElementById('applyBtnCode').addEventListener('click',function(){
    const InputValue= getInputValue2('inputData');
    // const DisplayValue =getStandValueById2('displayValue');
    const ShowValue= 1000*.7;
    if(InputValue !== 'DISC30'){
        alert('Please Enter Valid Code!!');
        return;
    }
    setTextOnPosition('displayValue',ShowValue,ShowValue);
})