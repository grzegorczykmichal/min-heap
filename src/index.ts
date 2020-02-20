class MinHeap<T> {
  heap: T[];

  constructor(array: T[]) {
    this.heap = this.buildHeap(array);
  }

  get Length() {
    return this.heap.length;
  }

  get LastIndex() {
    return this.Length - 1;
  }

  buildHeap(array: T[]): T[] {
    return array;
  }

  siftDown(currentIndex: number, endIndex: number, heap: T[]): T[] {
    return [];
  }

  siftUp(currentIndex: number, heap: T[]): T[] {
    if (currentIndex === 0) {
      return heap;
    }
    const parentIndex = Math.floor((currentIndex - 1) / 2);
    if (heap[parentIndex] > heap[currentIndex]) {
      return this.swap(currentIndex, parentIndex, heap);
    }
    return heap;
  }

  peek() {
    return this.heap[0];
  }

  remove(): T | undefined {
    this.heap = this.swap(0, this.LastIndex, this.heap);
    const value = this.heap.pop();
    this.heap = this.siftDown(0, this.LastIndex, this.heap);
    return value;
  }

  insert(value: T) {
    this.heap = this.heap.concat([value]);
    this.heap = this.siftUp(this.LastIndex, this.heap);
  }

  swap(i: number, j: number, heap: T[]) {
    const h = [...heap];
    const t = h[i];
    h[i] = h[j];
    h[j] = t;
    return h;
  }
}

const minHeap = new MinHeap<number>([3, 2]);
log(minHeap);
minHeap.insert(1);
log(minHeap);
function log(heap: any) {
  console.log(heap.heap);
}
