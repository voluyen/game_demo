namespace SpriteKind {
    export const ground = SpriteKind.create()
}
scene.setBackgroundColor(9)
let ninja = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.cameraFollowSprite(null)
controller.moveSprite(ninja, 100, 100)
ninja.setStayInScreen(true)
info.player1.setLife(2)
