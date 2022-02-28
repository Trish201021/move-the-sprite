input.onGesture(Gesture.LogoUp, function () {
    Sprite.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Sprite.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    Sprite.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    Sprite.change(LedSpriteProperty.Y, -1)
})
let Sprite: game.LedSprite = null
basic.showLeds(`
    . # . # .
    # # # # #
    . # # # .
    . . # . .
    . . . . .
    `)
Sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
