class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(value) {
		this.queue.unshift(value);
	}

	dequeue() {
		this.queue.pop();
	}

	peak() {
		console.log('Top the of the queqe is', this.queue[0]);
	}

	print() {
		console.log('The state of the queqe', this.queue);
	}

	size() {
		console.log('Total length of the queqe', this.queue.length);
	}

	isEmpty() {
		console.log('The queqe has any elements', this.queue.length !== 0);
	}
}

const newQueue = new Queue();

newQueue.peak();

newQueue.isEmpty();
newQueue.enqueue(1);
newQueue.print();

newQueue.enqueue(2);
newQueue.print();

newQueue.enqueue(3);
newQueue.print();

newQueue.peak();
newQueue.dequeue();

newQueue.size();
