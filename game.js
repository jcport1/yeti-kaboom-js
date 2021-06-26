kaboom({
	global: true,
});

loadSprite("yeti", "https://i.imgur.com/OqVwAm6.png");
loadSprite("bg", "https://www.gameartguppy.com/wp-content/uploads/2014/06/feature_winter_background_game_art.jpg");

scene("main", () => {

    add([
		sprite("bg"),
        scale(width() / 240, height() / 240),
		origin("topleft"),
	]);

    const yeti = add([
		sprite("yeti"),
		pos(80, 80),
        body(),
	]);

    const JUMP_FORCE = 320;
    const MOVE_SPEED = 120

	keyPress("space", () => {
		yeti.jump(JUMP_FORCE);
	});

    keyDown('left', () => {
        yeti.move(-MOVE_SPEED, 0)
    })

    keyDown('right', () => {
        yeti.move(MOVE_SPEED, 0)
    })

    add([
		rect(width(), 12),
		pos(0, 280),
		origin("topleft"),
		solid(),
	]);

});

start("main");
