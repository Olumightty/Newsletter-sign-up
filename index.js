document.querySelector("button").addEventListener("mouseover", function(){
    this.classList.add("hover");
});


document.querySelector("button").addEventListener("mouseout", function(){
   this.classList.remove("hover");
});

document.querySelector("button").addEventListener("click", function(){
   
   this.classList.add("click");

   setTimeout(function(){document.querySelector("button").classList.remove("click")}, 100);
   if(document.querySelector("input").value.includes("@") === false){
        document.querySelector("input").classList.add("red");
        document.querySelector(".error").innerHTML = "Valid email required";
    }
   else{
    setTimeout(function(){document.querySelector("#the").submit()}, 200)
   }
    
});

document.querySelector("input").addEventListener("mouseover", function(){
    this.classList.add("alive");
});

document.querySelector("input").addEventListener("mouseout", function(){
    this.classList.remove("alive");
});

document.querySelector("input").addEventListener("keypress", function(event){
    this.classList.add("alive");
    if(event.key === "Enter"){
        if(this.value.includes("@") === false){
            this.classList.add("red");
            document.querySelector(".error").innerHTML = "Valid email required";
            event.preventDefault();
        }
    }
});