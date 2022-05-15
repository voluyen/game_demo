namespace SpriteKind {
    export const ground = SpriteKind.create()
    export const Weapon = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (rightdir == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . f . . . f f . . . . . . . . 
            . . . f . f f f f f . . . . . . 
            . . . . f f f f f . f . . . . . 
            . . . . . . f f . . . f . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ninja, 100, 0)
    } else {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . f . . . f f . . . . . . . . 
            . . . f . f f f f f . . . . . . 
            . . . . f f f f f . f . . . . . 
            . . . . . . f f . . . f . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ninja, -100, 0)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile5 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . 1 c . . . 
        . . . . . . . . . . . . c . . . 
        . . . . . . . . . . . 1 c . . . 
        . . . . . . . . . . . 1 c . . . 
        . . . . . . . . . . . . c . . . 
        . . . . . . . . . . . 1 c . . . 
        . . . . . . . . . . . c . . . . 
        . . . . . . . . . 1 1 c . . . . 
        . . . . . . . . . . c . . . . . 
        . . . . . . . . 1 c . . . . . . 
        . . . . . . . . c 1 . . . . . . 
        . . . . . . . 1 c . . . . . . . 
        . 1 1 . 1 1 . c . . . . . . . . 
        c c c c c c c 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ninja, 100, 0)
    pause(100)
    projectile5.destroy()
    animation.runImageAnimation(
    ninja,
    assets.animation`myAnim8`,
    50,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    rightdir = false
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    rightdir = true
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
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.runFrames(
    ninja,
    assets.animation`animRunRight`,
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    statusbar.value += -0.15
})
let projectile5: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let rightdir = false
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
statusbar.max = 20
statusbar.attachToSprite(ninja, 0, 0)
