export interface ResponseChordAPI {
    strings: string;
    fingering: string;
    chordName: string;
    enharmonicChordName: string;
    voicingID: string;
    tones: string;
  }
  
export interface Chord {
    strings: number[],
    fingering: number[],
    chordName: string,
    tones: string[]
  }