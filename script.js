// Auto typing text 👇🏻
const autotype = document.getElementById('autoTypingText');

let typewriter = new Typewriter(autotype, {
    strings: [
        "Frontend Developer",
        "देसी Programmer",
        "UI Designer",
        "बेरोजगार Engineer"
    ],
    autoStart: true,
    loop: true,
    delay: 100,
    pauseFor: 1000,

});


// Go to top button 👇🏻

const goTop = document.querySelector(".gotopbtn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        goTop.classList.add("active");
    } else {
        goTop.classList.remove("active");
    }
})

// Contact Me email code 👇🏻

function sendEmail() {

    let name = document.getElementById("name").value
    // let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "jatinmehra859@gmail.com",
        Password: "8AC7D03AED46B85C591D14C0165CFE29DFF3",
        To: "jatinmehrajm859@gmail.com",
        From: "jatinmehra859@gmail.com",
        Subject: "Mail from portfolio contact form",
        Body: "Name :" + name + "<br/>  User Mail :" + email + "<br/> Subject :" + subject + "<br/> Message :" + message
    }).then(
        message => alert(message)
    );

}

// Scroll Reveal Animation 👇🏻👇🏻

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.navbar', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.pro', { delay: 100, origin: 'right' });
ScrollReveal().reveal('.headscroll', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.intro-text', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.section-img', { delay: 100, origin: 'right' });
ScrollReveal().reveal('.inner-desc', { delay: 100, origin: 'bottom' });
