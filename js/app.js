//DOM elements
const mainContainer = document.querySelector('#main');
const popUp = document.querySelector('#popUp');
const search = document.querySelector('#search');
const feedr = document.querySelector('h1');
const closePopUp = document.querySelector('.closePopUp');


// Create API request variable
const request = new XMLHttpRequest();
// Open a new connection using GET request on URL endpoint
request.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=53c71d5738fe4b9185b0ba6799906068`, true);
// onload rung the onSuccess function
request.onload = onSuccess;
// onError run onError function
request.onerror = onError;
// send request
request.send();

function onSuccess(){
  // create variable with data parsed into an array of javascript objects
  const data = JSON.parse(request.response);
  // check for errors
  if(request.status >= 200 && request.status < 400) {
    console.log(data);
    console.log("Success: ", request.status);
  } else {
    console.log("Error: ", request.status);
  }
  data.articles.forEach( function(current){
    //create article
    const article = document.createElement('article');
    article.classList = "article";
    //create featured image section
    const featImgSection = document.createElement('section');
    featImgSection.classList = "featuredImage";
    //create image
    const featImg = document.createElement('img');
    featImg.setAttribute('src', current.urlToImage);
    //create Article Content section
    const articleContentSection = document.createElement('section');
    articleContentSection.classList = "articleContent";
    //create link
    const link = document.createElement('a');
    link.setAttribute('href', "#");
    //create article title
    const articleTitle = document.createElement('h3');
    articleTitle.innerText = current.title;
    //create source section
    const source = document.createElement('section');
    source.classList = "source";
    source.innerText = current.source.name;
    // //create clearfix
    const clearfix = document.createElement('div');
    clearfix.classList = "clearfix";

    //append to main container
    mainContainer.appendChild(article);
    article.appendChild(featImgSection);
    featImgSection.appendChild(featImg);
    article.appendChild(articleContentSection);
    articleContentSection.appendChild(link);
    link.appendChild(articleTitle);
    article.appendChild(source);
    article.appendChild(clearfix);

  });

  const articleTag = document.querySelectorAll('.article');

  console.log(articleTag);

  articleTag.forEach( function(current) {
    current.addEventListener('click', function(){
      event.preventDefault();
      //console.log("Hi!");
      launchPop();
    })
  });
}

function launchPop(){
  popUp.classList = "";
}

closePopUp.addEventListener('click', function(){
  event.preventDefault();
  popUp.classList = "hidden";
})


function onError(){
  console.log("Error")
}





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
