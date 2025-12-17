
// food
     const foodData = [
    { id: 1, name: 'Croissant', description: 'Flaky buttery French pastry.', image: 'https://fieldandfire.com/wp-content/uploads/2020/03/ButterCroissant-scaled.jpg' },
    { id: 2, name: 'Chocolate Muffin', description: 'Rich chocolate muffin for a sweet treat.', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'Blueberry Scone', description: 'Soft scone with fresh blueberries.', image: 'https://tse1.mm.bing.net/th/id/OIP.NrWYUm808sHwj6j4Bj632QHaJQ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 4, name: 'Ham Sandwich', description: 'Classic ham sandwich with fresh bread.', image: 'https://tse1.mm.bing.net/th/id/OIP.0N5OAb_WQv6jtQ1D-HxK_gAAAA?cb=ucfimg2&ucfimg=1&w=407&h=270&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 5, name: 'Cheese Danish', description: 'Sweet pastry filled with cream cheese.', image: 'https://tse4.mm.bing.net/th/id/OIP.BfVwxlDufxcLIItKvLEJEgHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 6, name: 'Bagel with Cream Cheese', description: 'Soft bagel topped with creamy cheese.', image: 'https://tse1.mm.bing.net/th/id/OIP.JRgEiWqEBYIVSo_VXAD1ugHaFj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 7, name: 'Fruit Tart', description: 'Colorful tart filled with fresh fruits.', image: 'https://tse1.mm.bing.net/th/id/OIP.9Xap1ImilGKjVmR5Z6btWwHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 8, name: 'Chocolate Cake', description: 'Rich and moist chocolate cake slice.', image: 'https://tse2.mm.bing.net/th/id/OIP.MCL4EJHZlXw_hD2-e2xY_AHaIO?cb=ucfimg2&ucfimg=1&w=838&h=930&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 9, name: 'Sandwich Wrap', description: 'Healthy wrap with vegetables and protein.', image: 'https://tse3.mm.bing.net/th/id/OIP.OTVIRI8uHlKDBzxtluhtpgHaFj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 10, name: 'Donut', description: 'Sweet glazed donut perfect for any time.', image: 'https://tse4.mm.bing.net/th/id/OIP.SQIicSkz8_C3NLoZiwnBkQHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' }
  ];

  const foodContainer = document.getElementById('foodContainer');

  function renderFood(foodItems) {
    foodContainer.innerHTML = '';
    foodItems.forEach(food => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${food.image}" alt="${food.name}" />
        <div class="card-body">
          <h3>${food.name}</h3>
          <p>${food.description}</p>
          <button onclick="alert('You bought ${food.name}!')">Buy Now</button>
        </div>
      `;
      foodContainer.appendChild(card);
    });
  }

  renderFood(foodData);
    // dink
    const drinksData = [
    { id: 1, name: 'Green Tea', description: 'Refreshing and healthy green tea.', image: 'https://www.mumtastes.com/wp-content/uploads/2025/12/green-tea-drink-recipe-1765672468.3550313.webp' },
    { id: 2, name: 'Berry Smoothie', description: 'Sweet and tangy mixed berry smoothie.', image: 'https://tse3.mm.bing.net/th/id/OIP.7Ufx_h_f_X7ItKDXYBi-RQHaHa?cb=ucfimg2&ucfimg=1&w=500&h=500&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 3, name: 'Chocolate Milkshake', description: 'Rich and creamy chocolate delight.', image: 'https://the-yorkshireman.com/wp-content/uploads/2021/10/226513888_1014538895985259_7583436607405060744_n-1024x1024.jpg' },
    { id: 4, name: 'Mango Juice', description: 'Freshly squeezed mango goodness.', image: 'https://tse3.mm.bing.net/th/id/OIP.DiM4tKe-YWzWYT-3KhEC-QHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 5, name: 'Lemonade', description: 'Refreshing citrus drink for hot days.', image: 'https://images.squarespace-cdn.com/content/v1/531e1ed3e4b07c42c34b7a55/1498055045508-8ZHOCNMMHTM4ODUNBUJG/gingerlemonade.jpg' },
    { id: 6, name: 'Iced Matcha Latte', description: 'Smooth matcha with ice and milk.', image: 'https://tse3.mm.bing.net/th/id/OIP.JmkxzaVJsfQH1Wf2I6wukwHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 7, name: 'Coconut Water', description: 'Natural hydration straight from the coconut.', image: 'https://tse1.mm.bing.net/th/id/OIP.50UIwi8hQjTIingjhuwggAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 8, name: 'Strawberry Smoothie', description: 'Sweet strawberries blended with yogurt.', image: 'https://tse1.mm.bing.net/th/id/OIP.6J-DEk5lvlMlGL1x4_gyYwHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 9, name: 'Chai Latte', description: 'Spiced Indian tea with steamed milk.', image: 'https://th.bing.com/th/id/R.7e4f85907cef7b888eb3d3f29446dcb4?rik=PeHjT4fTRUEnvA&pid=ImgRaw&r=0' },
    { id: 10, name: 'Hot Chocolate', description: 'Warm and cozy chocolate drink.', image: 'https://th.bing.com/th/id/R.d5add33a4f45013eced12e63421581ba?rik=ahfw1iHgjLTRZw&pid=ImgRaw&r=0' }
  ];

  const rewardsContainer = document.getElementById('rewardsContainer');

  function renderDrinks(drinks) {
    rewardsContainer.innerHTML = '';
    drinks.forEach(drink => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${drink.image}" alt="${drink.name}" />
        <div class="card-body">
          <h3>${drink.name}</h3>
          <p>${drink.description}</p>
          <button onclick="alert('You bought ${drink.name}!')">Buy Now</button>
        </div>
      `;
      rewardsContainer.appendChild(card);
    });
  }

  renderDrinks(drinksData);
    // coffee
   const coffeeData = [
    { id: 1, name: 'Espresso', description: 'Strong and bold coffee to kickstart your day.', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Cappuccino', description: 'Frothy, creamy, and perfect for any time.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'Latte', description: 'Smooth coffee with steamed milk and foam.', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'Mocha', description: 'Chocolate flavored coffee for sweet moments.', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80' },
    { id: 5, name: 'Americano', description: 'Smooth coffee diluted with hot water.', image: 'https://tse1.mm.bing.net/th/id/OIP.BSP4bZJ0kWXLzrBgU_L0IQHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 6, name: 'Macchiato', description: 'Espresso with a dash of frothy milk.', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80' },
    { id: 7, name: 'Flat White', description: 'Velvety smooth coffee with a thin layer of foam.', image: 'https://tse4.mm.bing.net/th/id/OIP.Wi3VPYmAgLWtbLKhSasRfAHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 8, name: 'Iced Coffee', description: 'Cold brewed coffee served over ice.', image: 'https://img.freepik.com/premium-photo/glass-iced-coffee_929907-1785.jpg' },
    { id: 9, name: 'Frappuccino', description: 'Blended ice coffee with delicious flavors.', image: 'https://tse2.mm.bing.net/th/id/OIP.MZDGJ6u_MgFRxl_kCEVQ-gHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 10, name: 'Turkish Coffee', description: 'Rich, strong coffee with traditional taste.', image: 'https://tse3.mm.bing.net/th/id/OIP.mQz9lOCrKf0I3zR3l4m6LQHaGW?cb=ucfimg2&ucfimg=1&w=1200&h=1028&rs=1&pid=ImgDetMain&o=7&rm=3' }
  ];

  const cardContainer = document.getElementById('cardContainer');
  
  function renderCards(coffees) {
    cardContainer.innerHTML = '';
    if (coffees.length === 0) {
      cardContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No coffee found.</p>';
      return;
    }
    coffees.forEach(coffee => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${coffee.image}" alt="${coffee.name}" />
        <div class="card-body">
          <h3>${coffee.name}</h3>
          <p>${coffee.description}</p>
          <button onclick="alert('You bought ${coffee.name}!')">Buy Now</button>
        </div>
      `;
      cardContainer.appendChild(card);
    });
  }

  renderCards(coffeeData);

  function renderCards(coffees) {
    cardContainer.innerHTML = '';
    if (coffees.length === 0) {
      cardContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No coffee found.</p>';
      return;
    }
    coffees.forEach(coffee => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${coffee.image}" alt="${coffee.name}" />
        <div class="card-body">
          <h3>${coffee.name}</h3>
          <p>${coffee.description}</p>
          <button onclick="alert('You bought ${coffee.name}!')">Buy Now</button>
        </div>
      `;
      cardContainer.appendChild(card);
    });
  }

  renderCards(coffeeData);

  searchInput.addEventListener('input', e => {
    const query = e.target.value.trim().toLowerCase();
    const filtered = coffeeData.filter(c => c.name.toLowerCase().includes(query));
    renderCards(filtered);
  });

  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }