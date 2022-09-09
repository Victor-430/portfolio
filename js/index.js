document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 200 && document.documentElement.offsetWidth + 17 > 817) {
    document.getElementById("html").style.width = "85%";
    document.getElementById("css").style.width = "65%";
    document.getElementById("js").style.width = "50%";
    document.getElementById("jquery").style.width = "30%";
    document.getElementById("bootstrap").style.width = "50%";
  } else if (
    document.documentElement.offsetWidth + 17 < 817 &&
    document.documentElement.scrollTop > 600
  ) {
    document.getElementById("html").style.width = "85%";
    document.getElementById("css").style.width = "65%";
    document.getElementById("js").style.width = "50%";
    document.getElementById("jquery").style.width = "30%";
    document.getElementById("bootstrap").style.width = "50%";
  }
});

const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

console.log(document.documentElement.scrollTop);
