import axios from 'axios'
async function getNumDraws(year) {

    let totalDraws = 0;

    const result = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}`)

    let pages= result.data.total_pages;
    
   for (let i = 1; i <= pages; i++) {

        const response = await axios.get(
            `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&page=${i}`
        );

        response.data.data.map((match) => {

            if (match.team1goals == match.team2goals) {
                totalDraws++;
            }

        });
    }


    return totalDraws;
    
}

getNumDraws(2011);