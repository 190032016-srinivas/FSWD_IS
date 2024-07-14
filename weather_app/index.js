let input = document.getElementById('city_input')
let city_date = document.getElementById('city_date')
let parent_discription = document.getElementById('parent_discription')
let today_img = document.getElementById('today_img')
let today_weather = document.getElementById('today_weather')
let temdiv = document.getElementById('temdiv')
let wind = document.getElementById('wind')
let humidity = document.getElementById('humidity')
let dropdown = document.getElementById('dropdown')

input.addEventListener('click', (event) => {
    // let dd = document.getElementById('dropdown')
    dropdown.style.display = 'block'
    event.stopPropagation();
    document.body.addEventListener('click', (event) => {
        // console.log('clicked')
        if (!dropdown.contains(event.target) && event.target !== input) {
            dropdown.style.display = 'none'
        }
    })
})


//starting 
//fisrt thing i need the page to load is to load the weather of
// bangalore untill the user says otherwise
//i need the dropdown to load for the user
load('bangalore')
let search_btn = document.getElementById('search_btn')
search_btn.addEventListener('click', () => {
    console.log('clicked', input.value)
    load(input.value.trim())
})
// ddd=dropdowndata
if(localStorage.getItem('ddd')){
    let ddd_arr = localStorage.getItem('ddd').split('$')
    console.log('spotted',ddd_arr)
    for(let city of ddd_arr){
        let dd_el = document.createElement('div')
        dd_el.textContent = city
        dd_el.className = 'dd_city'
        dd_el.addEventListener('click',()=>{
            input.value = city
            dropdown.style.display = 'none'
        })
        dropdown.appendChild(dd_el)
    }
}

async function load(city) {
    let data
    try {
        data = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=metric&key=WFGSEH2WJLBYYQVMDS6F47Q5M&contentType=json')
        data = await data.json()
    } catch (error) {
        console.log('error=',error)
        alert('please check city name')
        return
    }
    // console.log('propogating')
    // let data = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=metric&key=WFGSEH2WJLBYYQVMDS6F47Q5M&contentType=json')
    // data = await data.json()
    // console.log('url=', 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=metric&key=WFGSEH2WJLBYYQVMDS6F47Q5M&contentType=json')
    // console.log('data=', data)
    
    input.value = null
    city_date.textContent = data['resolvedAddress']
    parent_discription.textContent = data['description']
    today_img.src = 'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/1st%20Set%20-%20Color/' + data['days'][0]['icon'] + '.svg'
    today_weather.textContent = data['days'][0]['icon']
    if(data['days'][0]['icon']=='rain'){
        today_weather.textContent = data['days'][0]['icon'] + ' ' + data['days'][0]['precipprob'] + '%'
    }
    temdiv.textContent = 'Temp:' + data['days'][0]['temp'] + 'C'
    wind.textContent = 'Wind:' + data['days'][0]['windspeed'] + 'Kmph'
    humidity.textContent = 'Humidity:' + data['days'][0]['humidity'] + '%'

    let divToDelete = document.getElementById('parent_future');
    if (divToDelete) {
        divToDelete.remove();
    }
    let parent = document.createElement('div')
    parent.id = 'parent_future'

    for (let i = 1; i < 6; i++) {
        let div_fut_card = document.createElement('div')
        div_fut_card.className = 'fut_card'
        let date_div = document.createElement('div')
        date_div.textContent = data['days'][i]['datetime']
        let div_fut_img_cont = document.createElement('div')
        div_fut_img_cont.id = 'fut_img_cont'
        let fut_img = document.createElement('img')
        fut_img.className = 'fut_img'
        fut_img.src = 'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/1st%20Set%20-%20Color/' + data['days'][i]['icon'] + '.svg'
        let fut_weather = document.createElement('div')
        let icon_arr = data['days'][i]['icon'].split('-')
        console.log('fata=',icon_arr)
        if(icon_arr.length>2){
            icon_arr.splice(2)
        }
        icon_arr = icon_arr.join('-')
        console.log('fadata=',icon_arr)
        fut_weather.textContent = icon_arr
        let div_temp = document.createElement('div')
        div_temp.textContent = 'Temp:' + data['days'][i]['temp'] + 'C'
        let div_wind = document.createElement('div')
        div_wind.textContent = 'Wind:' + data['days'][i]['windspeed'] + 'Kmph'
        let div_humidity = document.createElement('div')
        div_humidity.textContent = 'Humidity:' + data['days'][i]['humidity'] + '%'

        div_fut_img_cont.appendChild(fut_img)
        div_fut_img_cont.appendChild(fut_weather)
        div_fut_card.appendChild(date_div)
        div_fut_card.appendChild(div_fut_img_cont)
        div_fut_card.appendChild(div_temp)
        div_fut_card.appendChild(div_wind)
        div_fut_card.appendChild(div_humidity)
        parent.append(div_fut_card)
    }
    document.body.appendChild(parent)
    let pre_ddd = localStorage.getItem('ddd')
    console.log('pre_ddd=',pre_ddd)
    if(!(pre_ddd.includes(city))){
        console.log('not found in ddd')
        localStorage.setItem('ddd',pre_ddd+'$'+city)
        localStorage.setItem('as','asd')
        let dd_el = document.createElement('div')
        dd_el.textContent = city
        dd_el.className = 'dd_city'
        dd_el.addEventListener('click',()=>{
            input.value = city
            dropdown.style.display = 'none'
        })
        dropdown.appendChild(dd_el)
    }

}
