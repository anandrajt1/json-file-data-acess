function loadData(){

    fetch('./studentData.json')

    .then(function(response){
        // console.log(response)
        return response.json()
    })

    .then(hai=>{
        document.getElementById('text').innerHTML=hai.students[0].name
    })
}