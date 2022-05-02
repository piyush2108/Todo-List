const items = document.querySelectorAll(".listItem")
items.forEach(item => {
    item.classList.remove('strike')
})

document.getElementById('item').onclick = function(){
    this.classList.add('strike');
}