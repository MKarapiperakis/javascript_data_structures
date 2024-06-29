export class HashTable {
  constructor(size = 5) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  printTable() {
    for (let i = 0; i < this.dataMap.length; i++) {
      console.log(i, ": ", this.dataMap[i]);
    }
  }
}
