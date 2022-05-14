namespace SpriteKind {
    export const ground = SpriteKind.create()
}
function AnimationMoving () {
    characterAnimations.runFrames(
    ninja,
    assets.animation`animRunDown`,
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.runFrames(
    ninja,
    assets.animation`animRunUp`,
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.runFrames(
    ninja,
    assets.animation`animRunLeft`,
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.runFrames(
    ninja,
    assets.animation`animRunRight`,
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
}
let ninja: Sprite = null
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`map-demo`)
ninja = sprites.create(assets.image`myImage1`, SpriteKind.Player)
tiles.placeOnRandomTile(ninja, sprites.castle.rock2)
AnimationMoving()
scene.cameraFollowSprite(ninja)
controller.moveSprite(ninja, 65, 65)
ninja.setStayInScreen(true)
info.player1.setLife(3)
