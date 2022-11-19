const openModalButton = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

openModalButton.onclick = function(){
    modalWrapper.classList.remove('invisible')
}

 document.addEventListener('keydown',function(event){
    const isEscKey = event.key === 'Escape'
    const isInvisible = document.getElementById('openModal').textContent.includes('invisible')
    if(isEscKey && !isInvisible){
        modalWrapper.classList.add('invisible')
    }
})