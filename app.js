thumbContainer = document.querySelector('thumb-container');
function displayContainer() {
    document.getElementById('thumbnails');
}


imgElement.src = image.url
imgElement.alt = image.alt

imgElement.addEventListener('click', () => {
    createDisplayImg(image)
})
thumbContainer.appendChild(imgElement)

    function createDisplayImg(image) {
    displayImage.innerHTML = ''

    let largeDisplayImg = document.createElement('img')
    largeDisplayImg.src = image.url
    largeDisplayImg.alt = image.alt
    
    displayImage.appendChild(largeDisplayImg)

}
