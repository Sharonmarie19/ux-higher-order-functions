let products = [
  {
    id: "15215",
    name: "25' Garden Hose",
    price: 9.5,
    quantity: 1,
    department: "garden",
  },
  {
    id: "15123",
    name: "Bag of Garden Soil",
    price: 5.0,
    quantity: 1,
    department: "garden",
  },
  {
    id: "15312",
    name: "Shovel",
    price: 12.0,
    quantity: 1,
    department: "garden",
  },
  {
    id: "15215",
    name: "Screwdriver",
    price: 4.5,
    quantity: 0,
    department: "tool",
  },
  {
    id: "15215",
    name: "Corded Drill",
    price: 124.5,
    quantity: 1,
    department: "tool",
  },
  {
    id: "15215",
    name: "Pack of 50 Screws",
    price: 8.5,
    quantity: 2,
    department: "hardware",
  },
  {
    id: "15215",
    name: '1/8" washers',
    price: 4.5,
    quantity: 1,
    department: "hardware",
  },
];

let chosenDepartment = "";

function renderProducts() {
  let html = products
    .filter(function (item) {
      return item.quantity > 0;
    })
    .filter(function (item) {
      if (chosenDepartment === "") {
        return item.quantity > 0;
      } else {
        return item.department === chosenDepartment;
      }
    })
    .map(function(item) {
      return `
      <li>
     <h3>${item.name}</h3>
     <br>
     $ ${item.price} 
     </li>`;
    }).reduce(function(text, item) {
      return text + item;
    });

  /*
    using the product array
    Perform a filter, a map, and a reduce function. (Just like in the reading!)

    The html you create for each item should have:
    an outer <li>
    an <h3> title of the item
    and a price

    There are two filters to be applied!
    First, do not show out of stock items! If the quantity is zero then
    do not display the item.

    Secondly, you have to apply the filter.  
    The Buttons are already wired up, so when you click a button it will 
    set chosenDepartment.  If the item's department matches the 
    chosenDepartment, then display it.

    But watch out for the showAll case! If the chosenDepartment is blank,
    then you should show all items!  (That are in stock, of course)

    Hint: You can do this within one filter function, or you can have 
    multiple filter functions!  This can be very cleanly done with two 
    filter functions, one for checking if it's in stock, the other for checking
    the chosenDepartment.
    */

  let elem = document.getElementById("productList");
  elem.innerHTML = html;
}

window.onload = () => {
  renderProducts(products);
  document.getElementById("showAll").onclick = function () {
    chosenDepartment = "";
    renderProducts();
  };
  document.getElementById("showHardware").onclick = function () {
    chosenDepartment = "hardware";
    renderProducts();
  };
  document.getElementById("showGarden").onclick = function () {
    chosenDepartment = "garden";
    renderProducts();
  };
  document.getElementById("showTools").onclick = function () {
    chosenDepartment = "tool";
    renderProducts();
  };
};
