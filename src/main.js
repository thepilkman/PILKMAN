import k from "./kaboomContext.js"
import world from "./scenes/world.js";

const tiles = "https://raw.githubusercontent.com/thepilkman/pilkassets/main/TX%20Tileset%20Grass.png";

k.loadSprite("assets", tiles, {
	sliceX: 30,
	sliceY: 31,
});

const scenes = {
	world: () => {},
};

for (const sceneName in scenes){
	k.scene(sceneName, () => scenes[sceneName](k));
}

k.scene("world", () => world(k));
k.go("world");
k.loop();
