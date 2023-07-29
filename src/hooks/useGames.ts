import useData from "./useData";
import { Genre } from "./useGenres";

export interface platform{
  id:number;
  name:string;
  slug:string
}
export interface Game {
  id: number;
  name: string;
  background_image:string
  parent_platforms:{platform:platform}[]
  metacritic:number
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = (genre:Genre|null) => useData<Game>('/games',{params:{genres:genre?.id}},[genre?.id])
export default useGames;