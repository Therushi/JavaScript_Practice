// create an application with an following roles
//admin - gets full access
// subadmin - get access to create delete cources
// testPrep - get access to create delete test
// user - get access to consume content

var user = "abc";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("You get access to create delete cources");
        break;
    case "testPrep":
        console.log("You get access to create delete test");
        break;
    case "user":
        console.log("You get access to consume content");
        break;
    default:
        console.log("trail user")
        break;
}