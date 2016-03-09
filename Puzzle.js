exports.wait()
require('Sudoku',Sudoku=>{
exports(Puzzle)
function Puzzle(n,s){
    Sudoku.call(this,n)
    this.n2=this.n*this.n
    this.n4=this.n2*this.n2
    if(s)
        this.set(s)
}
Puzzle.prototype=Object.create(Sudoku.prototype)
Puzzle.prototype.set=function(s){
    this.a=s.replace(/[\ \n]/g,'').split('')
}
Puzzle.prototype.dfs=function(){
    var
        puzzle=this,
        row=aa(this.n2,this.n2),
        col=aa(this.n2,this.n2),
        blk=aa(this.n2,this.n2)
    for(let i=0;i<this.n4;i++)
        if(this.a[i]!=0)
            reg(i,this.a[i]-1,1)
    dfs(0)
    function aa(m,n){
        var res=[]
        for(let i=0;i<m;i++)
            res.push(Array(n))
        return res
    }
    function dfs(d){
        // d for depth
        if(d==puzzle.n4)
            return true
        if(puzzle.a[d]!=0)
            return dfs(d+1)
        for(let i=0;i<puzzle.n2;i++){
            let
                r=Math.floor(d/puzzle.n2),
                c=d%puzzle.n2,
                b=Math.floor(r/puzzle.n)*puzzle.n+Math.floor(c/puzzle.n)
            if(row[r][i]||col[c][i]||blk[b][i])
                continue
            puzzle.a[d]=i+1
            reg(d,i,1)
            if(dfs(d+1))
                return true
            puzzle.a[d]=0
            reg(d,i)
        }
    }
    function reg(d,n,v){
        let
            r=Math.floor(d/puzzle.n2),
            c=d%puzzle.n2,
            b=Math.floor(r/puzzle.n)*puzzle.n+Math.floor(c/puzzle.n)
        row[r][n]=v
        col[c][n]=v
        blk[b][n]=v
    }
}
Puzzle.prototype.table=function(){
    var res=[]
    for(let i=0;i<this.n2;i++)
        res.push(this.a.slice(this.n2*i,this.n2*(i+1)))
    return res
}
})
