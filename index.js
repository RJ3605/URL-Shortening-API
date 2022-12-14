/*import FetchWrapper from "./fetch-wrapper.js";*/

const shortenedLinks = document.querySelector("#shortened-links");
const shortenedLink = document.querySelector(".shortened-li");
const shortenIt = document.querySelector("#shorten-it");
const urlInput = document.querySelector("#url-input");
const copy = document.querySelector(".copy");
const copyButtons = document.querySelectorAll(".copy");
const output = document.querySelector(".output");
/*const API = new FetchWrapper('')*/

/*This places the html segment that contains the original and shortened links*/
shortenIt.addEventListener("click", async () => {
  if (urlInput.value !== "") {
    /*submit posts to API
    await API get link*/
    shortenedLinks.insertAdjacentHTML(
      `beforeend`,
      `<li class="shortened-li">
        <div class="shortened-div">
         <p class="original">${urlInput.value}</p>
         <div>
           <a class="output">Shortened link goes here!</a>
           <button class="copy">
            Copy
           </button>
         </div>
        </div>
       <li>`
    );
    urlInput.value = "";
  }
});

shortenedLinks.addEventListener("click", (event) => {
  if (event.target.className === "copy") {
    copiedButton = document.querySelector(".copied");
    copiedButton?.classList.remove("copied");
    event.target.textContent = "Copied!";
    event.target.classList.add("copied");
    navigator.clipboard.writeText(
      event.target.previousElementSibling.textContent
    );
  }
});
