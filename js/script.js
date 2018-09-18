var feedback = document.querySelector(".contacts-info");
var button = feedback.querySelector(".contacts-button");
var wrap = document.querySelector(".modal-feedback-wrap");
var modal = document.querySelector(".modal-feedback");
var form = document.querySelector(".feedback-form");
var close = document.querySelector(".modal-close");
var userName = modal.querySelector("[name = user-name]");
var userEmail = modal.querySelector("[name = email3]");
var userText = modal.querySelector("[name = text-field]");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";


try {
    storageName = localStorage.getItem("userName");
    storageEmail = localStorage.getItem("userEmail");
} catch (err) {
    isStorageSupport = false;
}

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
  if (modal.classList.contains("modal-error")) {
    modal.classList.remove("modal-error");
    }
});

form.addEventListener("submit", function(evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    console.log("Заполните, пожалуйста, все поля");
    modal.classList.remove("modal-error");
      modal.offsetWidth = modal.offsetWidth;
      modal.classList.add("modal-error");
    }
  else {
        if (isStorageSupport) {
          localStorage.setItem("userName", userName.value);
      }
        if (isStorageSupport) {
          localStorage.setItem("userEmail", userEmail.value);
      }
    }
});
