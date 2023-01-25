export function iota(from: number, to: number) {
	return Array<number>(to + 1 - from).fill(from).map((v, i) => v + i);
}