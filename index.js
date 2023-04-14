// Detecting | Mouse - Clicks
// Setting audio cues based on which of the seven button elements are clicked.

for(var i = 0; i < document.querySelectorAll("button.drum").length; i++){

    document.querySelectorAll("button.drum")[i].addEventListener("click", function (){ 
    
        // Here, 'this' returns the element which is being clicked - <button class = "w drum">w</button>
        // Hence, 'this.innerHTML' is nothing but - w 

       addAudio(this.innerHTML);
       addAnimation(this.innerHTML);
    });
}

// Detecting | Keyboard - Key Presses
// Setting audio cues based on any Keyboard button press.

document.addEventListener("keydown", function (event){

    console.log(event);
    console.log(event.key);

    addAudio(event.key);
    addAnimation(event.key);
});


function addAudio(keyword){

    switch(keyword){

        case "w":
            
            var audio = new Audio("sounds/tom-1.mp3");
            break;
        
        case "a":
           
            var audio = new Audio("sounds/tom-2.mp3");
            break;
        
        case "s":
            
            var audio = new Audio("sounds/tom-3.mp3");
            break;
        
        case "d":
            
            var audio = new Audio("sounds/tom-4.mp3");
            break;
        
        case "j":
            
            var audio = new Audio("sounds/snare.mp3");
            break;
        
        case "k":
            
            var audio = new Audio("sounds/crash.mp3");
            break;

        case "l":
            
            var audio = new Audio("sounds/kick-bass.mp3");
            break;

        default: console.log(this.innerHTML);
    }

    audio.play();
}

function addAnimation(keyword){

    document.querySelector("." + keyword).classList.add("pressed");
    
    // setTimeout(function, milliseconds);
    setTimeout(function (){
        
        document.querySelector("." + keyword).classList.remove("pressed"); 
    }, 100);
}