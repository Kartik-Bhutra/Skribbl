import { names as dummy } from "../assets/dummyNames";

export default function () {
    return dummy[Math.floor(Math.random() * dummy.length)];
}