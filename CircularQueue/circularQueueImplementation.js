class CircularQueue {
	constructor(capacity) {
		this.items = new Array(capacity);
		this.capacity = capacity;
		this.front = -1;
		this.rear = -1;
		this.currentLength = 0;
	}

	isFull() {
		return this.currentLength === this.capacity;
	}

	isEmpty() {
		return this.currentLength === 0;
	}

	enqueqe(value) {
		if (!this.isFull()) {
			this.rear++;
			this.currentLength++;
			this.items[this.rear] = value;
			if (this.front === -1) {
				this.front = this.rear;
			}
		} else {
			// console.log('Maximum capacity reached')
			this.rear++;
			this.rear = this.rear % this.items.length;
			this.items[this.rear] = value;
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			return null;
		}
		if (this.front === this.capacity) {
			this.front = this.front++ % this.capacity;
		} else {
			this.items[this.front] = null;
			this.front++;
		}
		if (this.isEmpty()) {
			this.front = -1;
			this.rear = -1;
		}
	}

	peak() {
		console.log('FRONT VALUE =>', this.front, this.items[this.front]);
		console.log('REAR VALUE =>', this.rear, this.items[this.rear]);
	}

	print() {
		console.log('Array list', this.items);
	}

	size() {
		console.log('Array size', this.items.length);
	}
}

let newCircularQueue = new CircularQueue(5);

newCircularQueue.enqueqe(10);
// newCircularQueue.print()
// newCircularQueue.size()

newCircularQueue.enqueqe(20);
// newCircularQueue.print()
// newCircularQueue.size()

newCircularQueue.enqueqe(30);
// newCircularQueue.print()
// newCircularQueue.size()

newCircularQueue.enqueqe(40);
// newCircularQueue.print()
// newCircularQueue.size()

newCircularQueue.enqueqe(50);
// newCircularQueue.print()
// newCircularQueue.size()

newCircularQueue.dequeue();
// newCircularQueue.print()
// newCircularQueue.size()
// newCircularQueue.peak()

newCircularQueue.dequeue();
// newCircularQueue.print()
// newCircularQueue.size()
// newCircularQueue.peak()

newCircularQueue.enqueqe(40);
newCircularQueue.print();
newCircularQueue.size();
newCircularQueue.peak();

newCircularQueue.dequeue();
newCircularQueue.print();
newCircularQueue.peak();

newCircularQueue.dequeue();
newCircularQueue.print();
newCircularQueue.peak();

newCircularQueue.dequeue();
newCircularQueue.print();
newCircularQueue.peak();

newCircularQueue.dequeue();
newCircularQueue.print();
newCircularQueue.peak();
