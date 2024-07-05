import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery(
        'super-heros',      // Unique key
        fetchSuperHeroes,   // Fetcher function
        {                   // Options or configurations to tweak its behaviour
            onSuccess,
            onError,
            /*
            enabled: false, // disabled fetching on mount using enabled flag set to false
            
            cacheTime: 5000, // default - 5 min
            staleTime: 5000, // default - 0 min
            refetchOnMount: true, // default - true. values can be true, false. 'always'
            refetchOnWindowFocus: true, // default - true, false - will not refetch the data on window focus. values can be true, false. 'always'
            refetchInterval: 2000, // default - false, auto retching will be paused if window is not in focus.
            refetchIntervalInBackground: true, // allows you to fetch the data in regular intervals even window is not in focus.
            */
        //    select: (data) => {
        //     console.log('Data transfermation');
        //     const superHeroNames = data.data.map(hero => hero.name);
        //     return superHeroNames;
        //    }
        });

    // useQuery('super-heros', fetchSuperHeroes);
}
