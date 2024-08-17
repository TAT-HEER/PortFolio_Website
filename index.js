var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
for(tablink of tablinks){
tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents){
tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}


// <!-- --Contact Form--- -->
    const scriptURL = 'https://script.google.com/macros/s/AKfycby7Bm3kn_58lRHHlCMudV7bVKegiakhK1CdtH-J9rWuHUV349IGGQ3WrwVjpl-KWioxCQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg  = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Message sent successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
        form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
