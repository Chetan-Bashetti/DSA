class Stack {
	constructor() {
		this.stackDs = [];
	}

	push(value) {
		this.stackDs.unshift(value);
	}

	pop() {
		this.stackDs.shift(this.stackDs[0]);
	}

	peak() {
		console.log('Top of the stack is =>', this.stackDs[0]);
	}

	print() {
		console.log('Elements in the stack are =>', this.stackDs);
	}

	size() {
		console.log(
			'Total number of Elements in the stack are =>',
			this.stackDs.length
		);
	}

	isEmpty() {
		console.log('Is empty', this.stackDs.length ? true : false);
	}
}

const newStack = new Stack();

newStack.isEmpty();
newStack.print();

newStack.push(1);
newStack.print();

newStack.push(2);
newStack.print();

newStack.push(3);
newStack.print();

newStack.peak();
newStack.print();

newStack.size();

newStack.pop();
newStack.print();

newStack.print();
