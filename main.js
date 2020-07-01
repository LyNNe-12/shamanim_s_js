let next = document.querySelector("#photos .buttons .next");
let back = document.querySelector("#photos .buttons .back");
let photos = document.querySelectorAll("#photos .img img");
let currentPhotos = 0;
next.onclick = function() {
    photos[currentPhotos].style.display= 'none';
    currentPhotos++;
    if (currentPhotos >= photos.length){
      currentPhotos = 0;
    }
    photos[currentPhotos].style.display = 'block';
}
back.onclick = function(){
    photos[currentPhotos].style.display= 'none';
    currentPhotos--;
    if (currentPhotos < 0){
      currentPhotos = photos.length - 1;
    }
    photos[currentPhotos].style.display = 'block';
}