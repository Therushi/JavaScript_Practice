
var getRoleInfo = (name, role) =>{

    switch (role) {
        case "admin":
            return `${name} you have full access because you are admin`
            break;
        case "sub-admin":
            return `${name} you have access to edit/remove files because you are sub-admin`
            break;
        case "testPrep":
            return `${name} you have access to edit/remove test because you are testPrep`
            break;
        case "user":
            return `${name} you have access to consume data because you are user`
            break;

        default:
            break;
    }
}

console.log(getRoleInfo("Aj", "testPrep"));