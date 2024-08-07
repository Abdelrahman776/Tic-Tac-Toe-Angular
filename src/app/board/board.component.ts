import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {
  squares: any[];
  xisnext: boolean;
  winner: string;


  constructor() { }
  

  ngOnInit(): void {
    this.startgame();
  }

  startgame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xisnext=true
    
  }
  get player() {
    
   return this.xisnext ? 'X' : 'O';
    
  }
  makemove(index: number) {
    if (this.squares[index] === null) {//if the button is not clicked before change it 
this.squares.splice(index,1,this.player)
  this.xisnext = !this.xisnext;
    }
    this.winner = this.calculatewinner();

    if (this.winner === 'X' || this.winner === 'O') {
      for (let s = 0; s < this.squares.length; s++) {

        if (this.squares[s]===null) {
          
          this.squares[s] = '';
        }
      }
    }
  }


  calculatewinner() {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        

        return this.squares[a];
      }
    }

    return null;

  }
}
