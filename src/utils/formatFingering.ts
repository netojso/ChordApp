import { Chord } from "../@types";

export default function formatFingering(chord: Chord, index: number) {
    const isNumber = !isNaN((chord.fingering[index]));

    if(isNumber){
      return chord.fingering[index];
    } 

    return "";
}