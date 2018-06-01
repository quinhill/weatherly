import Node from './Node.js';

export default class Trie {
  constructor() {
    this.counter = 0;
    this.root = new Node();
    this.suggestions = [];
  }

  count() {
    return this.counter;
  }

  insert(data) {
    let wordArray = [...data.toLowerCase()];
    let currentNode = this.root;

    wordArray.forEach(letter => {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }
      if (currentNode){
      currentNode = currentNode.children[letter];
    }
    });

    if (!currentNode.complete) {
      this.counter++;
      currentNode.complete = wordArray.join('');
    }
  }

  suggest(letters) {
    this.suggestions = [];
    let currentNode = this.root;
    let letterArray = [...letters.toLowerCase()];
    let childrenKeys = Object.keys(this.root.children);

    if (!childrenKeys.includes(letters[0])) {
      return this.suggestions;
    }

    for (let i = 0; i < letterArray.length; i++) {
      if (currentNode) {
      currentNode = currentNode.children[letterArray[i]];
     }
    }

    if (currentNode) {
      this.findWords(currentNode);
    }
    return this.suggestions;
  }

  findWords(currentNode) {
    let childrenNodes = Object.keys(currentNode.children);

    childrenNodes.forEach((child) => {
      if (currentNode.children[child].complete) {
        this.suggestions.push(currentNode.children[child].complete);
      }
      this.findWords(currentNode.children[child]);
    });
  }

  populate(array) {
    array.forEach(word => this.insert(word));
  }

  optimize() {
    let currentNode = this.root;

    this.optimizeHelper(currentNode);
  }

  optimizeHelper(currentNode) {

    const childrenKeys = Object.keys(currentNode.children);

    childrenKeys.forEach(child => {

      let node = currentNode.children[child];

      while (Object.keys(node.children).length <= 1) {
        const nextChildKey = Object.keys(node.children);

        if (nextChildKey.length !== 0 && !node.complete) {
          node.data += nextChildKey.join('');
          node.complete = node.children[nextChildKey].complete;
          node.children = node.children[nextChildKey].children;
          delete node.children[child];
        } else {
          return this.optimizeHelper(node);
        }
      }
      return this.optimizeHelper(node);
    });
  }

  expand() {
    let currentNode = this.root;
    this.findWords(currentNode)
    this.root = new Node();
    this.populate(this.suggestions)
  }
}
