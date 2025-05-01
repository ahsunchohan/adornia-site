const products = [
  {
    name: "Golden Classic",
    description: "Elegant gold-tone wristwatch with timeless design.",
    price: "$300",
    category: ["men", "unisex"],
    image: "watch1.jpg",
    video: ""
  },
  {
    name: "Silver Grace",
    description: "Minimalist silver watch with white dial.",
    price: "$250",
    category: ["women", "unisex"],
    image: "watch2.jpg",
    video: ""
  }
];

const productContainer = document.getElementById("products");

function renderProducts(filterCategory = "") {
  productContainer.innerHTML = "";
  products.forEach(p => {
    if (!filterCategory || p.category.includes(filterCategory)) {
      const div = document.createElement("div");
      div.className = "product";
      div.dataset.category = p.category.join(" ");
      div.innerHTML = `
        ${p.video ? `<video src="\${p.video}" controls></video>` : `<img src="\${p.image}" alt="\${p.name}">`}
        <h3>\${p.name}</h3>
        <p>\${p.description}</p>
        <span>\${p.price}</span>
        <a href="https://wa.me/1234567890" target="_blank">Order on WhatsApp</a>
      `;
      productContainer.appendChild(div);
    }
  });
}
function filter(category) {
  renderProducts(category);
}
renderProducts();