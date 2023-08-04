import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search:gameQuery.search
        
      },
    },
    [gameQuery]
  );
export default useGames;
