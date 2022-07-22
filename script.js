const Tlacidlo = document.getElementById("button1");

function UserKlikne() {
    alert("Stlačil si tlačidlo");
}

Tlacidlo.addEventListener("click", UserKlikne, false);