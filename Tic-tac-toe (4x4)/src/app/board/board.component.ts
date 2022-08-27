import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares!: any[];
  xIsNext?: boolean;
  winner?: any;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }
  newGame() {
    this.squares = Array(16).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }
  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares?.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [1, 2, 3],
      [4, 5, 6],
      [5, 6, 7],
      [8, 9, 10],
      [9, 10, 11],
      [12, 13, 14],
      [13, 14, 15],
      [0, 4, 8],
      [4, 8, 12],
      [1, 5, 9],
      [5, 9, 13],
      [2, 6, 10],
      [6, 10, 14],
      [3, 7, 11],
      [7, 11, 15],
      [1, 6, 11],
      [0, 5, 10],
      [5, 10, 15],
      [4, 9, 14],
      [2, 5, 8],
      [6, 9, 12],
      [3, 6, 9],
      [7, 10, 13],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
