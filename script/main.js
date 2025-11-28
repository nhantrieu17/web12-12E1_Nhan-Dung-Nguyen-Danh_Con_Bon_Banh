let myIndex = 0;
let slides;

function carousel() {
  if (!slides || slides.length === 0) return;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  myIndex = (myIndex + 1) % slides.length;
  slides[myIndex].style.display = "block";
  setTimeout(carousel, 4000);
}

function myFunction() {
  const x = document.getElementById("navDemo");
  if (x) {
    x.classList.toggle("w3-show");
  }
}

function toggleSearch() {
  const form = document.getElementById("searchForm");
  if (form) {
    form.classList.toggle("w3-hide");
  }
}

function openTicketModal(eventName) {
  document.getElementById("eventName").textContent = eventName;
  document.getElementById("ticketModal").style.display = "block";
  document.getElementById("ticketModal").setAttribute("aria-hidden", "false");
}

function closeTicketModal() {
  document.getElementById("ticketModal").style.display = "none";
  document.getElementById("ticketModal").setAttribute("aria-hidden", "true");
}

function handleTicketSubmit(event) {
  event.preventDefault();
  alert("Payment processing not implemented. This is a demo.");
  closeTicketModal();
}

window.onclick = function (event) {
  const modal = document.getElementById("ticketModal");
  if (event.target === modal) {
    closeTicketModal();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  slides = document.getElementsByClassName("mySlides");
  carousel();
});
function goToContact() {
  closeTicketModal();
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
}
