//https://fakestoreapi.com/products

const fetchApi = async () => {
  const mainDiv = document.querySelector("#main");
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("Something went wrong");
    } else {
      const data = await res.json();
      let html = "";
      for (let d of data) {
        html += `
        <div class="col-3">
            <div class="card mb-4">
            <div class="img-con card-img-top">
                <img src="${d.image}" class="card-img" alt="...">
            </div>
            <div class="card-body">
            <h5 class="card-title">${d.title}</h5>
            <p class="card-text">${d.description}</p>
            <p class="card-text" style="text-transform:uppercase; font-size:.8rem; font-weight:bolder">Category: ${d.category}</p>
            <p class="card-text" style="text-transform:uppercase; font-size:.8rem; font-weight:bolder">Price: ₱ ${d.price}</p>
            <p class="card-text"><small class="text-muted">Rating: ${d.rating.rate} <i class="fa-solid fa-star"></i></small></p>
            
            </div>
        </div>
        </div>
        `;
      }
      main.innerHTML = html;
    }
  } catch (e) {
    console.error("There's an error!!!!!");
  }
};
fetchApi();

/* 
<div class="col-6 g-2">
            <div class="card mb-12" style="max-width: 540px; height:100%">
                <div class="row g-0">
                    <div class="col-md-4 img-con">
                        <img src="${d.image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${d.title}</h5>
                        <p class="card-text">${d.description}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div> */
