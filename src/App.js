import "./styles.css";
import React, { useState } from "react";
var movie = {
  "Psychological Thriller": [
    {
      name: "Se7en",
      synopsis:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      IMDBrating: "8.6",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: " The Silence of the Lambs",
      synopsis:
        "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      IMDBrating: "8.6",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "The Butterfly Effect ",
      synopsis:
        "Evan Treborn suffers blackouts during significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life by reading his journal.",
      IMDBrating: "7.6",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BODNiZmY2MWUtMjFhMy00ZmM2LTg2MjYtNWY1OTY5NGU2MjdjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Zodiac",
      synopsis:
        "In the late 1960s/early 1970s, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.",
      IMDBrating: "7.7",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Glass",
      synopsis:
        "Security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities.",
      IMDBrating: "6.6",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMTY1OTA2MjI5OV5BMl5BanBnXkFtZTgwNzkxMjU4NjM@._V1_FMjpg_UX1000_.jpg"
    }
  ],

  Comedy: [
    {
      name: "Dumb and Dumber",
      synopsis:
        "After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen to return it.",
      IMDBrating: "7.3",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "The Mask",
      synopsis:
        "Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask.",
      IMDBrating: "6.9",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BOWExYjI5MzktNTRhNi00Nzg2LThkZmQtYWVkYjRlYWI2MDQ4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "The Hangover",
      synopsis:
        "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
      IMDBrating: "7.7",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Kick-Ass",
      synopsis:
        "Dave Lizewski is an unnoticed high school student and comic book fan who one day decides to become a superhero, even though he has no powers, training or meaningful reason to do so.",
      IMDBrating: "7.6",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMzNzEzMDYxM15BMl5BanBnXkFtZTcwMTc0NTMxMw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "The Dictator",
      synopsis:
        "The heroic story of a dictator who risked his life to ensure that democracy would never come to the country he so lovingly oppressed.",
      IMDBrating: "6.4",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNTlkOWYzZDYtNzQ1MS00YTNkLTkyYTItMjBmNjgyMDBlMjI4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg"
    }
  ],

  "Sci-Fi": [
    {
      name: "Inception",
      synopsis:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      IMDBrating: "8.8",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "The Matrix",
      synopsis:
        "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      IMDBrating: "6.4",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Interstellar",
      synopsis:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      IMDBrating: "8.6",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Eternal Sunshine of the Spotless Mind",
      synopsis:
        "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
      IMDBrating: "8.3",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Upside Down",
      synopsis:
        "Adam and Eden fell in love as teens despite the fact that they live on twinned worlds with gravities that pull in opposite directions. Ten years after a forced separation, Adam sets out on a dangerous quest to reconnect with his love.",
      IMDBrating: "6.4",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMTgzNzM4ODMwNV5BMl5BanBnXkFtZTcwNDU1MzEwOQ@@._V1_FMjpg_UX1000_.jpg"
    }
  ],
  Mystery: [
    {
      name: "The Usual Suspects",
      synopsis:
        "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
      IMDBrating: "8.5",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Now You See Me",
      synopsis:
        "An F.B.I. Agent and an Interpol Detective track a team of illusionists who pull off bank heists during their performances, and reward their audiences with the money.",
      IMDBrating: "7.2",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "L.A. Confidential",
      synopsis:
        "As corruption grows in 1950s Los Angeles, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice.",
      IMDBrating: "8.2",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWRhOS00MjBmLTkzMDUtMTdjYzkyMmQxZTJlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "The Prestige",
      synopsis:
        "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
      IMDBrating: "8.5",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "The Girl with the Dragon Tattoo",
      synopsis:
        "Journalist Mikael Blomkvist is aided in his search for a woman who has been missing for forty years by Lisbeth Salander, a young computer hacker.",
      IMDBrating: "7.8",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_FMjpg_UX1000_.jpg"
    }
  ]
};

export default function App() {
  var [movies, setMovies] = useState("Psychological Thriller");
  function clickHandler(event) {
    setMovies(event);
  }
  return (
    <div className="App">
      <div className="head">
        <h2 className="navi">Movie</h2>

        {Object.keys(movie).map((event) => (
          <ul
            style={{ display: "inline-box" }}
            onClick={() => clickHandler(event)}
          >
            {event}
          </ul>
        ))}

        <div style={{ color: "white" }}>
          <ul
            style={{
              listStyleType: "none"
            }}
          >
            {movie[movies].map((recomendation) => (
              <li
                key={recomendation.name}
                style={{
                  color: "white"
                }}
              >
                <div
                  style={{
                    width: "40%",
                    padding: "20px",
                    margin: "40px",
                    alignItems: "center"
                  }}
                >
                  <h2 className="title">{recomendation.name}</h2>
                  <img alt="" src={recomendation.imgUrl} />
                  <div className="synopsis">{recomendation.synopsis}</div>
                  <h3 className="IMDB">Ratings: {recomendation.IMDBrating}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
