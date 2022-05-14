namespace SpriteKind {
    export const ground = SpriteKind.create()
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
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
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd1, function (sprite, location) {
    statusbar.value += -1
    pause(200)
})
let statusbar: StatusBarSprite = null
let ninja: Sprite = null
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`map-demo`)
ninja = sprites.create(assets.image`myImage1`, SpriteKind.Player)
tiles.placeOnRandomTile(ninja, sprites.castle.rock2)
AnimationMoving()
scene.cameraFollowSprite(ninja)
controller.moveSprite(ninja, 65, 65)
ninja.setStayInScreen(true)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setColor(7, 2)
statusbar.max = 10
statusbar.attachToSprite(ninja, 0, 0)
