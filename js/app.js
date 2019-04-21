//DOM elements
const mainContainer = document.querySelector('#main');
const popUp = document.querySelector('#popUp');
const search = document.querySelector('#search');
const feedr = document.querySelector('h1');
const closePopUp = document.querySelector('.closePopUp');
let detaultURL = "";
const API_KEY = "apiKey=53c71d5738fe4b9185b0ba6799906068";
let urlSources = ``;
let country = "country=us&";
const baseURL = "https://newsapi.org/v2/top-headlines?";


function getNews(source){
  // Create API request variable
  const request = new XMLHttpRequest();
  // Open a new connection using GET request on URL endpoint
  request.open('GET', `${baseURL}${country}${source}${API_KEY}`, true);
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
    popUp.classList ="loader";
    closePopUp.style = "opacity: 0";
    setTimeout (function(){
      popUp.classList ="hidden";
      closePopUp.style = "opacity: 1";
    },1000);

    data.articles.forEach( function(current){
      //create article
      const article = document.createElement('article');
      article.classList = "article";
      //create featured image section
      const featImgSection = document.createElement('section');
      featImgSection.classList = "featuredImage";
      featImgSection.style = `background-image: url('${current.urlToImage}')`;
      //create Article Content section
      const articleContentSection = document.createElement('section');
      articleContentSection.classList = "articleContent";
      //create author
      const author = document.createElement('h6');
      if (current.author == null || current.author == "" ) {
        author.innerText = current.source.name;
      } else {
        author.innerText = "By: " + current.author;
      };
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

      //append new DOM elements
      mainContainer.appendChild(article);
      article.appendChild(featImgSection);
      article.appendChild(articleContentSection);
      articleContentSection.appendChild(link);
      link.appendChild(articleTitle);
      articleContentSection.appendChild(author);
      article.appendChild(source);
      article.appendChild(clearfix);

    });

    const articleTag = document.querySelectorAll('.article');

    for (i = 0; i < articleTag.length; i++ ){
      // log the index of each article
      let articleIndex = i;
      //add event listener on each article
      articleTag[i].addEventListener('click', function(){
        event.preventDefault();
        launchPop(articleIndex);
      })
    }

    function launchPop(index){
      // show element by removing hidden class
      popUp.classList = "";
      // add title text to h1
      popUp.querySelector("h1").innerText = data.articles[index].title;
      // Remove extra data from description string
      const content = data.articles[index].content;
      const trimContent = content.split("[")[0];
      popUp.querySelector("p").innerText = trimContent;
      // add link to href
      let url = data.articles[index].url;
      popUp.querySelector(".popUpAction").setAttribute("href", `${url}`);
      // add source to button text
      popUp.querySelector(".popUpAction").innerText = `Read more on ${data.articles[index].source.name} `;
    }

  }

} getNews(detaultURL);





// clicking the feedr logo displays the default feed
feedr.addEventListener("click", function(){
  event.preventDefault();
  getNews();
});

// search function expand
search.querySelector('a').addEventListener("click", function(){
  event.preventDefault();
  search.classList.toggle('active');
});


const sourceInput = document.querySelectorAll('.userSource a');
const sourceLabel = document.querySelector('nav a');
//console.log(sourceInput[0], sourceInput[1], sourceInput[2]);

sourceInput.forEach( function(currentA){
 currentA.addEventListener('click', function(){
   sourceLabel.innerText = `News Source: ${currentA.innerText}`;
   mainContainer.innerHTML = "";
   changeSource();
   //console.log(currentA);
 });
});

function changeSource(){
  if (sourceLabel.innerText === "News Source: CNN"){
    console.log('source 1 change');
    country = "";
    getNews('sources=cnn&');
  } else if (sourceLabel.innerText === "News Source: BBC"){
    console.log('source 2 change');
    country = "";
    getNews('sources=bbc-news&');
  } else if (sourceLabel.innerText === "News Source: Fake News") {
    console.log('source 3 change');
    country = "";
    getNews('sources=fox-news&');
  } else {
    console.log('default');
  }
}

// Close pop up
closePopUp.addEventListener('click', function(){
  event.preventDefault();
  popUp.classList = "hidden";
})

//Display error onError
function onError(){
  console.log("Error");
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
