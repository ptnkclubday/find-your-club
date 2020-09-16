clubs = [
  ["COLOSSEUM", "The Colosseum", "https://www.facebook.com/thecolosseum.ptnk"],
  ["DMC", "Define Magic Club", "https://www.facebook.com/DefineMagicClub"],
  ["DVN", "Đội văn nghệ", "https://www.facebook.com/doivannghetruongptnk"],
  ["ESC", "English Speaking Club", "https://www.facebook.com/ESC.HSG"],
  ["FZONE", "F-Zone", "https://www.facebook.com/fzonesalute"],
  [
    "HARMONICA",
    "PTNK Harmonica Club",
    "https://www.facebook.com/PtnkHarmonica",
  ],
  ["JUST", "Just Media", "https://www.facebook.com/JUstmedia.ptnk"],
  ["MIB", "Mib", "https://www.facebook.com/mibcomeflywithus"],
  [
    "MTNK",
    "Mặt trời năng khiếu",
    "https://www.facebook.com/mat.troi.nang.khieu",
  ],
  ["NKSC", "PTNK Steam Club", "https://www.facebook.com/ptnksteam"],
  ["NKX", "Năng Khiếu Express", "https://www.facebook.com/nangkhieuexpress"],
  ["PARADICE", "paradice", "https://www.facebook.com/paradice.boardgameclub"],
  [
    "PPC",
    "PTNK Photography Club",
    "https://www.facebook.com/ptnkphotographyclub",
  ],
  ["PTNKD", "PTNK Deutschklub", "https://www.facebook.com/ptnkdeutschklub/"],
  ["SHARK", "Shark Club", "https://www.facebook.com/sharkclubptnk"],
  ["TPT", "Tổ Phát Thanh", "https://www.facebook.com/tophatthanhptnk"],
];

clubs.forEach((club) => {
  club_file = "./img/" + club[0] + ".png";
  var club_slide = document.createElement("div");
  club_slide.className = "swiper-slide";
  club_slide.style.backgroundImage = "url(" + club_file + ")";
  wrapper = document.getElementsByClassName("swiper-wrapper")[0];
  wrapper.appendChild(club_slide);
});

var swiper = new Swiper(".swiper-container", {
  effect: "flip",
  grabCursor: true,
  autoplay: {
    delay: 1000,
  },
  loop: true,
});

const button = document.getElementById("start");
button.addEventListener("click", function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;
  let ripple = document.createElement("span");
  ripple.className = "ripple-span";
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  this.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 1000);
  setTimeout(() => {
    window.location = "quiz.html";
  }, 1000);
});
