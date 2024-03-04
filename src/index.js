document.addEventListener("DOMContentLoaded", function() {
    // Challenge 1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                dogImageContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching dog images:', error));

    // Challenge 2
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedsUl = document.getElementById('dog-breeds');
            for (const breed in data.message) {
                const li = document.createElement('li');
                li.textContent = breed;
                breedsUl.appendChild(li);
            }
        })
        .catch(error => console.error('Error fetching dog breeds:', error));

    // Challenge 3
    const breedsUl = document.getElementById('dog-breeds');
    breedsUl.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; // Change the color to your desired color
        }
    });

    // Challenge 4
    const filterDropdown = document.getElementById('breed-dropdown');
    filterDropdown.addEventListener('change', function(event) {
        const selectedLetter = event.target.value.toLowerCase();
        const breedList = breedsUl.getElementsByTagName('li');
        for (const breed of breedList) {
            if (breed.textContent.toLowerCase().startsWith(selectedLetter)) {
                breed.style.display = 'list-item';
            } else {
                breed.style.display = 'none';
            }
        }
    });
});
