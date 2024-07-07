const c_me_button = document.getElementById('c_me_button')
c_me_button.addEventListener('click', ()=>{delayed_fetch(fetch_data)})


function delayed_fetch(callback){
    // console.log('clicked')
    let display = document.createElement('div')
    display.className = 'display'
    display.id = 'display'
    display.textContent = 'Result will be available after 5 seconds'
    document.body.appendChild(display)
    setTimeout(callback,5000)

}
function fetch_data(){
    let dis = document.getElementById('display')
    dis.textContent = 'fetched data'
    fetch('https://dummyjson.com/products/1').then(
        result=>{
            return result.json()
        }
    ).then(
        result=>{
            dis.textContent = JSON.stringify(result)
        }
    )  
}