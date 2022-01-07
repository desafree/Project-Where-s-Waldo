
const image = document.querySelector('.image')
image.addEventListener('click', (e)=>{
    let cordX = e.offsetX;
    let cordY = e.offsetY;
    createCircle(cordX,cordY)
    
    console.log(cordX,cordY)
})




function createCircle(x,y) {
    let removeCircle = document.querySelectorAll('.circle')
    removeCircle.forEach(item=>{
        item.remove()
    })

    let removeList = document.querySelectorAll('.list')
    removeList.forEach(item=>{
        item.remove()
    })

    const circle = document.createElement('div')
    circle.classList = 'circle'
    const image = document.querySelector('.containerImg')
    let newX=x-25
    let newY=y-25
    circle.style.top = newY+'px'
    circle.style.left = newX+'px'
    image.appendChild(circle)

    createSelect(x,y)
    
    
    const option = document.querySelector('.list')
    option.addEventListener('click', ()=>{
    option.remove()
    circle.classList.remove('circle');
    circle.classList.add('circleVer');

    })

}

function createSelect(x,y) {
    const list = document.createElement('ul')
    list.classList = 'list'

    const listOption1 = document.createElement('li')
    listOption1.classList = 'list__option'
    listOption1.textContent = 'option one'
    list.appendChild(listOption1)

    const listOption2 = document.createElement('li')
    listOption2.classList = 'list__option'
    listOption2.textContent = 'option two'
    list.appendChild(listOption2)

    const listOption3 = document.createElement('li')
    listOption3.classList = 'list__option'
    listOption3.textContent = 'option two'
    list.appendChild(listOption3)

    const image = document.querySelector('.containerImg')
    list.style.top = y+'px'
    list.style.left = x+'px'
    image.appendChild(list)
}