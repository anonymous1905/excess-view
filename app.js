const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

//imports the ejs package and allows us to use separate view files
app.set('view engine','ejs');

//tells Express that our view files are in the pages/folder
app.set('views','pages');


//hosts all the files inside public/ folder from localhost:3000
app.use(express.static('public'));

app.use(expressLayouts);

app.set('layout', 'my-master-layout.ejs');
//---------------------- Defaut values for view variables
app.locals.myTitle = 'Express Views from 6';


//------------------ ROUTES GO HERE

app.get('/', (request, res, next) => {
const myName = 'Tony';
const age = 25;



  res.render(
    'home-view.ejs',
    {
      viewNameVar:myName,
      viewAge: age
    }

  );
});

const booksList = [
  'Dune',
  'Lord of the Rings',
  'Harry Potter',
  'The Martian',
  'Elon Musk SpaceX',
  'Be obsessed or Be average',
  'Eloquent javascript'
];

app.get('/books', (req, res, next) => {

  res.render('books-view.ejs', {
  booksForView: booksList
});
});



const accomplishmentsList = [
  {award: 'Best TA 21 and under 21', type: 'performance', person: "Kevin"},
  {award: 'Coolest Swiss Person in Class', type: 'personality', person: "Daniel K"},
  {award: 'Most Slices of Pizza Eaten', type: 'strenght', person: "Nik.E"},
  {award: 'Most Beautiful Former Cook', type: 'looks', person: "Josh"},
  {award: 'Best Last Name', type: 'name', person: "Darren W."}
];

app.get('/accomplishments', (req, res, next) => {
  const randomIndex = Math.floor(Math.random() * accomplishmentsList.length);

  res.render('accomplishments-view.ejs', {
    accomplishmentsForView: accomplishmentsList,
    featuredAccomplishment: accomplishmentsList[randomIndex],
    myTitle: "Accomplishments - Express Views"
  });
});







//_________________________________________________________

app.listen(7000);
