class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

//CURD operations
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  //insert a word
  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }

  //search (for complete word)
  search(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) return false;
      current = current.children[char];
    }
    return current.isEndOfWord;
  }

  //search startWith (if ant word starts with given prefix)
  startsWith(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) return false;
      current = current.children[char];
    }
    return true;
  }
}
