var nameModal = document.getElementById("nameModal");
var nameInput = document.getElementById("nameInput");
var submitName = document.getElementById("submitName");
var welcomeMessage = document.getElementById("welcomeMessage");
var welcomeText = document.getElementById("welcomeText");
var audio = document.getElementById("myAudio");

// Handle name submission
submitName.onclick = function() {
    var name = nameInput.value;
    if (name) {
      alert("Selamat datang, " + name + "!");
      nameModal.style.display = "none";
                welcomeMessage.style.display = "block";
                audio.play ()
            } else {
                alert("Silakan masukkan nama Anda.");
            }
        }