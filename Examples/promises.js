// async function getData() {
//   let resultFromServer = await fetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   console.log(await resultFromServer.json());
// }
// getData();
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
