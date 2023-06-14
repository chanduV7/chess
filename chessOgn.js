const root = document.getElementById("root");

(() => {
    for(let i=1 ; i<9; i++){
        for(let j=1; j<9; j++){
            const div = document.createElement("div")
            div.style.width = "5.4rem";
            div.style.height = "5.4rem";
            div.style.borderRadius = "2px";
            div.style.display = "flex";
            div.style.justifyContent = "center";
            div.style.alignItems= "center"; 
            const para = document.createElement("p")
            para.innerHTML= `(${i},${j})`;
            div.appendChild(para)
            div.setAttribute("data-cords",i+","+j)
            root.append(div);

            if((i+j)%2 == 0 ){
                div.style.backgroundColor = "#F8EFBA";
            }else{
                div.style.backgroundColor="#EAB543"
            }   
        }
    }
})()

const showMoves = () => {
    const code = event.target.parentElement.dataset.code;
    console.log(code);
    const obj = pieceArray.find((e) => e.code == code);
    console.log(obj)
    obj.calculateMoves();
    console.log(obj)
    const {moves} = obj;
    moves.forEach((e) => {
        console.log(e)
        const box = document.querySelector(`[data-cords="${e.x},${e.y}"]`);
        box.style.backgroundColor = "rgba(27,156,252,0.1)"
    }) 
}

const hideMoves = () => {
    root.childNodes.forEach((e) => {
        const i = e.dataset.cords.split(",")[0];
        const j = e.dataset.cords.split(",")[1];
        if((parseInt(i) + parseInt(j)) % 2){
            e.style.backgroundColor = "#F8EFBA";
        }
        else{
            e.style.backgroundColor="#EAB543"
        }
    })
}

class Piece {
    constructor(name,code,color,initPos,currPos,img,moves){
        this.name = name;
        this.code = code;
        this.color = color;
        this.initPos = initPos;
        this.currPos = currPos;
        this.img = img;
        this.moves = moves;
        this.validMoves = [];
        this.numMoves = 0;
    }
    displayPiece = () => {
        const box = document.querySelector(
            `[data-cords="${this.currPos.x},${this.currPos.y}"]`
        )
            const img = document.createElement("img");
            img.setAttribute("src", this.img);
            box.setAttribute("data-code", this.code);
            box.setAttribute("data-color",this.color)
            img.style.maxWidth = "3rem";
            box.appendChild(img);
            img.addEventListener("mouseenter",showMoves);
            img.addEventListener("mouseleave",hideMoves)        
    }

      calculateMoves = () => {
        let pieceName = this.name.split(" ")[1];
        console.log(pieceName)
        switch (pieceName){
            // case "Pawn": calculatePawnMoves();
            //              break;
            case "Rook": calculateRookMoves(this);
                         break;
            case "Knight" : calculateKnightMoves(this);
                            break;
            case "Bishop" : calculateBishopMoves(this);
                             break;
            case "King" : calculateKingMoves(this);
                          break;
            case "Queen" : calculateQueenMoves(this);
                           break;
        }
     };
}
const rx1 = new Piece("black Rook 1","rx1","black",{x:8,y:1},{x:8,y:1},"../media/b_rook.svg",[]);
const kx1 = new Piece("black Knight 1","kx1","black",{x:8,y:2},{x:8,y:2},"../media/b_knight.svg",[]);
const bx1 = new Piece("black Bishop 1","bx1","black",{x:8,y:3},{x:8,y:3},"../media/b_bishop.svg",[]);
const rx2 = new Piece("black Rook 2","rx2","black",{x:8,y:8},{x:8,y:8},"../media/b_rook.svg",[]);
const kx2 = new Piece("black Knight 2","kx2","black",{x:8,y:7},{x:8,y:7},"../media/b_knight.svg",[]);
const bx2 = new Piece("black Bishop 2","bx2","black",{x:8,y:6},{x:8,y:6},"../media/b_bishop.svg",[]);
const kb = new Piece("black King","kx","black",{x:8,y:5},{x:8,y:5},"../media/b_king.svg",[]);
const qb = new Piece("black Queen","qx","black",{x:8,y:4},{x:8,y:4},"../media/b_queen.svg",[]);

const px1 = new Piece("black Pawn 1","px1","black",{x:7,y:1},{x:7,y:1},"../media/b_pawn.svg",[])
const px2 = new Piece("black Pawn 2","px2","black",{x:7,y:2},{x:7,y:2},"../media/b_pawn.svg",[])
const px3 = new Piece("black Pawn 3","px3","black",{x:7,y:3},{x:7,y:3},"../media/b_pawn.svg",[])
const px4 = new Piece("black Pawn 4","px4","black",{x:7,y:4},{x:7,y:4},"../media/b_pawn.svg",[])
const px5 = new Piece("black Pawn 5","px5","black",{x:7,y:5},{x:7,y:5},"../media/b_pawn.svg",[])
const px6 = new Piece("black Pawn 6","px6","black",{x:7,y:6},{x:7,y:6},"../media/b_pawn.svg",[])
const px7 = new Piece("black Pawn 7","px7","black",{x:7,y:7},{x:7,y:7},"../media/b_pawn.svg",[])
const px8 = new Piece("black Pawn 8","px8","black",{x:7,y:8},{x:7,y:8},"../media/b_pawn.svg",[])

