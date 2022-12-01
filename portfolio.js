const trigger = document.getElementById('card1');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close');

trigger.onclick = () =>{
    popup.style.display = 'block';
}

closePopup.onclick= () =>{
    popup.style.display = 'none';
}
