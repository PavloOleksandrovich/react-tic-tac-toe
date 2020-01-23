import { loopDiagonals, loopColls, loopRows } from './array';

export function calculateWinner(squares) {
    const countWin = 3; // amount X or O in one line for win 

    const callback = (array) => {
        if (array.length < countWin) {
            return;
        }

        let amountX = 0;
        let amountO = 0;

        for (let i = 0; i < array.length; i++) {
            switch (array[i]) {
                case 'X':
                    amountX++;
                    break;
                case 'O':
                    amountO++;
                    break;
                default:
                    break;
            }
        } 

        if (amountX !== countWin && amountO !== countWin) { 
            return;
        }

        const xIsWin = amountX === countWin;

        const errorObject = {
            xIsWin
        };

        throw new Error(JSON.stringify(errorObject)); 
    };

    try {
        loopDiagonals(squares, callback);
        loopRows(squares, callback);
        loopColls(squares, callback);
    } catch (error) {
        return JSON.parse(error.message);
    }

    return null;
};