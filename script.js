
//Trace 3
//this function will create an img element and return it
function createImgElment(photoURL){
    const imgElm = document.createElement('img');
    imgElm.src=photoURL;
    imgElm.alt='Photo of a cat';
    return imgElm;
}

//Trace 4
// This will add the img element to the dev element to the gallery (on the index html file)
function addPhotoToGalleryDiv(imgElm){
    const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(imgElm);
}

//Trace 5
function addDeleteButton(imgElm){
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', function(){
        imgElm.remove();
        deleteButton.remove();
    })
    
    const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(deleteButton); 
}

//Trace 2
function addPhoto(){
    const photoURL = prompt('Enter the URL of the Photo:');
    const imgElm = createImgElment(photoURL);
    addPhotoToGalleryDiv(imgElm);
    addDeleteButton(imgElm);
}

//Trace 1
const addPhotoBtn = document.getElementById("addPhotoBtn");
addPhotoBtn.addEventListener('click', addPhoto);