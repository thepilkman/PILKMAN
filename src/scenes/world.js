import { colorizeBackground, fetchMapData } from "../utils.js";

export default async function world(k) {
    colorizeBackground(k, 76, 170, 255);
    const mapData = await fetchMapData("../PILKMAN/assets/maps/world.js");
    console.log(mapData)
    const map = k.add([k.pos(0, 0)]);

    const entities = {
        player: null,
        enemies: [],

    };

    const layers = mapData.layers;
    // This forloop is used to iterate through the array
    for (const layer of layers) {
            if (layer.name === "boundaries"){
                continue;
            }

            if (layer.name === "spawnPoints"){
                continue;
            }

            drawTiles(k, map, layer, mapData.tileheight, mapData.tileWidth)

        
    }
}