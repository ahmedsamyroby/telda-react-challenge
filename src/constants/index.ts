import Genre from "../types/Genre";

export const API_KEY = process.env.REACT_APP_API_KEY;
export const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const BACKDROP_BASE_URL =
  "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces";

export const GENRES: Genre[] = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const GENRES_COLORS = [
  "#8E4162",
  "#A95C68",
  "#BF4F51",
  "#5A4B81",
  "#AA6F73",
  "#C27D38",
  "#8B5D33",
  "#5E4C4B",
  "#B3745F",
  "#8F5E7D",
  "#735D78",
  "#704C6D",
  "#5C6373",
  "#3D3A4B",
  "#967370",
  "#726A95",
  "#63595C",
  "#AD849A",
  "#785A5C",
];

export const GENRE_DEFINITION_MAP = Object.fromEntries(
  GENRES.map((genre, index) => [
    genre.id,
    {
      name: genre.name,
      color: GENRES_COLORS[index],
    },
  ])
);
