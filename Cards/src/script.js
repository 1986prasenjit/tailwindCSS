const cards = [
    {
      title: 'Mountain View',
      copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains',
      button: 'View Trips',
      imageId: '1517021897933-0e0319cfbc28',
    },
    {
      title: 'To The Beach',
      copy: 'Plan your next beach trip with these fabulous destinations',
      button: 'View Trips',
      imageId: '1533903345306-15d1c30952de',
    },
    {
      title: 'Desert Destinations',
      copy: "It's the desert you’ve always dreamed of",
      button: 'Book Now',
      imageId: '1545243424-0ce743321e11',
    },
    {
      title: 'Explore The Galaxy',
      copy: 'Seriously, straight up, just blast off into outer space today',
      button: 'Book Now',
      imageId: '1531306728370-e2ebd9d7bb99',
    },
  ];
  
  const cardGrid = document.getElementById('cardGrid');
  
  cards.forEach((card) => {
    const div = document.createElement('div');
    div.className = `
      relative overflow-hidden rounded-2xl text-white shadow-xl h-[350px]
      flex items-end bg-cover bg-center card-hover group
    `;
    div.style.backgroundImage = `url(https://images.unsplash.com/photo-${card.imageId}?auto=format&fit=crop&w=400&q=80)`;
  
    div.innerHTML = `
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
      <div class="relative z-10 w-full p-4 text-center flex flex-col items-center card-hover-content card-hover-transition">
        <h2 class="text-xl font-bold">${card.title}</h2>
        <p class="mt-2 fade-in text-base font-serif italic">${card.copy}</p>
        <button class="fade-in mt-4 px-4 py-2 text-white text-xs font-bold uppercase bg-red-600 rounded hover:bg-red-800 focus:outline-dashed focus:outline-1 focus:outline-yellow-400">
          ${card.button}
        </button>
      </div>
    `;
  
    cardGrid.appendChild(div);
  });
  