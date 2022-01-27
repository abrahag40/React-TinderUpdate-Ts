import execute from ".";

const url = `https://rickandmortyapi.com/api/character/`


export const getCharacter = ( rand: any ) => execute({ route: `${url}${rand}` })