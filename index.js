const productsList = [
  {
    name: "ASUS Vivobook Go E1504FA-BQ204W",
    price: 439,
    stars: 4.5,
    reviews: 16,
    seller: "ASUS",
    relevance: 3,
    new: true,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694692954/2_PC_Componentes_DOM_Proyect/Products_Pictures/1_g7nksk.webp",
  },
  {
    name: "Alurin Go Start Intel Celeron N4020",
    price: 199,
    stars: 4.2,
    reviews: 9,
    seller: "PcComponentes",
    relevance: 2,
    new: false,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693054/2_PC_Componentes_DOM_Proyect/Products_Pictures/2_b2s2et.webp",
  },
  {
    name: "MSI Katana 15 B12VFK-095XES",
    price: 1029,
    stars: 4.8,
    reviews: 165,
    seller: "MSI",
    relevance: 4,
    new: true,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693133/2_PC_Componentes_DOM_Proyect/Products_Pictures/3_hgxij9.webp",
  },
  {
    name: "PcCom Revolt 4050 Intel Core i5",
    price: 1059,
    stars: 0,
    reviews: 0,
    seller: "PcComponentes",
    relevance: 5,
    new: true,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693208/2_PC_Componentes_DOM_Proyect/Products_Pictures/4_bfalpw.webp",
  },
  {
    name: "Lenovo IdeaPad 3 15ITL6",
    price: 439,
    stars: 5,
    reviews: 38,
    seller: "Lenovo",
    relevance: 2,
    new: false,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693292/2_PC_Componentes_DOM_Proyect/Products_Pictures/5_p0ikju.webp",
  },
  {
    name: "Lenovo IdeaPad 3 15ALC6 AMD Ryzen 7",
    price: 479,
    stars: 4,
    reviews: 138,
    seller: "Lenovo",
    relevance: 3,
    new: false,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693364/2_PC_Componentes_DOM_Proyect/Products_Pictures/6_sqeaut.webp",
  },
  {
    name: "HP 15S-FQ5085NS Intel Core i5",
    price: 489,
    stars: 4.2,
    reviews: 194,
    seller: "PcComponentes",
    relevance: 4,
    new: true,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693427/2_PC_Componentes_DOM_Proyect/Products_Pictures/7_h52n0w.webp",
  },
  {
    name: "HP 15S-FQ5013NS Intel Core i5",
    price: 489,
    stars: 4.2,
    reviews: 164,
    seller: "PcComponentes",
    relevance: 4,
    new: true,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693493/2_PC_Componentes_DOM_Proyect/Products_Pictures/8_vlixqs.webp",
  },
  {
    name: "ASUS VivoBook 15 F1502ZA",
    price: 589,
    stars: 4,
    reviews: 251,
    seller: "ASUS",
    relevance: 5,
    new: false,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693574/2_PC_Componentes_DOM_Proyect/Products_Pictures/9_wcrkll.webp",
  },
  {
    name: "Lenovo IdeaPad 1 15ADA7 AMD Ryzen 3",
    price: 329,
    stars: 5,
    reviews: 51,
    seller: "Lenovo",
    relevance: 2,
    new: false,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693644/2_PC_Componentes_DOM_Proyect/Products_Pictures/10_wpfe2j.webp",
  },
];

const productSection = document.querySelector(".pc-products");
const filterSection = document.querySelector(".pc-filters");

const cleanFiltersDiv = document.createElement("div");
cleanFiltersDiv.className = "pc-clean-filters --pc-display-flex-column";
filterSection.append(cleanFiltersDiv);

const sellersDiv = document.createElement("div");
sellersDiv.className = "pc-filter-sellers --pc-display-flex-column";
filterSection.append(sellersDiv);

const priceDiv = document.createElement("div");
priceDiv.className = "pc-filters-price --pc-display-flex-column";
filterSection.append(priceDiv);

let priceInput;
let clearFiltersButton;
let sellersSelect;

let appliedFilters = {
  seller: null,
  price: null,
};

const toggleFooterUlInResponsiveVersion = () => {
  const titlesForFootersUl = document.querySelectorAll(".pc-h5");

  titlesForFootersUl.forEach((title) => {
    title.addEventListener("click", () => {
      const ul = title.nextElementSibling;
      const p = title.children[1];
      ul.classList.toggle("show-ul");

      if (ul.className === "show-ul") {
        p.innerHTML = "-";
      } else {
        p.innerHTML = "+";
      }
    });
  });
};

const filtersTemplate = () => {
  cleanFiltersDiv.innerHTML += `<button class="pc-clear-filters">Borrar filtros</button>`;
  sellersDiv.innerHTML += `<h4>Vendedores</h4>
  <div class="pc-filter-sellers-select --pc-display-flex-column">
    <select id="pc-select-filter" class="pc-select-filter">
      <option selected disabled>Elige un vendedor</option>
      <option>PcComponentes</option>
      <option>ASUS</option>
      <option>Lenovo</option>
      <option>MSI</option>
    </select>
  </div>`;
  priceDiv.innerHTML += `<h4>Precio</h4>
  <input class="pc-filter-input-price" id="pc-filter-input-price" placeholder="Escribe tu precio" type="number">
  <button class="pc-submit-price-button" type="submit">Buscar</button>`;

  clearFiltersButton = document.querySelector(".pc-clear-filters");
  sellersSelect = document.querySelector(".pc-select-filter");
  const submitPriceButton = document.querySelector(".pc-submit-price-button");
  priceInput = document.querySelector(".pc-filter-input-price");

  clearFiltersButton.addEventListener("click", onCleanFiltersButton);
  sellersSelect.addEventListener("change", onSelect);
  submitPriceButton.addEventListener("click", onSubmitPriceButton);
};

const productTemplate = (image, name, price, seller) => {
  return `<article class="grid-item">
  <img src="${image}" alt="${name}">

  <div class="pc-article-buttoms">
    <button class="pc-partner">Patrocinado</button>
    <button class="pc-free-shipping">Envío gratis</button>  
  </div>
  <p class="product-name">${name}</p>
  <p class="product-price">${price}€</p>
  <p class="pc-product-shipping-info">Recibelo mañana</p>
  <p class="pc-product-seller">Vendido por <strong>${seller}</strong></p>
</article>`;
};

const printProducts = () => {
  productsList.forEach((product) => {
    productSection.innerHTML += productTemplate(
      product.image,
      product.name,
      product.price,
      product.seller
    );
  });
};

const applyFilters = () => {
  let filteredProducts = productsList;

  if (appliedFilters.seller) {
    filteredProducts = filteredProducts.filter(
      (product) => product.seller === appliedFilters.seller
    );
  }

  if (appliedFilters.price) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= appliedFilters.price
    );
  }

  productSection.innerHTML = "";
  filteredProducts.forEach((product) => {
    productSection.innerHTML += productTemplate(
      product.image,
      product.name,
      product.price,
      product.seller
    );
  });
};

const onCleanFiltersButton = () => {
  priceInput.value = "";
  sellersSelect.value = "Elige un vendedor";
  appliedFilters = { seller: null, price: null };
  applyFilters();
};

const onSelect = (event) => {
  const selectedOption = event.target.value;
  appliedFilters.seller =
    selectedOption !== "Elige un vendedor" ? selectedOption : null;
  applyFilters();
};

const onSubmitPriceButton = () => {
  const maxPrice = parseFloat(priceInput.value);
  appliedFilters.price = maxPrice || null;
  applyFilters();
};

printProducts();
filtersTemplate();
toggleFooterUlInResponsiveVersion();
