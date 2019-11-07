export class Transaction{
	constructor(
		public name = "",
		public amount = 0,
		public date = new Date(),
		public note = ""
	){}
}