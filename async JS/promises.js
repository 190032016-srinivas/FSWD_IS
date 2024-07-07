const c_me_button = document.getElementById('c_me_button')
c_me_button.addEventListener('click',create_promise)

function create_promise(){
    let display = document.createElement('div')
    display.className = 'display'
    display.id = 'display'
    document.body.appendChild(display)
    display.textContent = 'Loading....'
    let prom = new Promise((resolve,reject)=>{
        setTimeout(()=>{reject('time out exceeded')},5000)
        fetch('https://dummyjson.com/posts').then(
            result=>{return result.json()}
        ).then(
            result=>{
                display.textContent = JSON.stringify(result)
                resolve('succesful')
            }
        )
    }).catch((msg)=>{
        console.log(msg);
        display.textContent = msg
    })
    
}