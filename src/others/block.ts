import { Point } from "./point"

export class Block {
  public points: [Point | null]

  constructor(points: [Point | null]) {
    this.points = points
  }
}
