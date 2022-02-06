import React from 'react';

const List = () => {
    const games = [
        {
            id: 1,
            name: "cricket",
        },
        {
            id: 2,
            name: "football"
        },
        {
            id: 3,
            name: "badminton"
        }
    ]
    const mapGame = games.map(game => <h2 key={game.id}>{game.name}</h2>)
    return mapGame

    // keys in list helps react in identifying which element changes, added or removed
}

export default List;
