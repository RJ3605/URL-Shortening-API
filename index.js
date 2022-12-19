import FetchWrapper from "./fetch-wrapper.js";

const shortenedLinks = document.querySelector("#shortened-links");
const shortenedLink = document.querySelector(".shortened-li");
const shortenIt = document.querySelector("#shorten-it");
const urlInput = document.querySelector("#url-input");
const copy = document.querySelector(".copy");
const copyButtons = document.querySelectorAll(".copy");
const output = document.querySelector(".output");
const API = new FetchWrapper("https://api.shrtco.de/v2");

/*This places the html segment that contains the original and shortened links*/
shortenIt.addEventListener("click", async (event) => {
  event.preventDefault();
  if (urlInput.value !== "") {
    await API.get(`/shorten?url=${urlInput.value}`, {
      url: urlInput.value,
    }).then((data) => {
      console.log(data);
      shortenedLinks.insertAdjacentHTML(
        `beforeend`,
        `<li class="shortened-li">
        <div class="shortened-div">
         <p class="original">${urlInput.value}</p>
         <div>
           <a class="output">${data.result.short_link}</a>
           <button class="copy">
            Copy
           </button>
         </div>
        </div>
       <li>`
      );
      urlInput.value = "";
    });
  }
});

shortenedLinks.addEventListener("click", (event) => {
  if (event.target.className === "copy") {
    document.querySelectorAll(".copy")?.forEach((button) => {
      button.textContent = "Copy";
    });
    document.querySelector(".copied")?.classList.remove("copied");
    event.target.textContent = "Copied!";
    event.target.classList.add("copied");
    navigator.clipboard.writeText(
      event.target.previousElementSibling.textContent
    );
  }
});
