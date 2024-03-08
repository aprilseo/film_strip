let toggles=document.querySelectorAll('.toggle')
let gridItems=document.querySelectorAll('.grim-item')

toggles.forEach((toggle,index)=>{
    let toggleType = toggle.dataset.type//traversing toggle to get to type-->get to type which is insid dataset which is inside toggle//
    toggle.addEventListener('click',(e)=>{
        gridItems.forEach((item,index)=>{
            if (item.dataset.type==toggleTYpe){
                item.classList.remove('hidden')
            } else{
                item.classList.add('hidden')
                }
        })
    })
})