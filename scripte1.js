const notificationContainer = document.getElementById("notification-container");

const displayNotification = (color) => {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.style.backgroundColor = color;
  notification.textContent = `Mon Projet 4 ${color}`;
   notificationContainer.appendChild(notification);

   setTimeout(() => {
     notification.remove();
   }, 1000);
 };

   document.querySelectorAll(".btn").forEach((btn) => {
   btn.addEventListener("click", (event) => {
    const color = event.target.classList[1];
    displayNotification(color);
  });
});

