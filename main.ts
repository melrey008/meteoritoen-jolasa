input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let jokalari = game.createSprite(2, 4)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        jokalari.change(LedSpriteProperty.X, 1)
    }
    if (input.buttonIsPressed(Button.B)) {
        jokalari.change(LedSpriteProperty.X, -1)
    }
    if (input.buttonIsPressed(Button.AB)) {
    	
    }
})
