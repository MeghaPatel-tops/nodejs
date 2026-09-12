import axios from 'axios'

async function getTotalGoals(team, year) {
 var count = 0;
    for(var k=1;k<=2;k++)
    {
    const result = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team${k}=${team}`)
    const pages = result.data.total_pages
   
    for(var i=1;i<=pages;i++)
    {
         const result1 = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team${k}=${team}&page=${i}`)
            
         
         result1.data.data.map(ele=>{
            
                count+= k==1?+ele.team1goals:+ele.team2goals
                
            })
            
    }
   
    }
    return count
   
    
}

async function main() {
   

   
    const result = await getTotalGoals("Barcelona", 2011);


}

main()