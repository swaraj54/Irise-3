// Store
// localStorage.setItem("name", JSON.stringify("Value"))

// Retrive 
// JSON.parse(localStorage.getItem("name"))

// Delete 
// localStorage.removeItem("name")


function StoreData() {
    var myClass = { noOfStudents: 20, totalAssignSub: 100 }

    localStorage.setItem("userData", JSON.stringify(myClass))
    
    alert("Data added to LS successfully.")
    return
}

function RetriveData() {
    const dataFromLs = JSON.parse(localStorage.getItem("myData"))
    console.log(dataFromLs, "- data here")
    alert(`${dataFromLs.noOfStudents} - NO OF STUDENTS.`)
    return
}

function DeleteData() {
    localStorage.removeItem("myData");
    alert("Data deleted successfully done.")
}
