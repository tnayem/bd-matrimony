document.getElementById('checkAge').addEventListener('click',function(){
    const ageValue = document.getElementById('ageValue');
    const ageValueNumber = Number(ageValue.value)
    const validInput = document.getElementById('validInput')
    const modal = document.getElementById('my_modal_5')
    if(ageValueNumber===0){
        
        validInput.classList.remove("hidden")
    }else{
        validInput.classList.add("hidden")
        if(ageValueNumber>=18){
            modalOne.showModal()
        }else{
            modalTwo.showModal()
        }
    }
    ageValue.value = ''
})