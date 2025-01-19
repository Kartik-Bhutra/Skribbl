import { words as dummy } from "../assets/dummyWord";

const decryptWord = (data) => {
    let word = "";
    for (const letter of data) {
        if (letter !== " ") {
            word += String.fromCharCode('z'.charCodeAt(0) - letter.charCodeAt(0) + 1);
        } else {
            word += " ";
        }
    }
    return word;
};

export default function getWord() {
    return decryptWord(dummy[Math.floor(Math.random() * dummy.length)].toLowerCase());
}