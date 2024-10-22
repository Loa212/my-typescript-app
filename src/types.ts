export interface GreetOptions {
	logger?: (message: string) => void;
	message: string;
	times?: number;
}

export interface Person {
	name: string;
	age: number;
}
