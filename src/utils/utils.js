
// roomList is a list of all the room numbers
// specialRooms is a map of all special rooms to their sizes
// specialRooms entry format: { 101: [3, 1] }
// columns is the number of columns in the grids
export const calculateTileInfo = (roomsList, specialRooms, columns) => {
    let offsets = roomsList.map(() => { return 0 });    // A list that contains the offset for each tile
    let sizes = {}
    let rowOffsets = {} // An array of row start, col start and offset amount
    for (let i = 0; i < roomsList.length; i++) {
        const currRoom = roomsList[i];

        let currCol = (offsets[i] + i) % columns;
        let currRow = Math.floor((offsets[i] + i) / columns);

        if (specialRooms[currRoom]) {
            const roomInfo = specialRooms[currRoom];
            const cols = Math.min(roomInfo[0], columns - currCol)   // If the width is too big, reduce the size 
            const rows = roomInfo[1];

            for (let j = i + 1; j < roomsList.length; j++) {
                offsets[j] += cols - 1;  // Add the basic amount it's pushed over
            }

            if (rows > 1) {
                rowOffsets[i] = {"startRow": currRow, "startCol": currCol, rows, cols}
            }

            sizes[currRoom] = [cols, rows];
        }

        const indicesOfSpecialTiles = Object.keys(rowOffsets); 

        const updateRowOffsets = (indicesOfTilesToCheck) => {
            for (let j = 0; j < indicesOfTilesToCheck.length; j++) {
                currCol = (offsets[i] + i) % columns;
                currRow = Math.floor((offsets[i] + i) / columns);
    
                let currIndex = indicesOfTilesToCheck[j];
                let currEntry = rowOffsets[currIndex];
    
                if (currEntry["startRow"] < currRow   // Previous tile is above current tile
                    && currEntry["startCol"] === currCol
                    && currEntry["startRow"] + currEntry["rows"] - 1 >= currRow) {   // Previous tile starts on current column
                    for (let k = i; k < roomsList.length; k++) {
                        offsets[k] += currEntry["cols"];  
    
                        if (rowOffsets[k]) {    
                            rowOffsets[k]["startCol"] = (offsets[k] + k) % columns;
                            rowOffsets[k]["startRow"] = Math.floor((offsets[k] + k) / columns);    
                            updatedSpecialTiles.push(k);
                        }
                    }
                }
    
                if (currEntry["startRow"] + currEntry["rows"] - 1 < currRow) {     // After the last row
                    delete rowOffsets[currIndex]
                }
            }
        }

        let updatedSpecialTiles = []
        updateRowOffsets(indicesOfSpecialTiles);
        // updateRowOffsets(updatedSpecialTiles);
    }
    
    return { offsets, sizes };
}