import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";
export const SEASON_SCHEDULE:Schedule[] = [
    {id:1,playingDate:new Date(2021,08,10),HomeTeam: 'Persija',
    AwayTeam: 'Bali United',HomeScore:3,AwayScore:2,RefName: "Joko",
    notes:'Pertandingan Overtime'},
    {id:2,playingDate:new Date(2021,08,11),HomeTeam: 'EVOS',
    AwayTeam: 'Persipon',HomeScore:3,AwayScore:2,RefName: "Kasjo",
    notes:'Pertandingan Ngelek'},
    {id:3,playingDate:new Date(2021,08,12),HomeTeam: 'Persis',
    AwayTeam: 'Persib',HomeScore:3,AwayScore:2,RefName: "Parto",
    notes:'Pertandingan Overtime'},
    {id:4,playingDate:new Date(2021,08,13),HomeTeam: 'Persib',
    AwayTeam: 'Persija',HomeScore:3,AwayScore:2,RefName: "Sule",
    notes:'Pertandingan Ada Kericuhan'},
    {id:5,playingDate:new Date(2021,08,14),HomeTeam: 'Persib',
    AwayTeam: 'Persebaya',HomeScore:3,AwayScore:2,RefName: "Joki",
    notes:'Pertandingan Aman'},
]
export const TEAM:Team [] = [
    {id:1,name:'EVOS',type:'Over 30'},
    {id:2,name:'Persija',type:'Over 30'},
    {id:3,name:'Bali United',type:'Over 30'},
    {id:4,name:'Persipon',type:'Over 30'},
    {id:5,name:'Persis',type:'Over 30'},
    {id:6,name:'Persib',type:'Over 30'},
    {id:7,name:'Persebaya',type:'Over 30'}
]