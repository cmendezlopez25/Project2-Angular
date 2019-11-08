export class Transaction{
	constructor(
		public id = -1,
		public account = null,
		public transactionName = "",
		public amount = 0,
		public date = new Date().toUTCString(),
		public note = ""
	){}
}