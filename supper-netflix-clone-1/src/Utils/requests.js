const API_KEY = process.env.REACT_APP_API_KEY;

const requests ={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&/language=en-us`,
    fetchNetflixOrginals:`/discover/tv?api_key=${API_KEY}&/with-network=123`,
    fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with-genres=28`,
    fetchComedyMovies:`discover/movie?api_key=${API_KEY}&with-genres=35`,
    fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&with-genres=27`,
    fetchRomanceMovies:`discover/movies?api_key=${API_KEY}&with-genres=10749`,
    fetchDocumenteries:`discover/movies?api_key=${API_KEY}&with-genres=99`,
    fetchTvShow:`tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requests;