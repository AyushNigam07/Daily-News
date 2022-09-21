let page = 1;
let nov = 0;
let loading = true;
loader();
pophandler('general', '2', 'us', '0')
let popBtn = document.getElementById("popBtn");
var obj;
window.addEventListener("Onload", pophandler);
function pophandler(index, no, cont, pgno) {
  if (pgno == 3) {
    list.innerHTML = ""
  }
  let i = 1 + Number(index);
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=${no == 1 || no == 2 ? cont : "us"}&page=${page} &category=${no = 2 || no == 0 ? index : general}&apikey=a3ff609adbcd417e92441e7ffc86a70a`,
    true
  );
  xhr.onload = function () {
    if (this.status === 200) {
      obj = JSON.parse(this.responseText);

      let art = obj.articles;

      let list = document.getElementById("list");
      let str = "";
      console.log(art)
      if (art.length == 0) {
        loading = false

        loader()
      }
      art.forEach((element, index) => {
        str = `
<div class="my-auto bg-light text-dark m-1 p-1 p-2 rounded-3 shadow-sm p-3 mb-1 bg-body rounded" style="width: 89rem;">
<div class="row">
  <div class="col-sm d-flex justify-content-center align-items-center">
    <img class="card-img-top container-fluid p-0 rounded-2" src="${element.urlToImage == null ? "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=740&t=st=1662083422~exp=1662084022~hmac=a89e221a72a1869434d13fdd1549f5dc6dae42a2f665e9ca1a4d7a10235c6cab" : element.urlToImage} "alt="Oops Image May Be Moved Or Deleted By The Owner">
    </div>
  <div class="col-sm d-flex justify-content-center align-items-center"> 
  <div class="my-auto mx-auto text-center">
<h5 class="title fw-bolder fs-2">  ${element.title}</h5>
<p class="text"> ${element.content == null ? " No Description Available Click On Read More Button To Get Original Post" : element.description}  </p>
<p class="text fw-bold"> ${element.content == null ? " No Content Available Click On Read More Button To Get Original Post" : element.content}  </p>
<a  class="btn btn-primary btn-sm bg-white text-dark border-black" target="_blank" href="${element.url}">Read More</a>
</div>
</div>
</div>
</div>
<hr>`
        list.insertAdjacentHTML('beforeend', str)

      });

    } else {

    }
  };

  xhr.send();
  alw = true;


}
if (alw) {
  window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      showData()
    }
  })
}
function showData() {
  page += 1;

  pophandler('', '', '', '')
}
function loader() {

  if (loading === true) {
    let list2 = document.getElementById("list2");
    let html = "";

    html = ` <div class="text-center">
  <div class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>
</div>
                <h4 class="text-center">Loading. . . <h4>
                `;
    list2.innerHTML = html;
  }
  else {
    list2.innerHTML = null;
  }
}
function srch() {
  let list = document.getElementById("list");
  list.innerHTML = "";
  const ipt = document.getElementById('src').value;
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?q=${ipt}&apikey=a776762c860247eca5e41c1ea93e934b`,
    true
  );
  xhr.onload = function () {

    if (this.status === 200) {
      obj = JSON.parse(this.responseText);

      let art = obj.articles;

      let str = "";
console.log(art)
      if (obj.totalResults == 0) {
        let html2 = `<h1 class="text-white text-center">Oops! No search Found For The Searched Keyword</h1>`;
        list.innerHTML = html2
      }
      if (art.length == 0) {
        loading = false
        loader()
      }
      art.forEach((element, index) => {
        str = `
<div class="my-auto bg-light text-dark m-1 p-1 p-2 rounded-3 shadow-sm p-3 mb-5 bg-body rounded" style="width: 89rem;">
<div class="row">
  <div class="col-sm ">
    <img class="card-img-top rounded-2 container-fluid p-0" src=" ${element.urlToImage == null ? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" : element.urlToImage}" alt="Oops Image May Be Moved Or Deleted By The Owner">
    </div>
  <div class="col-sm d-flex justify-content-center align-items-center flex-column"> 
  <div class=" text-center">
<h5 class="title fw-bolder fs-2">  ${element.title}</h5>
<p class="text fw-bold"> ${element.content == null ? " No Description Available Click On Read More Button To Get Original Post" : element.description}  </p>
<p class="text"> ${element.content == null ? " No Content Available Click On Read More Button To Get Original Post" : element.content}  </p>
<a  class="btn btn-primary btn-sm bg-white text-dark border-black" target="_blank" href="${element.url}">Read More</a>
</div>
</div>
</div>
</div>
<hr>`
        list.insertAdjacentHTML('beforeend', str)
      })
    }
  }
  xhr.send()
  alw == false
}