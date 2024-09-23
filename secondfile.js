function forInput(id){
    return parseFloat(document.getElementById(id).value)
}

function firstInnerText(id){
    return parseFloat(document.getElementById(id).innerText)
}
function mainBalance(id){
    return parseFloat(document.getElementById(id).innerText)
}

document.getElementById('home').addEventListener('click', function(){
    window.location.href = './index.html'
})

 
function hideElement(id){
   
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')

     document.getElementById('donate-section').classList.add('hidden')
       document.getElementById(id).classList.remove('hidden')
}
  

function historyCreate(Amount){
    const historySec = document.getElementById('history-section')
    const d = new Date();
    let text = d.toString();
    const div = document.createElement('div')
    div.innerHTML = `
     <div class="border border-slate-200 rounded-lg p-5 py-8 mb-3">
        <p class=" text-xl font-bold"> ${Amount} Taka Donated for Donate fot Flood at Noakhali, Banglasesh</p>
        <p class="text-lg pt-2">   Date : ${text} </p>
    
       </div>
    `
    historySec.appendChild(div)
    }
    
    function historyCreate2(Amount){
    const historySec = document.getElementById('history-section')
    const d = new Date();
    let text = d.toString();
    const div = document.createElement('div')
    div.innerHTML = `
     <div class="border border-slate-200 rounded-lg p-5 py-8 mb-3">
        <p class=" text-xl font-bold"> ${Amount} Taka is Donated for Flood Relief in Feni, Banglasesh</p>
        <p class="text-lg pt-2">  Date : ${text} </p>
    
       </div>
    `
    historySec.appendChild(div)
    }
    
    
    function historyCreate3(Amount){
    const historySec = document.getElementById('history-section')
    const d = new Date();
    let text = d.toString();
    const div = document.createElement('div')
    div.innerHTML = `
     <div class="border border-slate-200 rounded-lg p-5 py-8 mb-3">
        <p class=" text-xl font-bold"> ${Amount} Taka is Donated for Aid for Injured in the Quota Movement</p>
        <p class="text-lg pt-2">  date : ${text} </p>
    
       </div>
    `
    historySec.appendChild(div)
    }