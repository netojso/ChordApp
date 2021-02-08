export default function formatSearchChord(chord: string): string {

    let tones = ["C", "D", "E", "F", "G", "A", "B", "C"];

    if(chord.length <= 0) return "";

    let chordFormmated = chord.charAt(0).toUpperCase();

    if(chord.includes("#") && !chord.includes("b")) {
        let indexChord = tones.findIndex(t => t === chordFormmated);

        if(indexChord >= 0) {
            chordFormmated = tones[indexChord + 1] + "b";
        }
    }

    if(chord.includes("b") && !chord.includes("#")) chordFormmated += "b";

    if(chord.includes("M")) chordFormmated += "_maj";

    if(chord.includes("m")) chordFormmated += "_m";

    if(chord.includes("7") && (chord.includes("M") || chord.includes("m"))) chordFormmated += "7";

    if(chord.includes("7") && !chord.includes("m") && !chord.includes("M")) chordFormmated += "_7";

    if(chord.includes("(")) {
        var value = chord.substring(
            chord.lastIndexOf("(") + 1, 
            chord.lastIndexOf(")")
        );

        if(value === "11") value = "add(11)";
        
        chordFormmated += value;
    }

    console.log(chordFormmated);

    return chordFormmated;
}