// 常量声明
const img = document.querySelector('.main img');
const main = document.querySelector('.main');
const biggerWrapper = document.querySelector('.bigger-wrapper');
const biggerImg = document.querySelector('.bigger-wrapper img');
const closeIcon = document.querySelector('.close-icon')

const bigger = (e) => {
  biggerWrapper.style.display = 'block'
  const source = e.target.getAttribute('src')
  biggerImg.setAttribute('src', source)
}

const closeModal = () => {
  biggerWrapper.style.display = 'none'
}

img.addEventListener('click', bigger);
closeIcon.addEventListener('click', closeModal)