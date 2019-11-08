import { User } from './User';
import { Role } from './Role';

export class UserRoleAccount {
    constructor (
        public uraId = -1,
        public user: User = null,
        public role: Role = null,
        public account: Account = null
    ) {}
}