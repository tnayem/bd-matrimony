document.getElementById('checkAge').addEventListener('click',function(){
    const ageValue = document.getElementById('ageValue');
    const ageValueNumber = Number(ageValue.value)
    if(ageValueNumber===0){
        
        validInput.showModal()
    }else{
        if(ageValueNumber>=18){
            modalOne.showModal()
        }else{
            modalTwo.showModal()
        }
    }
    ageValue.value = ''
})