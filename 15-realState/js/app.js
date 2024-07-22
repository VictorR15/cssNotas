const imagenes = document.querySelectorAll('.propiedad__imagen')

window.addEventListener('scroll', () => {
    const scroll = this.scrollY / -20;
    imagenes.forEachI((imagen) => {
        imagen.style.backgrounPositionY = `${scroll}px`;
    })
})