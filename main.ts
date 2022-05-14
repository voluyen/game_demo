namespace SpriteKind {
    export const ground = SpriteKind.create()
}
function initGround () {
    ground1 = sprites.create(img`
        9999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `, SpriteKind.ground)
    ground1.setPosition(scene.screenWidth() / 2, 100)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    ninja,
    assets.animation`animRunUp`,
    200,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    ninja,
    assets.animation`animRunLeft`,
    200,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    ninja,
    assets.animation`animRunRight`,
    200,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    ninja,
    assets.animation`animRunDown`,
    200,
    false
    )
})
let ground1: Sprite = null
let ninja: Sprite = null
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`map-demo`)
ninja = sprites.create(assets.image`myImage1`, SpriteKind.Player)
tiles.placeOnRandomTile(ninja, sprites.castle.rock2)
scene.cameraFollowSprite(ninja)
controller.moveSprite(ninja, 65, 65)
ninja.setStayInScreen(true)
info.player1.setLife(3)
