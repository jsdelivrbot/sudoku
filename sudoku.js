Promise.all([
    require('Puzzle'),
    require.get('puzzle')
]).then(a=>{
    var
        Puzzle=a[0],
        puzzleData=a[1],
        puzzle=new Puzzle(3,puzzleData),
        startTime,
        steps
    startTime=new Date
    console.table(puzzle.table())
    steps=puzzle.dfs()
    console.table(puzzle.table())
    console.log('Time used in seconds:',((new Date)-startTime)/1000)
    console.log('Count of steps:',steps/1000000,'M')
})
