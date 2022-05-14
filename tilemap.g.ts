// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "map-demo":
            case "level1":return tiles.createTilemap(hex`10001000090808080808080808080808080808080d0201010a020102010102020108070707010504030504040505030a0303090707020405101211050404030c03030a0707010405040303030404030c030a01070702040305030503030605040304010707020303040304050504030303050107070a030304050403030a03030305020f070a040513060405050303040404010e07010303030304050c0303050404010e07020b03060405030c0a03040503020f07020b03051012110a030504030301070701030306051012110305030303020707070203030504040505040b0b0a070707070701010a0201020101020107070708080808080808080808080808080808`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.swamp.swampTile1,sprites.swamp.swampTile0,sprites.swamp.swampTile2,sprites.castle.saplingPine,sprites.castle.shrub,sprites.castle.rock0,sprites.castle.rock2,sprites.dungeon.stairLarge,sprites.dungeon.purpleOuterWest2,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,sprites.builtin.forestTiles2,sprites.builtin.crowd1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
