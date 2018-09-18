var feedback = document.querySelector(".contacts-info");
var button = feedback.querySelector(".contacts-button");
var wrap = document.querySelector(".modal-feedback-wrap");
var modal = document.querySelector(".modal-feedback");
var form = document.querySelector(".feedback-form");
var close = document.querySelector(".modal-close");
var userName = modal.querySelector("[name=user-name]");
var userEmail = modal.querySelector("[name=email3]");
var userText = modal.querySelector("[name=text-field]");
var storageName = localStorage.getItem("user-name");
var storageEmail = localStorage.getItem("email3");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-feedback-show");
  wrap.classList.add("modal-feedback-wrap-show");
  if (storageName && storageEmail) {
    userName.value = storageName;
    userEmail.value = storageEmail;
    userText.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-feedback-show");
  wrap.classList.remove("modal-feedback-wrap-show");
});

form.addEventListener("submit", function(evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    if (modal.classList.contains("modal-error")) {
      modal.classList.remove("modal-error");
    }
    modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    localStorage.setItem("user-name", userName.value);
    localStorage.setItem("email3", userEmail.value);
  }
});
