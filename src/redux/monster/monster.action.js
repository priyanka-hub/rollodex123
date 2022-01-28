import { monsterActionTypes } from "./monster-type";
export const searchMonster=()=>
({
type:monsterActionTypes.SEARCH_MONSTER,
payload:username
})