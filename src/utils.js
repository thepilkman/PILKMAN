// File is used to fetch the map and for universal functions
// Hexadecimal can be used for colorizeBackground but is currenty buggy with the kaboom engine

export function colorizeBackground(k, r, g, b) {
    k.add([
        k.rect(k.canvas.width, k.canvas.height),
        k.color(r, g, b),
        k.fixed(),
    ]);
}

export async function fetchMapData(mapPath) {
    return await (await fetch(mapPath)).json();
}

export function drawTiles(k, map, layer, tileheight, tilewidth) {
    let numberOfDrawnTiles = 0;
    const tilePos = k.vec2(0, 0);
    for (const tile in layer.data) {
        if (numberOfDrawnTiles % layer.width === 0) {
            // tile.pos is centered so divide by 2 to translate the next tile below the previous
            tilePos.y += tileheight / 2;
            tilePos.x = 0;
        }
        tilePos.x += tilewidth / 2;

        numberOfDrawnTiles++;
        if (tile === 0) continue;
        //tile frame made -1 due to framed and kaboom seeing the tiles differently
        map.add([
            k.sprite("tiles", { frame: tile }),
            k.pos(tilePos),
            k.offscreen(),
        ]);
    }
}
