import { UserRoleAccount } from './UserRoleAccount';

export class User{
    constructor(
        public email = "", 
        public password = "", 
        public confirmPassword = "", 
        public firstName = "", 
        public lastName = "",
        public userRoleAccounts: UserRoleAccount[] = []
    ) {}
}