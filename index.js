function fetchBooks(){}
//
// ** John helped you streamline your .then code into arrow syntax. 
// BUT, you did figure out where you went wrong on your vanilla coding below **  
// 
// fetch("https://anapioficeandfire.com/api/books"
// .then(res => res.json())
//  .then(data => renderBooks(data))
//  }; 

// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

fetch("https://anapioficeandfire.com/api/books")
.then(function (response) {
  return response.json();
})
.then(function(data){
  renderBooks(data)
});

function renderBooks (books){
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
});
}

document.addEventListener('DOMcontentLoaded', function(){
  fetchBooks();
})