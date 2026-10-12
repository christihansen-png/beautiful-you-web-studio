

function selectCard(card) {
  card.classList.toggle("service--active");
}

function contact(event) {
  event.preventDefault();
  emailjs.sendForm(
    "service_beautiful",
    "template_h4ftgzz",
    event.target,
    'BTkhjk-8XBvZ_yBUr' 
  ).then(() => {alert("Thank you,🦋 Chat soon!"); event.target.reset();}).catch(() => {
    alert("The email service is temporarily unavailable. Please contact me directly at code26beautifulyou@gmail.com")
  })
}