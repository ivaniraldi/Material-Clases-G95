const select = document.querySelector("#chars");
const div = document.querySelector("#renderChar");

const apiURL = `https://thronesapi.com/api/v2/Characters`;

const renderOptions = async () => {
  try {
    const res = await fetch(apiURL);
    const characters = await res.json();
    console.log(characters);
    let template = "";
    characters.forEach((e) => {
      template += `<option value="${e.id}">${e.fullName}</option>`;
    });
    select.innerHTML += template;
  } catch (error) {
    console.log(error);
  }
};

select.addEventListener("change", (evento) => {
  renderCharacter(evento.target.value);
});

const renderCharacter = async (id) => {
  const res = await fetch(apiURL + `/${id}`);
  const character = await res.json();
  let template = `    <div class="border rounded-md mx-40 border-2 border-orange-400 p-4 text-center">
        <h3 class="text-2xl">${character.fullName}</h3>
        <h4>${character.family}</h4>
        <div class="flex justify-center">

            <img class="rounded-md mt-4"  src="${character.imageUrl}" alt="${character.fullName}">
        </div>
    </div>`;

  div.innerHTML = template;
};

renderOptions();
