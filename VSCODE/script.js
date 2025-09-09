function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img
    const img =document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light')){
    //se tiver light mode, adicionar a imagem light    
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'imagem light do lucas com óculos escuros em formato de desenho com o fundo azul bebe')
    }else{
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'imagem do lucas em formado de desenho com o fundo amarelo')
    }
}