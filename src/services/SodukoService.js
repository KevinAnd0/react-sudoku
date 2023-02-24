export async function getSoduko() {

    try{
        const response = await fetch('/api/sudoku');
        let check = await response.json();
        console.log(check)
        return check
    }catch(error) {
        return [];
    }
    
}

export async function postSoduko(data) {
    console.log(data)
    const response = await fetch(`http://127.0.0.1:8000/api/sudoku/`, {
        // mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',},
        body: JSON.stringify({playerSolution: data})
      })
    return await response.json();
}

export async function getSodukoSolution() {

    try{
        const response = await fetch('/api/getSudokuSolution');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}