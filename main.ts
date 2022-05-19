namespace SpriteKind {
    export const ground = SpriteKind.create()
    export const Weapon = SpriteKind.create()
    export const Start = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (rightdir == true) {
        projectile = sprites.createProjectileFromSprite(assets.image`phi_tieu`, ninja, 100, 0)
    } else {
        projectile2 = sprites.createProjectileFromSprite(assets.image`phi_tieu`, ninja, -100, 0)
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
    if (rightdir == true) {
        animation.runImageAnimation(
        ninja,
        assets.animation`myAnim8`,
        50,
        false
        )
    } else {
        animation.runImageAnimation(
        ninja,
        assets.animation`myAnim8`,
        50,
        false
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    rightdir = false
})
function setMain () {
    info.setScore(0)
}
function mainDie () {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(ninja, sprites.castle.rock2)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    rightdir = true
})
function setLevelMap (lv: number) {
    clearMap()
    if (lv == 1) {
        tiles.setCurrentTilemap(tilemap`map-demo`)
        place_start = img`
            . . b d b . . . . . b b b b . . 
            . c b d d b . . . b b d d d b . 
            . b c c b . . . b c d d d d b . 
            . . . . . . b b c c b d b b b . 
            . . . . . b d d b c c b b b c . 
            . . b b b c d d b b c c c c . . 
            . b d d d b c b b c . . . . . . 
            c b d d d d c c c c . b b b . . 
            c c b b b b c c c . b d d d b . 
            . c c c b b . . b c b b d d b b 
            . b b . . . . . b c c b b b b . 
            b d d b b . . . . . c c c b . . 
            b b d d b c . . b b b b b b b . 
            . b c c c b . b d d d b b c b . 
            . . . . . . b d d d b c c b . . 
            . . . . . . b b b c c c b . . . 
            `
    } else {
        tiles.setCurrentTilemap(tilemap`tilemap1`)
        place_start = img`
            . . b d b . . . . . b b b b . . 
            . c b d d b . . . b b d d d b . 
            . b c c b . . . b c d d d d b . 
            . . . . . . b b c c b d b b b . 
            . . . . . b d d b c c b b b c . 
            . . b b b c d d b b c c c c . . 
            . b d d d b c b b c . . . . . . 
            c b d d d d c c c c . b b b . . 
            c c b b b b c c c . b d d d b . 
            . c c c b b . . b c b b d d b b 
            . b b . . . . . b c c b b b b . 
            b d d b b . . . . . c c c b . . 
            b b d d b c . . b b b b b b b . 
            . b c c c b . b d d d b b c b . 
            . . . . . . b d d d b c c b . . 
            . . . . . . b b b c c c b . . . 
            `
    }
    setMain()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`trap`, function (sprite, location) {
    info.changeScoreBy(-1)
    mainDie()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`dameTile1`, function (sprite, location) {
    info.changeScoreBy(-1)
    mainDie()
})
function clearMap () {
    for (let value of sprites.allOfKind(SpriteKind.Weapon)) {
        value.destroy()
    }
}
let place_start: Image = null
let projectile5: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let rightdir = false
let dame: Sprite = null
let ninja: Sprite = null
scene.setBackgroundColor(6)
ninja = sprites.create(assets.image`myImage1`, SpriteKind.Player)
let currentLevel = 1
setLevelMap(1)
scene.cameraFollowSprite(ninja)
controller.moveSprite(ninja, 65, 65)
ninja.setStayInScreen(true)
info.setLife(3)
let weapon1 = sprites.create(assets.image`weapon1`, SpriteKind.Weapon)
tiles.placeOnRandomTile(weapon1, assets.tile`weapon1`)
while (true) {
    dame = sprites.createProjectileFromSprite(assets.image`dame1`, weapon1, 0, 50)
    pause(1000)
}
