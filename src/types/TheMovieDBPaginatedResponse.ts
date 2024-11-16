type TheMovieDBPaginatedResponse<T> = {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
};

export default TheMovieDBPaginatedResponse;
