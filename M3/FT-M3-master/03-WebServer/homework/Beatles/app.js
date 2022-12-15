var http = require('http');
var fs   = require('fs');
const { resolve } = require('path');

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]

http.createServer((req, res) => {
  //API
  if(req.url === '/api') {
    res.writeHead(200, {'Content-type': 'application/jason'});
    return res.end(JSON.stringify(beatles));
  }
  //BACKEND
  if(req.url.substring(0, 5) === '/api') {
    let searchWord = req.url.split('/').pop();
    console.log('SEARCHWORD', searchWord);
  //BUSCAR EL BEATLE CORRECTO
  let beatleFound = beatles.find((beatle) => beatle.name.toLowerCase() === searchWord.replace('%20g', ' '.toLowerCase()));
    if (beatleFound) {
      res.writeHead(200, {'Content-type': 'application/json'});
      return res.end(JSON.stringify(beatleFound));
    }
      res.writeHead(404, {'Content-type': 'text/html;charset=UTF-8'});
      return res.end('<h1 style="text-align: center;">Beatle no encontrado</h1>');
}
  //FRONT END
  if(req.url[0] === '/' && req.url.length > 1){
    res.writeHead(200, {'Content-type': 'text/html;charset=UTF-8'});
    new Promise((resolve, reject) => {
    fs.readFile('./index.html', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
    })
.then((result => {
  return res.end(result)
}))
.listen(1337, '127.0.0.1', () => console.log('Listening to potrt 1337...'))