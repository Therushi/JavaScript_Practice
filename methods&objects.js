var user = {
    firstName : "Rushikesh",
    lastName : "Dhanawade",
    role : "admin",
    loginCount : 32,
    facebookSighIn : true,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName)
    },
    getCourseCount : function () {
        return `${this.firstName} has enrolled in ${this.courseList.length} cources`;
    },
};

user.buyCourse("React Js course");
user.buyCourse("Bootstrap");
user.buyCourse("Full stack Dev");

console.log(user.getCourseCount())