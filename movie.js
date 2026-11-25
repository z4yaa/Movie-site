const movies = [
  {
    name: "Signal",
    releaseDate: "Release date: 2016",
    rating: "⭐️ IMDb: 8.4",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCVi1bOFe2sJLRqkOBklSt5w7Nc0OZB9ybfKOkLjlWlOgWTKmizTFRVM&s=10",
  },
  {
    name: "Tunnel",
    releaseDate: "Release date: 2017",
    rating: "⭐️ IMDb: 8.2",
    img: "https://m.media-amazon.com/images/M/MV5BMjE3ODYwODE2OV5BMl5BanBnXkFtZTgwMjM5ODA2OTE@._V1_.jpg",
  },
  {
    name: "Defendant",
    releaseDate: "Release date: 2017",
    rating: "⭐️ IMDb: 8.0",
    img: "https://m.media-amazon.com/images/M/MV5BMTQzNjNkNDQtZDA4NS00ZWYxLWJhNzctODQ2NGVlZjc2ZjNkXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Voice",
    releaseDate: "Release date: 2017",
    rating: "⭐️ IMDb: 7.6",
    img: "https://m.media-amazon.com/images/M/MV5BNDYwNTQ4ZDMtMmEwYy00OTI1LThiZTAtNTUzMGVlZmY3ZjU2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Investigation Partners",
    releaseDate: "Release date: 2018",
    rating: "⭐️ IMDb: 8.1",
    img: "https://m.media-amazon.com/images/M/MV5BYzMzNmFhYTgtZWQyMS00MjZkLWJlZjEtMWJlYzIyMGE5MTA5XkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Watcher",
    releaseDate: "Release date: 2019",
    rating: "⭐️ IMDb: 7.7",
    img: "https://m.media-amazon.com/images/M/MV5BMzlmNTFiMTUtOWY1ZS00ODZhLTljN2ItZjhkNDViNWM0MjVlXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Confession",
    releaseDate: "Release date: 2019",
    rating: "⭐️ IMDb: 7.7",
    img: "https://m.media-amazon.com/images/M/MV5BNTVkMjlkYzYtMTQyOS00ZGNmLTk3YjAtYTBjOWVmYzQ5ZDg2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Black",
    releaseDate: "Release date: 2017",
    rating: "⭐️ IMDb: 7.8",
    img: "https://m.media-amazon.com/images/M/MV5BOWExYTM0MWEtZWUwMi00N2M5LTk1OWUtYTM4MTI2NGIyNjhmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "A Korean Odyssey",
    releaseDate: "Release date: 2017",
    rating: " ⭐️ IMDb: 7.9",
    img: "https://m.media-amazon.com/images/M/MV5BZGYxY2Y3M2UtMjFkNC00NjZhLThmNWQtMTQ2YmY0NWZhYmQwXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Tell Me What You Saw",
    releaseDate: "Release date: 2020",
    rating: "⭐️ IMDb: 7.6",
    img: "https://m.media-amazon.com/images/M/MV5BMDI5NzE5NWUtYzdkNy00YTU1LWJlNTktZGNiMzFlZTA0OTY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Class of Lies",
    releaseDate: "Release date: 2019",
    rating: "⭐️ IMDb: 7.6",
    img: "https://m.media-amazon.com/images/M/MV5BOWJmYTUxZTUtZWNjNS00MjU1LWI3NzMtMWMwMjkyNTU3ZWU4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Gap Dong",
    releaseDate: "Release date: 2014",
    rating: "⭐️ IMDb: 7.3",
    img: "https://m.media-amazon.com/images/M/MV5BY2U5N2Q0ZjctM2Q5YS00MWJmLWE5OGYtMzYzNThkOTFmZDFiXkEyXkFqcGc@._V1_.jpg",
  },
];
const container = document.getElementById("movie-container");
for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];

  const content = document.createElement("div");
  const title = document.createElement("p");
  const date = document.createElement("span");
  const score = document.createElement("span");
  const image = document.createElement("img");

  container.classList.add("container");
  content.classList.add("content");
  title.classList.add("title");
  date.classList.add("date");
  score.classList.add("score");
  image.classList.add("image");

  title.textContent = movie.name;
  date.textContent = movie.releaseDate;
  score.textContent = movie.rating;
  image.src = movie.img;

  content.appendChild(title);
  content.appendChild(date);
  content.appendChild(score);
  content.appendChild(image);
  container.appendChild(content);
}
