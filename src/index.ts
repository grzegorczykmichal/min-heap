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
    if (currentIndex >= endIndex) {
      return heap;
    }
    const leftChildIndex = currentIndex * 2 + 1;
    const rightChildIndex = currentIndex * 2 + 2;

    const leftChild =
      leftChildIndex < this.LastIndex ? heap[leftChildIndex] : null;
    const rightChild =
      leftChildIndex < this.LastIndex ? heap[rightChildIndex] : null;

    let childIndex = null;

    if (leftChild === null) {
      childIndex = rightChildIndex;
    }

    if (rightChild === null) {
      childIndex = leftChildIndex;
    }

    if (leftChild !== null || rightChild !== null) {
      childIndex = leftChild! < rightChild! ? leftChildIndex : rightChildIndex;
    }

    if (childIndex) {
      return this.siftDown(
        childIndex,
        endIndex,
        this.swap(currentIndex, childIndex, heap)
      );
    }

    return heap;
  }

  siftUp(currentIndex: number, heap: T[]): T[] {
    if (currentIndex === 0) {
      return heap;
    }
    const parentIndex = Math.floor((currentIndex - 1) / 2);
    if (heap[parentIndex] > heap[currentIndex]) {
      return this.siftUp(
        parentIndex,
        this.swap(currentIndex, parentIndex, heap)
      );
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

const minHeap = new MinHeap<number>([1, 100, 20, 50, 45, 19, 18]);
log(minHeap);
minHeap.remove();
log(minHeap);
minHeap.insert(1);
log(minHeap);
function log(heap: any) {
  console.log(heap.heap);
}
