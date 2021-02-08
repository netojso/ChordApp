import { Chord } from "../@types";

export default function formatStringsChord(chord: Chord): Chord {

    let array = chord.strings.map(s => isNaN(s) ? 0 : s);

    let maxItem = Math.max(...array);


    console.log(maxItem);

    switch (maxItem) {
        case 5:
           chord.strings =  chord.strings.map(s => {
              return s - 2;
            })
        break;
        
        case 6:
           chord.strings =  chord.strings.map(s => {
              return s - 3;
            })
        break;
        
        case 7:
           chord.strings =  chord.strings.map(s => {
              return s - 4;
            })
        break;
        
        case 8:
           chord.strings =  chord.strings.map(s => {
              return s - 5;
            })
        break;
        
        case 9:
           chord.strings =  chord.strings.map(s => {
              return s - 5;
            })
        break;

        case 10:
           chord.strings =  chord.strings.map(s => {
              return s - 6;
            })
        break;
        

        case 11:
           chord.strings =  chord.strings.map(s => {
              return s - 8;
            })
        break;
        

        case 12:
           chord.strings =  chord.strings.map(s => {
              return s - 9;
            })
        break;
        

        case 13:
           chord.strings =  chord.strings.map(s => {
              return s - 9;
            })
        break;
        

        case 14:
           chord.strings =  chord.strings.map(s => {
              return s - 11;
            })
        break;
        
        case 15:
           chord.strings =  chord.strings.map(s => {
              return s - 12;
            })
        break;
        
        
        default:
            break;
    }

    return chord;
}