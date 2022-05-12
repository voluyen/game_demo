scene.set_background_image(assets.image("""
    myImage3
"""))
ninja = sprites.create(assets.image("""
    myImage
"""), SpriteKind.player)
controller.move_sprite(ninja, 100, 100)
scene.camera_follow_sprite(ninja)