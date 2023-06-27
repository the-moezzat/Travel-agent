const questionEl = document.querySelectorAll(".question");

questionEl.forEach(function (question) {
  question.addEventListener("click", function () {
    question.classList.toggle("active");
  });
});
