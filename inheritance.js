class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.courseList.push(name);
  }
  getCourseList() {
    return this.courseList;
  }
}

class subAdmin extends User {
  getAdminInfo() {
    return "I am Subadmin";
  }
}

const tom = new subAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());
