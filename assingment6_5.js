
    const dogBtn = document.getElementById('dogBtn');
    const dogContainer = document.getElementById('dogContainer');

    dogBtn.addEventListener('click', () => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success') {
            displayDog(data.message);
          }
        })
       
    });

    function displayDog(image) {
      dogContainer.innerHTML = `<img src="${image}">`;
    }

