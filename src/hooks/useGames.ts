import useData from "./useData";

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

const useGames = () => useData<Game>('/games')
export default useGames;