
const Card = ( { data }) => {

// 1. Tier
// 2. Rank
// 3. Summoner Name
// 4. League Points
// 5. Wins
// 6. Losses
// 7. Win ratio 

    
        // || data.queueType !== 'RANKED_SOLO_5X5'
        let temp = '';
        if (data === null || data.length === 0 || data === undefined )
        {
            temp = 'mykonos';
        }   
        else {
            temp = data[0].tier;
        }

    return (
        <div>
            <h1>{temp}</h1>
        </div>
    );
}

export default Card;