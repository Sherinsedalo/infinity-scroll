const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "W5GBEBKIG0rGNkLIPjF1D7j1Rm9iQL1uRwWLkCqdATI";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create elements for Links and photos. Add to DOM
function displayPhotos() {
  //Run function for each objecte in photosArray
  photosArray.forEach((photo) => {
    //Creat <a> to link to unspash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    // create image for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    // put img inside <a>, then put both in imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // catch error here
  }
}

//load
getPhotos();
