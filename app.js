const bodyEl = document.querySelector('body')
let sidebarEl = bodyEl.querySelector('.sidebar')
let toggleEl = bodyEl.querySelector('.toggle')
let searchBtnEl =  bodyEl.querySelector('.search-box')
let modeSwitchEl =  bodyEl.querySelector('.toggle-switch')
let modeTextEl =  bodyEl.querySelector('.mode-text')

toggleEl.addEventListener('click', ()=>{
    sidebarEl.classList.toggle('close')
})
searchBtnEl.addEventListener('click', ()=>{
    sidebarEl.classList.remove('close')
})

modeSwitchEl.addEventListener('click', ()=>{
    bodyEl.classList.toggle('dark')

    if(bodyEl.classList.contains('dark')){
        modeTextEl.innerText = 'Light mode'
    }else{
        modeTextEl.innerText = 'Dark mode'
    }
})