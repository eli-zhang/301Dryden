

// roomList is a list of all the room numbers
// specialRooms is a map of all special rooms to their sizes
// specialRooms entry format: { 101: [3, 1] }
// columns is the number of columns in the grids
export const calculateTileOffsets = (roomsList, specialRooms, columns) => {
    let offsets = roomsList.map(() => { return 0 });    // A list that contains the offset for each tile
    let sizes = {}
    let rowOffsets = [] // An array of row start, col start and offset amount
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
                rowOffsets.push({"startRow": currRow, "startCol": currCol, rows, cols})
            }

            sizes[currRoom] = [cols, rows];
        }

        for (let j = rowOffsets.length - 1; j >= 0; j--) {
            const currEntry = rowOffsets[j];
            if (currEntry["startRow"] < currRow   // Previous tile is above current tile
                && currEntry["startCol"] === currCol) {   // Previous tile starts on or before current column
                for (let k = i; k < roomsList.length; k++) {
                    console.log(i, `shifting by ${currEntry["cols"] }`)
                    offsets[k] += currEntry["cols"];  
                }
            }

            if (currEntry["startRow"] + currEntry["rows"] <= currRow + 1) {     // After the last row
                    console.log("removing row offsets", JSON.stringify(rowOffsets))
                rowOffsets.splice(j, 1);
            }
        }
    }
    
    return { offsets, sizes };
}