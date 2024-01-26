let el = document.getElementById("scr"),
  height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let e = document.documentElement.scrollTop;
  el.style.width = `${(e / height) * 100}%`;
});
let eleLi = document.querySelectorAll(".navbar-nav li");
function removeActive() {
  eleLi.forEach((e) => {
    e.classList.remove("active"), this.classList.add("active");
  });
}
eleLi.forEach((e) => {
  e.addEventListener("click", removeActive);
});
let watch = document.querySelector(".ved"),
  vide = document.querySelector(".ved-watch"),
  cancel = document.querySelector(".ex");
watch.addEventListener("click", () => {
  (vide.style.display = "block"), (window.scrollTo.offset = "none");
}),
  cancel.addEventListener("click", () => {
    vide.style.display = "none";
  });
let btnTop = document.querySelector(".go-top");
window.addEventListener("scroll", () => {
  window.scrollY >= 450
    ? ((btnTop.style.right = "19px"),
      btnTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }))
    : (btnTop.style.right = "-109px");
});
let open = document.querySelector(".tok"),
  can = document.querySelector(".can"),
  videoTwo = document.querySelector(".video-two");
open.addEventListener("click", () => {
  videoTwo.style.display = "block";
}),
  can.addEventListener("click", () => {
    videoTwo.style.display = "none";
  });
let nums = document.querySelectorAll(".nums .num"),
  to = document.getElementById("top"),
  section = document.querySelector(".three"),
  started = !1;
function startcounter(e) {
  let t = e.dataset.goal,
    l = setInterval(() => {
      e.textContent++, e.textContent == t && clearInterval(l);
    }, 500 / t);
}
window.onscroll = function () {
  window.scrollY >= to.offsetTop &&
    (started || nums.forEach((e) => startcounter(e)), (started = !0));
};
let btnMenu = document.querySelectorAll(".btn-menu p"),
  img = document.querySelectorAll(".eat img"),
  div = document.querySelectorAll(".eat .con"),
  textcon = document.querySelectorAll(".text-con div");
function removeActive() {
  btnMenu.forEach((e) => {
    e.classList.remove("post"), this.classList.add("post");
  });
}
function manageImage() {
  div.forEach((e) => {
    e.style.display = "none";
  }),
    textcon.forEach((e) => {
      e.style.display = "none";
    }),
    document.querySelectorAll(this.dataset.menu).forEach((e) => {
      e.style.display = "inline-block";
    });
}
btnMenu.forEach((e) => {
  e.addEventListener("click", removeActive),
    e.addEventListener("click", manageImage);
});
