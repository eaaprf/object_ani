window.addEventListener("load", doneLoading);

var watch;

// the object using for the final resulting product
var result = {
    toppings: [],
    scoops: [],
    cone: [],
    totalPrice: 0
}

// An object used for animating an watch scoop

function Animate( watch, startelement, endelement ) {
    this.watch = watch;
    
}



function Animate() {
    this.active = false,
    element = null,
    startx = 0,
    starty = 0,
    curx = 0,
    cury = 0,
    endx = 0,
    endy = 0,
}


var animations = [];

function doneLoading() {
    // load json data
    LoadJSON("watch.json", getJSONData);
}



function getJSONData(data) {
    console.log("load json");
    console.table(data);
    
    watch = data;
    
    // build watch grid
    watch.forEach( createWatch);
    
    // start animation
    window.requestAnimationFrame( runAnimations );
}


    
 function createWatch( data ) {
     // clone template
   var clone = document.querySelector("#watch_template").content.cloneNode(true);
     
     // fill teh data
     clone.document.querySelector(".data_name").textContent = data.name;
     clone.document.querySelector(".data_price").textContent = data.price;
     clone.document.querySelector(".data_image").src = "images/watch/" + data.image;
     clone.document.querySelector(".data_image").alt = data.name;
     
     
     clone.document.querySelector("div.watch").dataset.id = data.id;
     clone.document.querySelector("div.watch").dataset.type = data.type;
 
     
     clone.document.querySelector("div.watch").addEventListener("click", selectWatch);
     
     // insert data contents
     var content = document.querySelector("watch.content").appendChild( clone );
 }   
    
    
    
function selectWatch( event ) {
    var element = event.currentTarget;
    
    var id = element.dataset.id;
    
    //create a clone of just the image
    var clone = element.querySelector(".data_image").cloneNode(true);
    
    
    var container = document.querySelector("#result .image")
    
   // add the clon to the result
    container.appendChield(clone);
    
    // find position to add the clone at
    
    clone.style.top = container.clientHeight / 2 - clone.clientHeight / 3 result.scoop.length + "px";
    clone.style.left = clone.clientWidth/4 = clone.clientWidth/2 * (result.scoops.length % 2) + "px";
    
    // find absolute position
    var endposition = clone.getBoundingClientRect();
    
    // Make the clone invisible
    clone.style.display = "name";
    
    var animate = object.create( animate );
    animate.element = element.querySelector(".data-image").cloneNode(true);
    
    animate.result = clone;
    
    // now add the animated elements
    document.querySelector("#animationslayer").appendChild( animeted element );
    
    
    
    
    // create animated object
    
animate.element.classList.add("animationsobject");
    
    animate.id = id;
    
    animate.startx = element.offsetLeft + 7;
    animate.starty = element.offsetTop;
    
    animate.curx = animate.startx;
    animate.cury = animate.starty;
    
    animate.endx = endposition.Left;
    animate.endy = endposition.Top;
