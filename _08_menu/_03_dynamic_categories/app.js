const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 35.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Masala puri",
    category: "snacks",
    price: 5.99,
    img: "./images/Bhel-Poori.jpg",
    desc: `phochka masale daar kha lo. Sukhi papdi free me. Roj shaam chowk pe pipal ke per ke niche.`,
  },
  {
    id: 11,
    title: "Oreo dessert",
    category: "dessert",
    price: 12.99,
    img: "./images/No-Bake-Oreo-Cheesecake-Recipe-Photo.jpg",
    desc: `Majedaar thanda thanda oreo ice-cream kha lo babu`,
  },
];

// Once we have got the data from an api or from a database then we need to show the data on the web page.
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");
//const filterBtns = document.querySelectorAll(".filter-btn");
//console.log(filterBtns);  //will be empty because we are now adding the categories dynamically.

/*
For Task 3 "dynamic categories",
1) get only unique categories - HARDEST ONE
2) iterate over categories return buttons for each unique category
3) make sure to select buttons when thet are available.
*/

//load items by default
window.addEventListener("DOMContentLoaded", function () {
  console.log("shake and bake");
  displayMenuItems(menu);
  displayMenuButtons();
});
// filter items based on the category clicked by the user
// filterBtns.forEach(function(btn){
//   btn.addEventListener('click', function(e){
//     const category = e.currentTarget.dataset.id;
//     console.log("selected category " + category);
//     const filteredItems = menu.filter(function(item){
//       if(item.category === category){
//         return item;
//       }
//     });
//     console.log(filteredItems);
//     if(category === 'all'){
//       console.log("category was '" + category + "'");
//       displayMenuItems(menu);
//     } else {
//       displayMenuItems(filteredItems);
//     }
//   });
// });

function displayMenuItems(menuItems) {
  // access the menu array and dress the html. i.e add to .section-center
  let displayMenu = menuItems.map(function (item) {
    // console.log(item.category);
    // return item;
    // return `<h1>hello world</h1>`;
    // return `<h1>${item.category}</h1>`;
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  //get only unique categories - HARDEST ONE (using reduce) and create the html for button (category link) container
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  //console.log(categories);
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
    })
    .join("");
  console.log(categoryBtns);
  container.innerHTML = categoryBtns;

  //now access the buttons/categories
  //const filterBtns = document.querySelectorAll(".filter-btn");
  const filterBtns = container.querySelectorAll(".filter-btn");
  // filter items based on the category clicked by the user
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      console.log("selected category " + category);
      const filteredItems = menu.filter(function (item) {
        if (item.category === category) {
          return item;
        }
      });
      console.log(filteredItems);
      if (category === "all") {
        console.log("category was '" + category + "'");
        displayMenuItems(menu);
      } else {
        displayMenuItems(filteredItems);
      }
    });
  });
}
