import { UserRoleAccount } from './UserRoleAccount';

export class Role {
    constructor(
        public roleId = -1,
        public roleName = "",
        public userRoleAccounts: UserRoleAccount[] = [], 
    ){}
    static getRoleId(role: string){
        if (role == "Owner") return 1;
        else if (role == 'Admin') return 2;
        else if (role == 'Moderator') return 3;
        else if (role == 'Employee') return 4;
    }
}