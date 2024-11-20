const circle = document.querySelector("#circle");
const i = document.querySelector("#circle i");
const form = document.querySelector("#form")
const box = document.querySelector("#box")
const submit = document.querySelector("#submit")
const cancel = document.querySelector("#cancel")
const user = document.querySelector("#user")
const deleteuser = document.querySelector("#deleteuser")
const yes = document.querySelector("#yes")
const no = document.querySelector("#no")


const colors = [
  { backgroundColor: "#40E0D0", color: "white" },
  { backgroundColor: "#FF7F50", color: "black" },
  { backgroundColor: "#800080", color: "blue" },
  { backgroundColor: "#DE3163", color: "yellow" },
  { backgroundColor: "#6495ED", color: "red" },
];

function getcolors() {
  return Math.floor(Math.random() * colors.length)
}
i.addEventListener("click", () => {
  form.style.display = "block"
})
submit.addEventListener("click", () => {
  if (user.value === "") {
    alert("Please Enter Your Name!")
  }
  else {
    form.style.display = "none";
    const span = document.createElement("span");
    span.classList = "avatar";
    span.innerHTML = user.value[0];
    span.style.textTransform = "capitalize";
    let colorValue = colors[getcolors()];
    span.style.backgroundColor = colorValue.backgroundColor;
    span.style.color = colorValue.color;

    span.addEventListener("click",()=>
    {
      deleteuser.style.display = "block"
      yes.addEventListener("click", ()=> {
        span.remove();
        deleteuser.style.display = "none";
    })

    no.addEventListener("click",  ()=> {
        deleteuser.style.display = "none"
    })
    })

    const crossicon = document.createElement("i")
    crossicon.classList.add("fa-solid", "fa-circle-xmark")
    span.append(crossicon)
    user.append(span)
    box.append(span)
    user.value = ""
  }
})
cancel.addEventListener("click", () => {
  form.style.display = ""
  user.value = ""
})








