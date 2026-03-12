export const loginCredentials = [{
    uid: "108659",
    password: "123456",
    name : "Patel manankumar nileshkumar",
    mobile : 9512628557,
    totalAttendance : 144,
    studentAttendance : 139,
    totalAppliedLeave : 1,
    acceptedLeave : 1,
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