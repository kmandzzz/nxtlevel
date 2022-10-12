// tooltip enviar email de cobrança
function enviarCobranca() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "E-mail enviado com sucesso",
  });
}

//atual data e hora de acesso

var date = new Date();
var current_date =
  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
var current_time =
  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
var date_time = current_date + " " + current_time;
var time = document.getElementById("hora");
time.innerHTML = date_time;

//notificações serão enviados por e-mail
function notificacaoEmail() {
  Swal.fire({
    title: "A partir de agora você será notificado por e-mail.",
    showClass: {
      popup: "animate__animated animate__fadeIn",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}

// SUPORTE: alert de e-mail enviado

function success() {
  alert("E-mail enviado com sucesso!");
}

//exibir senha

function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
