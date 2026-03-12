export const loginCredentials = [{
  uid: "108659",
  password: "123456",
  name: "Rajesh sharma",
  email: "rajeshranjan22@gmail.com",
  mobile: "9999999991",
  university: "SUxCG 714",

  image: "",

  attendance: {
    semester: "Semester 2",
    present: 126,
    total: 146,
    bonus: 2,
    percentLabel: 88,
    startDate: "29/01/2026",
    endDate: "30/06/2026",
  },

  subjects: [
    "SU11 - GIT & GITHUB",
    "SU12 - C Language",
    "SU13 - HTML/CSS/JS",
    "SU14 - UI/UX FIGMA",
    "SU15 - MATHS",
    "SU16 - JavaScript",
    "SU0201 - ReactJS",
    "SU0202 - NodeJS",
    "SU0203 - NoSQL",
    "SU0204 - OOPS",
    "SU0205 - Maths 2",
    "SU0206 - EVS",
    "SU0207 - IR 01",
    "SU0208 - IR 02"
  ],
  mentors : [
    {
        name : "Ankita",
        batch : "SUxCG-714"
    },
  ],
assignment : 0,
pendingAssignmnet :0,
events : []
}, {
       uid: "108684",
    password: "123456",
}]


export const loginDetails = (uid, password) => {
   const student= loginCredentials.find((ele)=>{
        if(ele.uid == uid && password == ele.password){
            return ele
        }
    })
      localStorage.setItem("student", JSON.stringify(student));
    if(student){
    
        return true;
    }
    return false;
};