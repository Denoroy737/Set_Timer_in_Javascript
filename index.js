console.log("Hello-World");
let time = new Date();
let current_time = time.getHours() + ":" + time.getMinutes();
let times_heading = document.getElementById("times-heading");
times_heading.innerText = current_time;
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", () => {
  let addtime = document.getElementById("addtime").value;
  let addtext = document.getElementById("addtext").value;
  let card = document.getElementById("card");
  card.innerHTML += `<!-- card -->
    <div class="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
      <!-- text information -->
      <div class="p-4">
        <small class="text-blue-400 text-xs">by js-timer</small>
        <h1 class="text-2xl font-medium text-slate-600 pb-2">${addtime}</h1>
        <p class="text-sm tracking-tight font-light text-slate-400 leading-6">${addtext}</p>
      </div>
    </div>`;
  addtext = document.getElementById("addtext").value = "";
  addtime = document.getElementById("addtime").value = "";
});
