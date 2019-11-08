export class Transaction{
	constructor(
		public id = -1,
		public accountId = -1,
		public name = "",
		public amount = 0,
		public date = new Date(),
		public note = ""
	){}
}