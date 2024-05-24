var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://static.wikia.nocookie.net/eea1329b-9b85-48f8-ac70-3ae4f1a67b2e/scale-to-width/755";
        document.getElementById("demo").appendChild(img);
    }
}