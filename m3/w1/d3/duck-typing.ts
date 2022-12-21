// duck-typing -> due oggetti sono considerati dello stesso tipo se condividono lo stesso insieme di proprietà
// TypeScript verifica la presenza delle proprietà negli oggetti

interface IPoint {
    x:number;
    y:number
}
function addPoints(p1:IPoint,p2:IPoint):IPoint{
    let x = p1.x + p2.x
    let y = p1.y + p2.y
    return {x:x,y:y}
} 
let newPoint = addPoints({x:3,y:4},{x:5,y:1})//struttura valida
//let newPoint2 = addPoints({x:3},{x:5,y:1})//struttura non valida perchè manca la proprietà y che ho dichiarato nell'interfaccia
