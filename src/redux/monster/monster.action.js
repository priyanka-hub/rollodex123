import { monsterActionTypes } from "./monster-type";
export const searchMonster=(username)=>
({
type:monsterActionTypes.SEARCH_MONSTER,
payload:username
})