kaboom({
	global: true,
	fullscreen: true,
	scale: 2,
});

loadSprite("yeti", "https://i.imgur.com/OqVwAm6.png");
loadSprite("bg", "https://www.gameartguppy.com/wp-content/uploads/2014/06/feature_winter_background_game_art.jpg");
loadSprite("icicle", "https://static.wikia.nocookie.net/kaizomariomaker/images/2/23/Icicle.png/revision/latest?cb=20191224173951");

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

	// if yeti falls off the screen restart the game
	yeti.action(() => {
		if (yeti.pos.y >= height()) {
			go("gameover")
		}
	})

	yeti.collides("icicle", () => {
		go("gameover")
	})


	const ICICLE_OPEN = 120;
	const ICICLE_SPEED = 90;

	// add icicles to the scene every 1.5 seconds using loop

	loop(1.5, () => {

		const icePos = rand(0, height() - ICICLE_OPEN);
		add([
			sprite("icicle"),
			origin("bot"),
			pos(width(), icePos),
			"icicle",
		]);
	
		add([
			sprite("icicle"),
			pos(width(), icePos + ICICLE_OPEN),
			scale(1, -1),
			origin("bot"),
			"icicle",
		]);
	})

	action("icicle", (icicle) => {
		icicle.move(-ICICLE_SPEED, 0);
	})

});

scene("gameover", () => {
	add([
		text("you lose!", 24),
		pos(width() / 2, height() / 2),
		origin("center")
	]);

	keyPress("space", () => {
		go("main");
	})
})

start("main");

