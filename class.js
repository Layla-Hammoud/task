const course_value = document.getElementById("course_name")
const instructor_value = document.getElementById("instructor_name")
const button = document.getElementById("button")
const post_info = document.getElementById("post_info")

class Course {
    constructor(course_name, instructor_name) {
      this.course_name = course_name;
      this.instructor_name = instructor_name;
    }
  }

button.addEventListener("click", createCourse);
function createCourse(){
    first_course =new Course(course_value.value,instructor_value.value)
    console.log(first_course)
    post_info.innerHTML=` The course name is ${first_course.course_name} <br>
    The instructor name in ${first_course.instructor_name}`
}


