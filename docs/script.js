const text = "Desenvolvedora web";
const velocidade = 220; 
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-animation").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, velocidade);
  } else {
    setTimeout(() => {
      document.getElementById("typing-animation").innerHTML = '';
      i = 0;
      typeWriter();
    }, velocidade);
  }
}

typeWriter();


