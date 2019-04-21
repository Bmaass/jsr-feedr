//DOM elements
const mainContainer = document.querySelector('#main');
const popUp = document.querySelector('#popUp');
const search = document.querySelector('#search');
const feedr = document.querySelector('h1');
const closePopUp = document.querySelector('.closePopUp');
//let data = [];

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
  popUp.classList ="loader";
  closePopUp.style = "opacity: 0";
  setTimeout (function(){
    popUp.classList ="hidden";
    closePopUp.style = "opacity: 1";
  },300);

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



function populatePopUp(){
  //title = article.querySelector("h3").innerText;
  //console.log(this);

}

//when you click this article, grab it's title and pass it into the popup h1



// Close pop up
closePopUp.addEventListener('click', function(){
  event.preventDefault();
  popUp.classList = "hidden";
})

//Display error onError
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