const r1 = new Piece("white Rook 1","r1","white",{x:1,y:1},{x:1,y:1},"../media/w_rook.svg",[]);
const k1 = new Piece("white Knight 1","k1","white",{x:1,y:2},{x:1,y:2},"../media/w_knight.svg",[]);
const b1 = new Piece("white Bishop 1","b1","white",{x:1,y:3},{x:1,y:3},"../media/w_bishop.svg",[]);
const r2 = new Piece("white Rook 2","r2","white",{x:1,y:8},{x:1,y:8},"../media/w_rook.svg",[]);
const k2 = new Piece("white Knight 2","k2","white",{x:1,y:7},{x:1,y:7},"../media/w_knight.svg",[]);
const b2 = new Piece("white Bishop 2","b2","white",{x:1,y:6},{x:1,y:6},"../media/w_bishop.svg",[]);
const k = new Piece("white King","k","white",{x:1,y:5},{x:1,y:5},"../media/w_king.svg",[]);
const q = new Piece("white Queen","q","white",{x:1,y:4},{x:1,y:4},"../media/w_queen.svg",[]);

const p1 = new Piece("white Pawn 1","p1","white",{x:2,y:1},{x:2,y:1},"../media/w_pawn.svg",[])
const p2 = new Piece("white Pawn 2","p2","white",{x:2,y:2},{x:2,y:2},"../media/w_pawn.svg",[])
const p3 = new Piece("white Pawn 3","p3","white",{x:2,y:3},{x:2,y:3},"../media/w_pawn.svg",[])
const p4 = new Piece("white Pawn 4","p4","white",{x:2,y:4},{x:2,y:4},"../media/w_pawn.svg",[])
const p5 = new Piece("white Pawn 5","p5","white",{x:2,y:5},{x:2,y:5},"../media/w_pawn.svg",[])
const p6 = new Piece("white Pawn 6","p6","white",{x:2,y:6},{x:2,y:6},"../media/w_pawn.svg",[])
const p7 = new Piece("white Pawn 7","p7","white",{x:2,y:7},{x:2,y:7},"../media/w_pawn.svg",[])
const p8 = new Piece("white Pawn 8","p8","white",{x:2,y:8},{x:2,y:8},"../media/w_pawn.svg",[])

pieceArray = [rx1,kx1,bx1,rx2,kx2,bx2,kb,qb,r1,k1,b1,px1,px2,px3,px4,px5,px6,px7,px8,r2,k2,b2,k,q,p1,p2,p3,p4,p5,p6,p7,p8]
pieceArray.forEach(e => e.displayPiece())

calculateRookMoves = (obj) => {
   obj.moves =[];
   let {currPos} = obj;
   for(let i = 1 ; i < 8 ; i++){
    let newX = currPos.x +i;
    if(newX >8){
        newX = newX - 8;
    }
    obj.moves.push({ x: newX, y: currPos.y});
   }

   for(let i = 1 ; i < 8 ; i++){
    let newY = currPos.y + i;
    if(newY > 8){
        newY = newY - 8; 
    }
    obj.moves.push({ x:currPos.x,y:newY})
   }
}

calculateBishopMoves = (obj) => {
    obj.moves=[];
    const {currPos} = obj;
    let move = 1;
    while(move < 8){
        obj.moves.push({
            x: currPos.x + move,
            y: currPos.y + move
        });
        move++
    }
    move = 1;
    while(move < 8){
        obj.moves.push({
            x: currPos.x - move,
            y: currPos.y - move
        });
        move++
    }
    move = 1;
    while(move < 8){
        obj.moves.push({
            x: currPos.x - move,
            y: currPos.y + move
        });
        move++
    }
    move = 1;
    while(move < 8){
        obj.moves.push({
            x: currPos.x + move,
            y: currPos.y - move
        });
        move++
    }
   obj.moves = obj.moves.filter((e) => e.x > 0 && e.x < 9 && e.y > 0 && e.y < 9)
   
}

calculateKnightMoves = (obj) => {
    obj.moves = [];
    const {currPos} = obj;
    obj.moves.push({ x:currPos.x + 2 , y: currPos.y + 1});
    obj.moves.push({ x:currPos.x - 2 , y: currPos.y - 1});
    obj.moves.push({ x:currPos.x + 2 , y: currPos.y - 1});
    obj.moves.push({ x:currPos.x - 2 , y: currPos.y + 1});
    obj.moves.push({ x:currPos.x + 1 , y: currPos.y + 2});
    obj.moves.push({ x:currPos.x + 1 , y: currPos.y - 2});
    obj.moves.push({ x:currPos.x - 1 , y: currPos.y + 2});
    obj.moves.push({ x:currPos.x - 1 , y: currPos.y - 2}); 
}

calculateKingMoves = (obj) => {
      obj.moves = [];
      const {currPos} = obj;
      let moves = [];
      moves.push({ x:currPos.x + 1 , y:currPos.y + 1})
      moves.push({ x:currPos.x - 1 , y:currPos.y - 1})
      moves.push({ x:currPos.x + 1 , y:currPos.y - 1})
      moves.push({ x:currPos.x - 1 , y:currPos.y + 1})
      moves.push({ x:currPos.x , y:currPos.y + 1 })
      moves.push({ x:currPos.x , y:currPos.y - 1 })
      moves.push({ x:currPos.x + 1 , y:currPos.y })
      moves.push({ x:currPos.x - 1 , y:currPos.y })
      moves.filter((e) => e.x>0 && e.x < 9 && e.y >0 && e.y< 9)
    //   obj.moves = moves.map((e) => e)  
}

calculateQueenMoves = (obj) => {
    calculateBishopMoves(obj)
    const { currPos} = obj;
    for( let i = 1 ; i < 8 ; i++){
        let newX = currPos.x + i;
        if(newX > 8 ) {
            newX = newX - 8;
        }
        obj.moves.push({ x:newX, y: currPos.y})
    }
    for (let i = 1; i < 8; i++) {
       let newY = currPos.y + i;
       if(newY > 8){
         newY = newY - 8;
       } 
       obj.moves.push({ x:currPos.x , y:newY}) 
    }
   
}













