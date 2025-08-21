import Swal from "sweetalert2";
import confetti from "canvas-confetti";

export default function WelcomeAlert() {
  confetti({
    particleCount: 3000,
    spread: 360,
    origin: { y: 0.6 },
    colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#000000"],
  });

  Swal.fire({
    title: "Parabéns!",
    text: "Você está inciando uma jornada pela web moderna",
    icon: "success",
    confirmButtonText: "Vamos lá!",
  });
}
