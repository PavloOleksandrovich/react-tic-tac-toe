export function loopDiagonals(matrix, callback) {
    const rowCount = matrix.length;
    const columnCount = matrix[0].length;

    for (let i = 0; i < rowCount - 1; i++) {
        const diagonal = [];

        for (let row = i, col = 0; row >= 0 && col < columnCount; row--, col++) {
            diagonal.push(matrix[row][col]);
        }

        callback(diagonal);
    }


    for (let i = 0; i < columnCount; i++) {
        const diagonal = [];

        for (let row = rowCount - 1, col = i; row >= 0 && col < columnCount; row--, col++) {
            diagonal.push(matrix[row][col]);
        }

        callback(diagonal);
    }

    for (let i = rowCount - 1; i >= 0; i--) {
        const diagonal = [];

        for (let row = i, col = 0; row < rowCount && col < columnCount; row++, col++) {
            diagonal.push(matrix[row][col]);
        }

        callback(diagonal);
    }

    for (let i = 1; i < columnCount; i++) {
        const diagonal = [];

        for (let row = 0, col = i; row < rowCount && col < columnCount; row++, col++) {
            diagonal.push(matrix[row][col]);
        }

        callback(diagonal);
    }
}

export function loopRows(matrix, callback) {
    const rowCount = matrix.length;
    const columnCount = matrix[0].length;

    for (let i = 0; i < rowCount; i++) {
        const row = [];

        for (let j = 0; j < columnCount; j++) {
            row.push(matrix[i][j]);
        }

        callback(row);
    }
}

export function loopColls(matrix, callback) {
    const rowCount = matrix.length;
    const columnCount = matrix[0].length;

    for (let i = 0; i < rowCount; i++) {
        const coll = [];

        for (let j = 0; j < columnCount; j++) {
            coll.push(matrix[j][i]);
        }

        callback(coll);
    }
}
