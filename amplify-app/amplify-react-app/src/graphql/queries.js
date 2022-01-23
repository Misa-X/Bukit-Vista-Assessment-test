/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMovies = /* GraphQL */ `
  query GetMovies($id: ID!) {
    getMovies(id: $id) {
      id
      title
      description
      genre
      release_date
      file_path
      likes
      production
      createdAt
      updatedAt
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $filter: ModelMoviesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        genre
        release_date
        file_path
        likes
        production
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
