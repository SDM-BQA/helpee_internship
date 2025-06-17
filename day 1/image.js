const btn = document.getElementById("btn");
const info = document.getElementById("info");
const img = document.getElementById("image");
const text = document.getElementById("text");
const loader = document.getElementById("loader");

btn.addEventListener("click", () => {
  // console.log("Before click",loader.classList);
  loader.classList.remove("hidden");
  // console.log("After click",loader.classList);
  btn.disabled = true;
  // console.log("clicked");
  text.classList.add("hidden");

  imgUrl = `https://picsum.photos/400?random=${Date.now()}`;

  const loadImg = new Promise((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject();
    img.src = "";
    img.src = imgUrl;
  });

  loadImg
    .then(() => {
      img.classList.add("show");
      info.classList.add("hidden");
    })
    .catch(() => {
      info.textContent = "Something Went Wrong!";
    })
    .finally(() => {
      text.classList.remove("hidden");
      // console.log("Finally Before: ", loader.classList);
      loader.classList.add("hidden");
      // console.log("Finally After: ", loader.classList);

      btn.disabled = false;
      btn.textContent = "Generate Image";
      btn.disabled = false;
    });
});
