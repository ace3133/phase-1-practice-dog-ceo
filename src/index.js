console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let images = document.querySelector("#dog-image-container");
const breedContainer = document.getElementById("dog-breeds");
const dropDown = document.getElementById("breed-dropdown");
const option = document.querySelectorAll("option")

function challenge1() {
    document.addEventListener("DOMContentLoaded", () => {
        fetch(imgUrl)
            .then(res => res.json())
            .then(function (imgs) {
                imgs.message.forEach(img => {
                    let imgg = document.createElement("img");
                    imgg.append(img);
                    images.appendChild(imgg)
                });
            })
    })
}
function challenge2() {
    document.addEventListener("DOMContentLoaded", () => {
        fetch(breedUrl)
            .then(res => res.json())
            .then(data => {
                const breeds = data.message
                Object.keys(breeds).forEach((breed) => {
                    const li = document.createElement("li");
                    breedContainer.appendChild(li);
                    li.textContent = breed;
                    li.addEventListener("click", () => {
                        li.style.color = "green"
                    })
                   
                })
               
                dropDown.addEventListener("change", (event)=>{
                    const selectedLetter = event.target.value;
                    const filterdBreeds = Object.keys(breeds).filter((e)=> e.startsWith(selectedLetter));
            displayBreeds(filterdBreeds);
                    
                   
               
                });
                  
              
            })
    })
}

function displayBreeds(breedsToDisplay) {
    breedContainer.innerHTML = ''; 
    
    breedsToDisplay.forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
        li.addEventListener("click", () => {
            li.style.color = "green";
        });
        breedContainer.appendChild(li);
    });
}

challenge1();
challenge2();
//challenge 3 complete
// challenge 4 complete.