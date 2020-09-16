var question = [
  "Bạn là mẫu người?",
  "Màu sắc ưa thích của bạn?",
  "Món ăn ở căn tin?",
  "Góc ở Năng Khiếu?",
  "Trong làm việc nhóm, bạn là:",
];

var question_image = ["", "", "", "img/nk_corner.jpeg", "img/nk_people.jpeg"];

var answer_sample = [
  ["Hướng nội", "Hướng ngoại"],
  ["Đỏ", "Cam", "Vàng", "Lục", "Lam", "Chàm", "Tím", "Không có", "Tất cả"],
  [
    "Xôi",
    "Bún thịt nướng",
    "Thạch dừa",
    "Nui chiên",
    "Cơm",
    "Mì",
    "Sandwich",
    "Burger",
    "Trà đá",
  ],
  [
    "Hành lang tòa A",
    "Hội trường",
    "Hành lang tòa B",
    "Nhà vệ sinh",
    "Phòng máy",
    "Lớp của bạn",
    "Ghế đá sân trường",
    "Căn tin",
    "Phòng giám thị",
  ],
  ["Leader gánh team", "Tay sai vặt", "AFK", "Chat rất nhiều"],
];

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

var big_wrapper = document.getElementsByClassName("big-wrapper")[0];

function setUpQuest(statement, index) {
  //create all the element for the new slide
  var new_slide = document.createElement("div");
  new_slide.className += "swiper-slide";
  var new_question_container = document.createElement("div");
  new_question_container.className += "question-container";
  var new_question_statement = document.createElement("p");
  new_question_statement.className += "question";
  new_question_statement.innerHTML = statement;
  var new_answer_container = document.createElement("div");
  new_answer_container.className += "answer-container";
  var new_small_container = document.createElement("div");
  new_small_container.className += "swiper-container-small";
  var new_wrapper = document.createElement("div");
  new_wrapper.className += "swiper-wrapper";
  answer_sample[index].forEach((element) => {
    var new_ans_slide = document.createElement("div");
    new_ans_slide.className += "swiper-slide";
    new_ans_slide.className += " small";
    var option = document.createElement("p");
    option.className = "option";
    option.innerHTML = element;
    new_ans_slide.appendChild(option);
    new_wrapper.appendChild(new_ans_slide);
  });
  // insert image
  var new_question_image = document.createElement("img");
  new_question_image.src = question_image[index];
  new_question_image.className = "question-image";

  var new_prev = document.createElement("div");
  new_prev.setAttribute("id", "prevBut");
  new_prev.className = "swiper-button-prev";
  var new_next = document.createElement("div");
  new_next.setAttribute("id", "nextBut");
  new_next.className = "swiper-button-next";
  new_small_container.appendChild(new_wrapper);
  new_small_container.appendChild(new_prev);
  new_small_container.appendChild(new_next);
  new_answer_container.appendChild(new_small_container);
  //Time to append all of it!
  new_question_container.appendChild(new_question_statement);
  new_question_container.appendChild(new_question_image);
  new_slide.appendChild(new_question_container);
  new_slide.appendChild(new_answer_container);

  //check that last slide of the question
  if (index == question.length - 1) {
  }
  big_wrapper.appendChild(new_slide);
}

question.forEach(setUpQuest);

var mySwiper = new Swiper(".swiper-container-big", {
  // Optional parameters
  direction: "horizontal",
  nested: true,
  effect: "fade",
  speed: 300,
  navigation: {
    nextEl: "#nextQuest",
  },
  simulateTouch: false,
  on: {
    transitionEnd: function () {
      mySwiper.removeSlide(mySwiper.previousIndex - 1);
    },
  },
});

var mySwiperSmall = new Swiper(".swiper-container-small", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 200,
  navigation: {
    nextEl: "#nextBut",
    prevEl: "#prevBut",
  },
});

function showResult() {
  var result = Math.floor(Math.random() * 16);
  var logo = `img/${clubs[result][0]}.png`;
  var new_slide = document.createElement("div");
  new_slide.className += "swiper-slide logo-slide";
  var result_container = document.createElement("div");
  result_container.className += "result-container";
  var result_statement = document.createElement("h2");
  result_statement.className += "result-statement";
  result_statement.innerHTML = "Câu lạc bộ phù hợp với bạn là:";
  var result_club = document.createElement("h1");
  result_club.className += "result";
  result_club.innerHTML = clubs[result][1];
  var result_image = document.createElement("img");
  result_image.src = logo;
  result_image.addEventListener("click", function (event) {
    window.open(clubs[result][2], "_blank");
  });
  result_image.className += "result-logo";
  var restart_button = document.createElement("h3");
  restart_button.innerHTML = "Bắt đầu lại";
  restart_button.addEventListener("click", function () {
    window.location = "quiz.html";
  });
  result_container.appendChild(result_statement);
  result_container.appendChild(result_image);
  result_container.appendChild(result_club);
  result_container.appendChild(restart_button);
  new_slide.appendChild(result_container);
  big_wrapper.appendChild(new_slide);
}

showResult();

var ans_slides = document.getElementsByClassName("option");
for (var index = 0, len = ans_slides.length; index < len; index++) {
  element = ans_slides[index];
  element.addEventListener("click", function (event) {
    mySwiper.slideNext();
    this.parentNode.style.visibility = "hidden";
  });
}
