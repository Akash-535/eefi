
function navMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');

    const navBtn = document.getElementById('navBtn');
    navBtn.classList.toggle('active');
    document.body.classList.toggle("overflow-hidden")
}
// auto text
function typingEffect(elementId, text, speed) {
    const element = document.getElementById('ecoSystem');
    let index = 0;
    let textLength = text.length;

    function type() {
        if (1 < textLength) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            
            index = 0;
            element.textContent = "";
        }
    }

    setInterval(type, speed);
}
const textToType = "     An ecosystem of unique yield strategies that help you earn yield, amplify, and stretch it across all market conditions ";
typingEffect('typing-container', textToType, 70);
