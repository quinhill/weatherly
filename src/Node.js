export default class Node {
  constructor(data) {
    this.data = data;
    this.complete = null;
    this.children = {};
  }
}