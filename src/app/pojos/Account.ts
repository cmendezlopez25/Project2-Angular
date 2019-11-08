import { UserRoleAccount } from './UserRoleAccount';
import { Transaction } from './Transaction';

export class Account {
    constructor(
        public accountId = -1,
        public accountName = "",
        public transactions: Transaction[] = [],
        public userRoleAccounts: UserRoleAccount[] = []
    ){}
    public setRelation(relation: UserRoleAccount[]): void {
        this.userRoleAccounts = relation;
    }
}
