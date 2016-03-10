exports.wait()
require([
    'Sudoku',
    'DirectedGraph',
    'Vertex',
    'Edge',
],(
    Sudoku,
    DirectedGraph,
    Vertex,
    Edge
)=>{
var Puzzle=class Puzzle extends Sudoku{
    constructor(n,s){
        super(n)
        this.n2=this.n*this.n
        this.n4=this.n2*this.n2
        if(s)
            this.set(s)
    }
    set(s){
        this.a=s.replace(/[\ \n]/g,'').split('')
    }
    get dfs(){
        var
            puzzle=this,
            row=aa(this.n2,this.n2),
            col=aa(this.n2,this.n2),
            blk=aa(this.n2,this.n2),
            steps
        for(let i=0;i<this.n4;i++)
            if(this.a[i]!=0)
                reg(i,this.a[i]-1,1)
        steps=0
        dfs(0)
        return steps
        function aa(m,n){
            var res=[]
            for(let i=0;i<m;i++)
                res.push(Array(n))
            return res
        }
        function dfs(d){
            // d for depth
            steps++
            if(d==puzzle.n4)
                return true
            if(puzzle.a[d]!=0)
                return dfs(d+1)
            for(let i=0;i<puzzle.n2;i++){
                if(check(d,i))
                    continue
                puzzle.a[d]=i+1
                reg(d,i,1)
                if(dfs(d+1))
                    return true
                puzzle.a[d]=0
                reg(d,i)
            }
        }
        function check(d,n){
            let
                r=Math.floor(d/puzzle.n2),
                c=d%puzzle.n2,
                b=Math.floor(r/puzzle.n)*puzzle.n+Math.floor(c/puzzle.n)
            return row[r][n]||col[c][n]||blk[b][n]
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
    get graph(){
        var graph=new DirectedGraph
        class PuzzleVertex extends Vertex{
            constructor(){
                super()
            }
        }
        return graph
    }
    get table(){
        var res=[]
        for(let i=0;i<this.n2;i++)
            res.push(this.a.slice(this.n2*i,this.n2*(i+1)))
        return res
    }
}
exports(Puzzle)
})
