function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var json = Get("https://mikanelson.github.io/heroes/all.json");
var parsedJson = JSON.parse(json);

var keys = Object.keys(parsedJson);
var randomHero = parsedJson[keys[ keys.length * Math.random() << 0]];

document.write(randomHero.localized_name);

var img = document.createElement("img");
var heroName = randomHero.name.replaceAll("npc_dota_hero_","");
img.src = "http://cdn.dota2.com/apps/dota2/images/heroes/" + heroName + "_vert.jpg";
//fix in css
img.width = 235;
img.height = 272;
var src = document.getElementById("hero-image");
src.appendChild(img);