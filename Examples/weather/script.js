const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=b9dfcb266a194087baf171147241804&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value)
  console.log(result);
});

//http://api.weatherapi.com/v1/current.json?key=b9dfcb266a194087baf171147241804&q=London&aqi=yes
