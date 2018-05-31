import Node from './Node';

export default class Trie {
  constructor() {
    this.count = 0;
    this.root = new Node();
    this.suggestions = [];
  }

  insert(str) {
    let currNode = this.root;
    let splitWord = [...str.toLowerCase()];
    
    while (splitWord.length) {
      let letter = splitWord.shift();

      if (!currNode.child[letter]) {
        currNode.child[letter] = new Node(letter); 
      }
      currNode = currNode.child[letter];  
    }
    currNode.completeWord = str.toLowerCase();
    this.count++;
  }

  counter() {
    return this.count;
  }

  contains(str) {
    let currNode = this.root;
    let word = [...str]

    word.forEach(letter => {
      currNode = currNode.child[letter]
    })
    return !!currNode.completeWord;
  }


  suggest(prefix) {
    let currNode = this.root;
    let cleanPrefix = [...prefix.toLowerCase()];

    this.suggestions = [];


    cleanPrefix.forEach(letter => {
      if (currNode) {
      currNode = currNode.child[letter];
      }
    });

      const search = node => {
    if (node) {
        if (node.completeWord) {
          this.suggestions.push(node.completeWord);
        }

        let nodeKeys = Object.keys(node.child);

        nodeKeys.forEach(key => {
          search(node.child[key]);
        });
      };
    };


    search(currNode);
    return this.suggestions;
  }

  populate(arr) {
    arr.forEach(word => this.insert(word));
  }

  
}