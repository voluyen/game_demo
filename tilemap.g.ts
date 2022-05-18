// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "map-demo":
            case "level1":return tiles.createTilemap(hex`10001000060505050505050505050505050505050a02010107020102010102020105040404011111031111111111030703030604040211110d0f0e1111110309030307040401111111030303111103090307010404021103110311030311111103110104040203031103111111110303031101040407030311111103030703030311020c0407111110111111110303111111010b0401030303031111090303111111010b0402080311111103090703111103020c04020803110d0f0e07031111030301040401030311110d0f0e03110303030204040402030311111111101108080704040404040101070201020101020104040405050505050505050505050505050505`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . . . . 2 2 2 2 2 2 
2 . . . 2 2 2 . . . 2 2 2 2 2 2 
2 . . . . 2 2 2 . . 2 2 2 2 . 2 
2 . . 2 . 2 . 2 2 . . . 2 . . 2 
2 . 2 2 . 2 . . . . 2 2 2 . . 2 
2 2 2 2 . . . 2 2 2 2 2 2 . . 2 
2 2 . . . . . . . 2 2 . . . . . 
2 2 2 2 2 2 . . 2 2 2 . . . . . 
2 2 2 2 . . . 2 2 2 2 . . 2 . 2 
2 2 2 2 . 2 2 2 2 2 . . 2 2 . 2 
2 2 2 2 . . 2 2 2 2 . 2 2 2 . 2 
2 2 2 2 2 . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.swamp.swampTile1,sprites.swamp.swampTile0,sprites.swamp.swampTile2,sprites.castle.saplingPine,sprites.castle.shrub,sprites.castle.rock0,sprites.castle.rock2,sprites.dungeon.stairLarge,sprites.dungeon.purpleOuterWest2,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,sprites.builtin.forestTiles2,sprites.dungeon.collectibleRedCrystal,myTiles.tile1], TileScale.Sixteen);
            case "tilemap1":
            case "tilemap1":return tiles.createTilemap(hex`19001900020303030303030303030303030303030303030303030303040a0110101010101010101010101010101010101010101011050b0f15151515151515151515151515151515151515151514050b0f15151515151515151515151515151515151515151514050a0f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090f1515151515151515151515151515151515151515151405090e1313131313131313131313131313131313131313131205080707070707070707070707070707070707070d0c0c0d0706`, img`
2222222222222222222222222
2.......................2
........................2
........................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
22222222222222222222..222
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterWest2,sprites.dungeon.stairWest,sprites.dungeon.stairSouth,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
