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

var Rushi = new User("Rushi", "Rushi@google.dev");
console.log(Rushi.getInfo());
Rushi.enrollCourse("React dev Bootcamp");
Rushi.enrollCourse("cyber security");
console.log(Rushi.getCourseList());
