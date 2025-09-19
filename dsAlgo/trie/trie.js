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

  /*
----------------------------------------------------------
Stage 2: Practical Applications
----------------------------------------------------------
*/

  /*
1. Autocomplete System
Given a prefix, return all words that start with it.
Example: words = ["apple", "app", "ape", "bat"]
Input: "ap" → Output: ["apple", "app", "ape"]
*/
  autocomplete(prefix) {
    let current = this.root;
    for (let char of prefix) {
      if (!current.children[char]) return [];
      current = current.children[char];
    }

    const result = [];
    const dfs = (node, path) => {
      if (node.isEndOfWord) result.push(path);
      for (let ch in node.children) {
        dfs(node.children[ch], path + ch);
      }
    };

    dfs(current, prefix);
    return result;
  }
}

/*
-------------TESTING---------------
*/

//insert words
const trie = new Trie();
const word = ["apple", "app", "ape", "bat"];
for (let w of word) trie.insert(w);
console.log(trie.search("ap"));
console.log(trie.autocomplete("app"));

/*
Stage 2.2:
This is a very popular interview problem (like LeetCode 211 – Add and Search Word).
It builds directly on our Trie but introduces . wildcard matching.

🔹 Key Idea
During search, if we see a normal character → go down that path.
If we see "." → we must try all possible children recursively.
*/

class TrieNode {
  constructor() {
    this.children = {}; // {char: TrieNode}
    this.isEndOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    const dfs = (node, i) => {
      if (i === word.length) return node.isEndOfWord;

      const char = word[i];

      if (char !== ".") {
        if (!node.children[char]) return false;
        return dfs(node.children[char], i + 1);
      } else {
        for (let c in node.children) {
          if (dfs(node.children[c], i + 1)) return true;
        }
        return false;
      }
    };

    return dfs(this.root, 0);
  }
}
