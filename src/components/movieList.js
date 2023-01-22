import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="movie-list">
            <div className="col-sm" id="movie">
              <Movie
                name="The Menu"
                image="https://i.ytimg.com/vi/LpUbk70YZd8/movieposter_en.jpg"
                genre={"Comedy | Horror | Thriller"}
                synopsis="A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises."
                reviews={
                  '"Splicing horror and comedy with skill and delight, the movie is a satire of class, privilege, and pretension that\'s also at its core a supremely entertaining story"'
                }
              />
            </div>
            <div className="col-sm" id="movie">
              <Movie
                name="Army of Darkness"
                image="https://m.media-amazon.com/images/M/MV5BODcyYzM4YTAtNGM5MS00NjU4LTk2Y2ItZjI5NjkzZTk0MmQ1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
                genre={"Comedy | Horror"}
                synopsis="A sardonic hardware store clerk is accidentally transported to 1300 A.D., where he must retrieve the Necronomicon and battle an army of the dead so he can return home."
                reviews={
                  '"The demented madcap of Army of Darkness marked Sam Raimi’s true entrance into Hollywood-sized filmmaking"'
                }
              />
            </div>
            <div className="col-sm" id="movie">
              <Movie
                name="Goodfellas"
                image="https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                genre={"Biography | Crime | Drama"}
                synopsis="The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate."
                reviews={
                  '"Complex, volatile, ironic and disquieting, Scorsese\'s Goodfellas is a masterly achievement in intense observation."'
                }
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="movie-list">
            <div className="col-sm" id="movie">
              <Movie
                name="Titanic"
                image="https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
                genre={"Drama | Romance"}
                synopsis="A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
                reviews={
                  '"One of the greatest disaster films ever and certainly the one truly genuine blockbuster movie of the 90s."'
                }
              />
            </div>
            <div className="col-sm" id="movie">
              <Movie
                name="Jurassic Park"
                image="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg"
                genre={"Action | Adventure | Sci-Fi"}
                synopsis="A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose."
                reviews={
                  '"This universally loved adventure hit is the perfect movie. From the great action scenes to the beautiful scenery shots, there is nothing not to like. Every scene has been put together with care and it really shows."'
                }
              />
            </div>
            <div className="col-sm" id="movie">
              <Movie
                name="Stepbrothers"
                image="https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                genre={"Comedy"}
                synopsis="Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry."
                reviews={
                  '"One of those films that is impossible to rate highly, but impossible to not recommend."'
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
