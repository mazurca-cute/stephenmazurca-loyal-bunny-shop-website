const categoryButtons = document.querySelectorAll('.category-btn');
    const carouselItemsContainer = document.getElementById('carouselItemsContainer');

    const categoryImages = [
      Array.from({ length: 20 }, (_, i) => `../images/holand-lop/${i + 1}.jpg`),
      Array.from({ length: 20 }, (_, i) => `../images/american-fuzzy/${i + 1}.jpg`),
      Array.from({ length: 20 }, (_, i) => `../images/angora-rabbit/${i + 1}.jpg`),
      Array.from({ length: 20 }, (_, i) => `../images/lion-head/${i + 1}.jpg`),
      Array.from({ length: 20 }, (_, i) => `../images/mini-lop/${i + 1}.jpg`),
      Array.from({ length: 20 }, (_, i) => `../images/polish-rabbit/${i + 1}.jpg`),
      Array.from({ length: 20 }, (_, i) => `../images/rex-rabbit/${i + 1}.jpg`)
    ];

    function updateCarousel(categoryIndex) {
      const selectedImages = categoryImages[categoryIndex] || [];
      carouselItemsContainer.innerHTML = ''; // Clear previous items
      const chunkedImages = chunkArray(selectedImages, 5); // Split into groups of 6 images

      chunkedImages.forEach((chunk, chunkIndex) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = `carousel-item ${chunkIndex === 0 ? 'active' : ''}`;

        const rowDiv = document.createElement('div');
        rowDiv.className = 'row gx-0';

        chunk.forEach(imageUrl => {
          const colDiv = document.createElement('div');
          colDiv.className = 'col-2'; // Ensure each image takes 2 columns in a 6-column layout
          colDiv.innerHTML = `<img src="${imageUrl}" class="img-fluid rounded" alt="Category Image">`;
          rowDiv.appendChild(colDiv);
        });

        itemDiv.appendChild(rowDiv);
        carouselItemsContainer.appendChild(itemDiv);
      });
    }

    // Helper function to divide array into chunks of a specific size
    function chunkArray(arr, chunkSize) {
      const results = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        results.push(arr.slice(i, i + chunkSize));
      }
      return results;
    }

    // Set initial content for the first category (Holland Lop)
    updateCarousel(0);

    // Add click event listeners to category buttons
    categoryButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        updateCarousel(index);
      });
    });