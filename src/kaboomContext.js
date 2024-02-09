import kaboom from "../lib/kaboom.mjs";
import world from "./scenes/world.js";

const k = kaboom({
    width: 800,
    height: 800,
    letterbox: true,
    global: false,
});

export default k;
