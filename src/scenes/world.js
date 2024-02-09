import { colorizeBackground, fetchMapData, drawTiles } from "../utils.js";
export default async function world(k) {
    colorizeBackground(k, 76, 170, 255);
    const mapData = await fetchMapData(
        "https://raw.githubusercontent.com/thepilkman/pilkassets/main/world.json"
    );
    console.log(mapData);
    const map = k.add([k.pos(50, 0)]);

    const entities = {
        player: null,
        enemies: [],
    };

    const layers = mapData.layers;
    // This forloop is used to iterate through the array
    for (const layer of layers) {
        if (layer.name === "boundaries") {
            continue;
        }

        if (layer.name === "SpawnPoints") {
            continue;
        }

        drawTiles(k, map, layer, mapData.tileheight, mapData.tilewidth);
        //Current issue now is that the draw tiles function doesn't want to cooperate
    }
}
