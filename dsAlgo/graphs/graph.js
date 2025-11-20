class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  printGraph() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, "->", this.adjacencyList[vertex].join(","));
    }
  }
}
// Example usage:
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("C", "D");

g.printGraph();
