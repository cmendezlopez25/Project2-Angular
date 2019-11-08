export class Role {
    constructor(
        public id = -1,
        public roleName = "",
        public userRoleAccount = [], 
    ){}
    static getRoleId(role: string){
        if (role == "Owner") return 1;
        else if (role == 'Admin') return 2;
        else if (role == 'Moderator') return 3;
        else if (role == 'Employee') return 4;
    }
}