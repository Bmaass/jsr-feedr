/*
  Please add all Javascript code to this file.
  
*/

// API Info
const baseUrl ="https://";
const API_KEY = "53c71d5738fe4b9185b0ba6799906068";

//DOM elements
const mainContainer = document.querySelector('#main');
const article = document.querySelector('.article');
const popUp = document.querySelector('.popUp');
const search = document.querySelector('#search');
const feedr = document.querySelector('h1');


// API request

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=53c71d5738fe4b9185b0ba6799906068';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
        
    })

console.log(req.status);

function onError(){
  console.log("it broken")
}




/////////////////////

// CREATE ARTICLE  //

/////////////////////


// create article
// const article = document.createElement('article');
// article.classList = "article";

// create featured image section
// const featImgSection = document.createElement('section');
// featImgSection.classList = "featuredImage";

// create image 
// const featImg = document.createElement('img');
// featImg.setAttribute('src', current.API_ARTICLE.urlToImage);

// create Article Content section
// const articleContentSection = document.createElement('section');
// articleContentSection.classList = "articleContent";

// create link
// const link = document.createElement('a');
// link.setAttribute('href', current.API_LINK.url);

// create article title
// const articleTitle = document.createElement('h3');
// articleTitle.innerText = current.API_.title;

// create source
// const source = document.createElement('section');
// source.classList = "impressions";
// source.innerText = current.API_.source.name;

// append to main container
// mainContainer.appendChild(article);
// artice.appendChild(featImgSection);
// featImgSection.appendChild(featImg);
// artice.appendChild(articleContentSection);
// articleContentSection.appendChild(link);
// link.appendChild(articleTitle);
// artice.appendChild(source);








// api loads, display loader gif
// successful retreive, replace main content with api inside of article structure
// on click of title, show #popUp Overlay
// isnert content inside of .container inside #popUp
// remove loader class when toggling article info in popup
// change link of read more from source button
// change source based on user section from dropdown
// display loading icon while fetching data
// hide loader gif on success
// search UI has to work but dont have to make search functionality work (toggle .active class on #search)
// hide the #popUp when the user clicks the X
// clicking the feedr logo displays the default feed




