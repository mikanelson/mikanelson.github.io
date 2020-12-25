function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

var json = Get("https://mikanelson.github.io/heroes/all.json");
var parsedJson = JSON.parse(json);

var keys = Object.keys(parsedJson);
var randomHero = parsedJson[keys[keys.length * Math.random() << 0]];

var img = document.createElement("img");
img.id = "hero-image";
img.src = randomHero.image;

var src = document.getElementById("hero-image-div");
src.appendChild(img);

var header = document.getElementById("hero-name");
header.innerText = randomHero.localized_name;
