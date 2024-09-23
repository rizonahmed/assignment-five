document.getElementById('blog').addEventListener('click', function(){
    window.location.href = './home.html'
})

document.getElementById('first-donation').addEventListener('click', function(){
    
    const firstInput = forInput('first-input');
    const firstCard = firstInnerText('first-balance');
    const totalBalance = mainBalance('main-balance') ;
    if(firstInput === 0 || firstInput < 0 ){
        alert('Invalid Amount  Please Enter Correct Amount')
        return
    }
    else if(isNaN(firstInput)  ){
          alert('Invalid Amount Please Enter Correct Amount')
          return

    }

    const addedAmount = firstCard + firstInput ;
    if(firstInput > totalBalance){
        alert('Invalid Amount Please Enter Correct Amount')
        return
    }
    document.getElementById('first-balance').innerText = addedAmount; 
    const subBalance = totalBalance - firstInput ;
    if(subBalance < 0 ){
        alert('Invalid Amount Please Enter Correct Amount')
        return
    }
    document.getElementById('main-balance').innerText = subBalance;
    
    document.getElementById('first-input').value = '';
    
   const modal = document.getElementById('my_modal_1') 
    modal.showModal()  

    historyCreate(firstInput)
})

document.getElementById('second-donation').addEventListener('click', function(){
    
    const secondInput = forInput('second-input');
    const secondCard = firstInnerText('second-balance');
    const totalBalance = mainBalance('main-balance') ;
    if(secondInput === 0 || secondInput < 0 ){
        alert('Invalid Amount  Please Enter Correct Amount')
        return
    }

    if(isNaN(secondInput)  ){
          alert('Invalid Amount  Please Enter Correct Amount')
          return
    }

    const addedAmountTwo = secondCard + secondInput ;
    if(secondInput > totalBalance){
        alert('Invalid Amount Please Enter Correct Amount')
        return
    }
    document.getElementById('second-balance').innerText = addedAmountTwo; 
    const subBalanceTwo = totalBalance - secondInput ;
    if(subBalanceTwo < 0 ){
        alert('Invalid Amount Please Enter Correct Amount')
        return
    }
    document.getElementById('main-balance').innerText = subBalanceTwo; 

    document.getElementById('second-input').value = '';

    const modal = document.getElementById('my_modal_1') 
    modal.showModal() 
    
    historyCreate2(secondInput)
})


document.getElementById('third-donation').addEventListener('click', function(){
    
    const thirdInput = forInput('third-input');
    const thirdCard = firstInnerText('third-balance');
    const totalBalance = mainBalance('main-balance') ;

    if(thirdInput === 0 || thirdInput < 0 ){
        alert('Invalid Amount  Please Enter Correct Amount')
        return
    }

    if(isNaN(thirdInput)  ){
          alert('Invalid Amount  Please Enter Correct Amount')
          return
    }

    const  addedAmountThird = thirdCard + thirdInput;
    if(thirdInput > totalBalance){
        alert('Invalid Amount Please Enter Correct Amount')
        return
    }
    document.getElementById('third-balance').innerText = addedAmountThird; 
    const subBalanceThird = totalBalance - thirdInput ;
    if(subBalanceThird < 0 ){
        alert('Invalid Amount Please Enter Correct Amount')
        return
    }
    document.getElementById('main-balance').innerText = subBalanceThird; 

    document.getElementById('third-input').value = '';

    const modal = document.getElementById('my_modal_1') 
    modal.showModal()  

    historyCreate3(thirdInput)

})
 
document.getElementById('history').addEventListener('click', function(){
 document.getElementById('donate').classList.remove('bg-[#B4F461]')
 document.getElementById('history').classList.add('bg-[#B4F461]')
 document.getElementById('footer').classList.add('hidden')
})

document.getElementById('donate').addEventListener('click', function(){
 document.getElementById('history').classList.remove('bg-[#B4F461]')
 document.getElementById('donate').classList.add('bg-[#B4F461]')
 document.getElementById('footer').classList.remove('hidden')
})
   
document.getElementById('donate').addEventListener('click',function(){
    hideElement('donate-section')
})
document.getElementById('history').addEventListener('click',function(){
    hideElement('history-section')
})
hideElement()


