document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("search-btn");
  const input = document.getElementById("search");
  const result = document.getElementById("result");

  button.addEventListener("click", function () {
    const query = input.value.trim();

    fetch("superheroes.php?query=" + encodeURIComponent(query))
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Request failed: " + response.status);
        }
        return response.text();
      })
      .then(function (data) {
        result.innerHTML = data;
      })
      .catch(function (error) {
        result.innerHTML = '<p class="not-found">Something went wrong. Please try again.</p>';
        console.log(error);
      });
  });
});
