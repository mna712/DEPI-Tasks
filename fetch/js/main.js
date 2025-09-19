function fetchdata() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var response = JSON.parse(xmlHttp.responseText);
      var recipes = response.recipes;
      var content = "";

      recipes.forEach((e) => {
        var box = `
          <div class="col-md-4 text-center mb-5" >
            <img src="${e.image_url}"class="w-100" style="height:350px">
            <h6>${e.title}</h6>
            <h5>${e.publisher}</h5>
            <h5>${e.recipe_id}</h5>
          </div> 
        `;
        content += box;
      });

      document.querySelector(".test").innerHTML = content;
    }
  };
  xmlHttp.open(
    "GET",
    "https://forkify-api.herokuapp.com/api/search?q=pizza",
    true
  );
  xmlHttp.send();
}

fetchdata();

