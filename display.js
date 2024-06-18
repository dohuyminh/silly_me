function removeButton() {
    
    // change the headers :ppp
    let tomfoolery = document.getElementById("surprise");
    tomfoolery.innerText = "I have already altered that mouse click to enter your name (｀・ω・´)";
    let binding = document.getElementById("hehehe");
    binding.innerText = "Btw ur bound to this contract, and ur obliged to come with me (cheesecake included ofc)"

    // remove the button first to get space for image
    let button = document.getElementById("blehp");
    button.remove();

    // display the image
    let contract = document.getElementById("contract");
    contract.style = null;
}