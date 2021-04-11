import React from "react";

const Movie = ({ movie }) => {
  return (
    <section className="text-indigo-200 body-font p-5 bg-gray-900 cursor-pointer">
      <div className="mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-1/4 md:w-1/2 w-5/6 sm:block lg:ml-6 ml-0">
          <img
            className="object-cover object-center rounded"
            alt="movie_poster"
            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
          <figure className="visible">
            <div className="">
              <div className="pt-10 px-2 sm:px-6">
                <span className="inline-block m-1 py-1 px-2 rounded-full bg-green-600 text-white  text-xs font-bold tracking-widest mb-2">
                  Action
                </span>
                <span className="inline-block m-1 py-1 px-2 rounded-full bg-green-600 text-white  text-xs font-bold tracking-widest mb-2">
                  Drama
                </span>
                <span className="inline-block m-1 py-1 px-2 rounded-full bg-yellow-400 text-white  text-xs font-bold tracking-widest mb-2">
                  Popularity: {movie.popularity}
                </span>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
                  {movie.title}
                </h1>
                <p className="text-indigo-200 text-base pb-6 text-justify">
                  {movie.overview}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center pb-12">
                    <span className="ml-1 py-1 px-2 rounded-full bg-purple-400 text-white text-xs font-bold tracking-widest">
                      Vote average: {movie.vote_average}
                    </span>
                    <span className="ml-1 py-1 px-2 rounded-full bg-purple-400 text-white text-xs font-bold tracking-widest">
                      Votes: {movie.vote_count}
                    </span>
                  </div>
                </div>
                <p className="ml-1 py-1 px-2 rounded-full text-white text-l font-bold">
                  Release date: {movie.release_date}
                </p>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Movie;
