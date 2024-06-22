import {IMovie} from "./IMovie";

export interface IMoviePaginated{
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number,
    // genre_ids: number[]
}