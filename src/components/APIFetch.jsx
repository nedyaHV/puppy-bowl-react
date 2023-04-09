const cohort = "2303-FTB-ET-WEB-FT-REACT"
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/`;


export const fetchAllPlayers = async () => {
    
      const response = await fetch(`${APIURL}players`);
      const result = await response.json();
      console.log(result.data.players)
      return (result.data.players)
        
  }
