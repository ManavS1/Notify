const title = document.querySelector("#title");
const userNote = document.querySelector("#user-note");
const btn = document.querySelector("#btn");
const section = document.querySelector("section");

let i = 1;
btn.addEventListener("click", () => {
  if (
    title.value === "" ||
    userNote.value === "" ||
    userNote.value === " " ||
    title.value === " "
  ) {
    alert("Please Enter Something!");
  } else {
    let HTML = `<div class="notes">
            <h2 class="title">${i}. ${title.value.trim().slice(0, 20)}</h2>
            <p class="user-note">${userNote.value.trim().slice(0, 500)}</p>
            <button class="remove">REMOVE</button>
            </div>`;
    section.insertAdjacentHTML("beforeend", HTML);
    i++;
    // section.innerHTML += HTML;
  }
  // clearing the entered value by user
  title.value = "";
  userNote.value = "";

  let notes = document.querySelectorAll(".notes");
  notes.forEach((item) => {
    let remove = item.querySelector(".remove");
    remove.addEventListener("click", () => {
      section.removeChild(item);
      i--;
    });
  });
});
