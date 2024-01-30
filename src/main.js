import k from "./kaboomContext.js"
import world from "./scenes/world.js";

k.loadSprite("assets", "./maps/Tiles.png", {
	sliceX: 12,
	sliceY: 8,
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
