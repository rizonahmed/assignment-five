

document.getElementById('blog').addEventListener('click', function(event){
    event.preventDefault()
    window.location.href = '/home.html'
    
    
    })

document.getElementById('first-donation').addEventListener('click', function(event){
event.preventDefault();

const totalBalance = forFirstCard('main-balance')
const inputOne = forFirstCard('first-input')
const balanceOne = forFirstCard('first-balance')

if( inputOne >= 1 &&   inputOne < totalBalance){
    console.log('alhamdulillah')
}
else{
    alert('error')
}

})
