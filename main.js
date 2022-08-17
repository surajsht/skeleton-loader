let skeletons = document.querySelectorAll(".skeleton");

window.addEventListener("load", removeSkeleton);

function removeSkeleton() {
  setTimeout(function () {
    skeletons.forEach(function (item) {
      item.classList.remove("skeleton");
    });
  }, 2000);
}
