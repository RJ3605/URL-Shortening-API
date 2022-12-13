/*import FetchWrapper from "./fetch-wrapper.js";*/

const shortenedLinks = document.querySelector("#shortened-links");
const shortenIt = document.querySelector("#shorten-it");
const urlInput = document.querySelector("#url-input");
const copy = document.querySelector(".copy");
const copiedLink = document.querySelector(".shortened-link").closest("a");
const shortenedLink = document.querySelector(".shortened-link");
/*const API = new FetchWrapper('')*/

/*This places the html segment that contains the original and shortened links*/
shortenIt.addEventListener("click", () => {
  if (urlInput.value !== "") {
    shortenedLinks.insertAdjacentHTML(
      `beforeend`,
      `<div class="shortened-div">
        <p class="original-link">${urlInput.value}</p>
        <div>
          <a class="shortened-link">placeholder</a>
          <button class="copy" onclick="copyContent()">
           Copy
          </button>
        </div>
       </div>`
    );
    urlInput.value = "";
  }
});

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(copiedLink.innerHTML);
    alert("Copied: " + copiedLink.innerHTML);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
    alert("Oops, something went wrong.");
  }
};
