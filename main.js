var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todos = document.querySelector('.todos')


form.addEventListener('submit',(event)=>{
    event.preventDefault()
    let x = input.value.trim()   // x là giá trị của input và k có khoảng trắng 2 bên
    if(x){
        addTodos(x)
    }

    input.value = ''
})

function addTodos(y){
   let li = document.createElement('li')
   li.innerHTML = `
                    <span>${y}</span>
                    <i class='bx bx-trash-alt' ></i>
                    ` 
    li.addEventListener('click',function(){
        console.log(this)
        this.classList.toggle('gach_chan')
    })
    let i = li.querySelector('i')
    i.addEventListener('click',function(){
        this.parentElement.remove()
    })
    todos.appendChild(li)
}
