$(document).ready(function () {
  // Filter Buttons
  $(".filter-btn").click(function () {
    let filterValue = $(this).data("filter");

    if (filterValue === "all") {
      $(".gallery-item").show(300);
    } else {
      $(".gallery-item").hide(300);
      $(".gallery-item." + filterValue).show(300);
    }
  });

  //   Add New Image

  $("#addImage").click(function () {
    let url = $("#imgUrl").val();
    let cat = $("#category").val();

    if (url.trim() === "") {
      alert("Please enter image URL");
      return;
    }

    // Title for New Image

    let title = cat === "nature" ? "Nature Image" : "Animal Image";

    // Add New Image Card
    $(".gallery").append(`
        <div class="gallery-item ${cat}">
        <img src=" ${url}">
        <div class="img-title">${title}</div>
        </div>
        `);

        $("#imgUrl").val("");
  });
});
