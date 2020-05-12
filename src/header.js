export default () => {
  const element = document.createElement('div')
  element.textContent = 'header1111'
  element.addEventListener('click', function () {
    console.log('click')
  })
  return element
}