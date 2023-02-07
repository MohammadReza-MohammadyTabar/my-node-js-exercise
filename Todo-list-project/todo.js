const todosList = document.querySelector(".todosList");
let selected = [];
const todosArray = [];
async function getTask() {
  try {
    const response = await axios.get("/tasks");
    const tasks = response.data.map((task, index) => {
      // console.log(task.task);
      addLi(task.task, task.id);
    });
  } catch (err) {
    document.querySelector("#stat").textContent = err;
  }
}
getTask();
function addLi(str, index) {
  let li = document.createElement("li");
  li.innerText = str;
  li.setAttribute("value", index);
  todosList.append(li);
  li.addEventListener("click", (e) => {
    if (selected.indexOf(e.target) === -1) {
      selected.push(e.target);
      li.style.backgroundColor = "green";
      // console.log(selected);
    } else {
      selected.splice(selected.indexOf(e.target), 1);
      li.style.backgroundColor = "white";
      // console.log(selected);
    }
  });
}
todosArray.forEach((job) => {
  addLi(job);
});
let btnRemove = document.querySelector(".remove");
btnRemove.addEventListener("click", async () => {
  const response = await axios
    .delete(`/tasks/delete-task/${selected[0].value}`)
    .then((response) => {
      console.log(response);
    });
  console.log(selected[0].value);
  selected.forEach((Element) => {
    Element.remove();
  });
});

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelector("#stat").textContent = "";

  if (e.target.taskName.value === "") {
    document.querySelector("#stat").textContent = "plase enter a task";
    return;
  }
  try {
    const response = await axios
      .post("/tasks", {
        task: e.target.taskName.value,
      })
      .then((response) => {
        console.log(response.data.task);

        addLi(response.data.task, response.data.id);
      });
  } catch (err) {
    document.querySelector("#stat").textContent = err;
  }
});
