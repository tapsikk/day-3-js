const msgContainer = document.querySelector(".msg-container");
console.log('====================================');
console.log(msgContainer);
console.log('====================================');

const addBtn = document.querySelector(".btn")
const handleButtonClick = () => {
   const msg = document.createElement("p");
    msg.classList.add("msg");
    msg.textContent = "Нове Повідомлення";
    msgContainer.appendChild(msg);    
}
addBtn.addEventListener("click", handleButtonClick)                                                              