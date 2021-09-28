let checklist = document.querySelector('#checklist')
let add = document.querySelector('#add')

//Подія blur() -- при потере фокуса добавляет новую li
add.addEventListener('blur', function() {
    let li = document.createElement('li')
    checklist.appendChild(li)


    let span = document.createElement('span')
    span.innerHTML = this.value
    this.value = ''  
    li.appendChild(span)  

    span.addEventListener('click', function func() {
        let input = document.createElement('input')
        input.value = this.innerHTML
        this.innerHTML = ''
        this.appendChild(input)

        this.removeEventListener('click', func) 

        
        input.addEventListener('blur', function func() {
            span.innerHTML = this.value

            span.addEventListener('click', func)
        })
       
    }) 



    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checklist.appendChild(checkbox)
    checkbox.addEventListener('click', function() {
        li.classList.toggle('done')
    })

    let remove = document.createElement('a')
    remove.innerHTML = 'X'
    remove.href = ''
    checklist.appendChild(remove)
    remove.addEventListener('click', function(event) {
        li.removeChild(li)
        event.preventDefault()
    })
})