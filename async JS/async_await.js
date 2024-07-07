const c_me_button = document.getElementById('c_me_button')
c_me_button.addEventListener('click',async_await)

async function async_await(){
    let display = document.createElement('div')
    display.className = 'display'
    display.id = 'display'
    document.body.appendChild(display)
    display.textContent = 'Loading....'

    try {
        let data = await((await fetch('https://dummyjson.com/posts')).json())
        display.textContent = JSON.stringify(data)
        
    } catch (error) {
        display.textContent = error
    }
}