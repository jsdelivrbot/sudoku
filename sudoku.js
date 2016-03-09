Promise.all([
    require('Puzzle'),
    require.get('puzzle')
]).then(a=>{
    var
        Puzzle=a[0],
        puzzleData=a[1],
        puzzle=new Puzzle(3,puzzleData),
        startTime
    startTime=new Date
    console.table(puzzle.table())
    //puzzle.dfs()
    console.table(puzzle.table())
    console.log('Time used in second:',((new Date)-startTime)/1000)
})
