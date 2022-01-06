const header = document.querySelector('header');
const section = document.querySelector('section');

var requestURL='https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();//API(XHR)

request.open('GET',requestURL);
request.responseType='json';//回應為json物件
request.send();//傳送請求

request.onload = function(){
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeros(superHeroes);
}
//標題內容
function populateHeader(jsonObj){
    var myH1 = document.createElement('h1');//在h1新增一元素
    myH1.textContent = jsonObj['squadName'];//json裡squadName的內容
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown:'+jsonObj['hometown']+'// Formed:'+jsonObj['formed'];
    header.appendChild(myPara);
}
//資訊欄
function showHeros(jsonObj){
    var heroes = jsonObj['members'];
    for(i=0;i<heroes.length;i++){//for迴圈
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: '+heroes[i].secretIdentity;
        myPara2.textContent = 'Age: '+heroes[i].age;
        myPara3.textContent = 'Superpowers: ';//list

        var superPowers = heroes[i].powers;
        for(j=0;j<superPowers.length;j++){
            var listItem = document.createElement('ul');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
}