function getRequest(url) {
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", url, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

function getRandom(jsonObj) {
  var keys = Object.keys(jsonObj);
  var random = jsonObj[keys[keys.length * Math.random() << 0]];
  return random;
}

function updateItems(bootJson, itemJson) {
  var checkbox = document.getElementById("boots-checkbox");
  if (checkbox.checked) {
    updateInformation(getRandom(bootJson), "item-1-image", "item-1-header");
    var items = [];
    var itemId = 2;
    while (items.length < 5) {
      var randomItem = getRandom(itemJson);
      if (items.includes(randomItem.localized_name) == false) {
        items.push(randomItem.localized_name);
        var imageId = "item-" + itemId + "-image";
        var headerId = "item-" + itemId + "-header";
        itemId++;
        updateInformation(randomItem, imageId, headerId);
      }
    }
  } else {
    var items = [];
    var itemId = 1;
    while (items.length < 6) {
      var randomItem = getRandom(itemJson);
      if (items.includes(randomItem.localized_name) == false) {
        items.push(randomItem.localized_name);
        var imageId = "item-" + itemId + "-image";
        var headerId = "item-" + itemId + "-header";
        itemId++;
        updateInformation(randomItem, imageId, headerId);
      }
    }
  }
}

function updateInformation(itemJson, imageId, headerId) {
  var img = document.getElementById(imageId);
  img.src = itemJson.image;
  img.addEventListener("load", function () {
    var header = document.getElementById(headerId);
    header.innerText = itemJson.localized_name;
  });
}

function getJsonObj(url) {
  var json = getRequest(url);
  var parsedJson = JSON.parse(json);
  return parsedJson;
}

var heroes = getJsonObj("https://mikanelson.github.io/heroes/all.json");
var boots = getJsonObj("https://mikanelson.github.io/items/boots.json");
var items = getJsonObj("https://mikanelson.github.io/items/upgrades.json");

updateInformation(getRandom(heroes), "hero-image", "hero-name");
updateItems(boots, items);

var sortButton = document.getElementById("refresh");
sortButton.onclick = function refresh() {
  updateInformation(getRandom(heroes), "hero-image", "hero-name");
  updateItems(boots, items);
}
