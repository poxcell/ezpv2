const nextButton = document.querySelector("#next"),
    prevButton = document.querySelector("#previous")

let currentweek = 0,
    programName = "pplPH2";

class UI {
    addCurrentExercises(exercises) {
        const list = document.querySelector("#list");
        // create new UL element
        const newDiv = document.createElement("div");
        // assign class 
        newDiv.className = "current-Day  mx-auto pt-4"

        exercises.forEach(e => {

            if (e.type === "ladder") {
                const exDiv = document.createElement("div");
                exDiv.className = "align-items-center   rounded  shadow p-3 mb-3 bg-light rounded"
                exDiv.innerHTML += ` 
                <div class="px-auto pt-3   ">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-info text-white">${e.name}  : </span>
                        </div>
                        <input type="number"  placeholder="${e.weight}"class="${e.name} form-control w-25"> 
                    </div>
                </div>
                
            `
                const secDiv = document.createElement("div")
                secDiv.className = "container m-2 text-center  border-left  border-info"

                exDiv.appendChild(secDiv)
                for (let i = 0; i < e.sets.length; i++) {
                    const innerDiv = document.createElement("div");
                    innerDiv.className = " mb-3 "
                    innerDiv.innerHTML = `sets <span class="badge badge-info">${e.sets[i]}</span>    reps <span class="badge badge-info">${e.reps[i]}</span>    weight <span class="badge badge-info">${Math.round( (e.weight)*e.weightP[i])}</span>`
                    secDiv.appendChild(innerDiv)

                }
                newDiv.appendChild(exDiv)

            } else if (e.type === "superset") {
                let exNames = ""

                const exDiv = document.createElement("div");
                exDiv.className = "align-items-center    rounded  shadow p-3 mb-3 bg-light rounded"
                const nameTitle = document.createElement("p")
                nameTitle.className = "bg-info text-white rounded p-2 mb-0 text-center shadow"
                const exercisesDescription = document.createElement("div")
                exercisesDescription.className = "  text-white  m-2 px-3 border-left border-info text-dark"

                exDiv.innerHTML += ` 
                <div class="px-auto pt-3  rounded">
                        <div class="">
                        </div> 
                </div>
            
            `

                for (let i = 0; i < e.exercises.length; i++) {
                    if (i === e.exercises.length - 1) {

                        exNames += e.exercises[i].name
                    } else {
                        exNames += e.exercises[i].name + " + "
                    }
                }

                nameTitle.innerHTML = exNames
                newDiv.appendChild(exDiv)

                exDiv.children[0].children[0].appendChild(nameTitle)
                e.exercises.forEach(element => {
                    const innerDiv = document.createElement("div")
                    innerDiv.innerHTML = `<div class="input-group mt-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-info text-white">${element.name}  : </span>
                    </div>
                    <input type="number"  placeholder="${element.weight}"class="${element.name} form-control w-25"> 
                </div>
                    <div class = "container mb-3 ml-3">
                        sets <span class="badge badge-info">${element.sets}</span> reps <span class="badge badge-info">${element.reps}</span>
                    </div>
                    `
                    exercisesDescription.appendChild(innerDiv)
                });

                exDiv.children[0].children[0].appendChild(exercisesDescription)

            } else {
                newDiv.innerHTML += `
            <div class="px-auto pt-3 alert alert-primary">
                ${e.name}: 
                <input type="number" name="" id="" placeholder="
                ${e.weight}"class="
                ${e.name} input-box 
                <div class="container">
                    sets : ${e.sets} / reps : ${e.reps} 
            </div>
        </div>
        
        `

            }


        });
        list.appendChild(newDiv);
    }
}
class ProgramTemplate {
    static getTemplate() {

        let template;
        // check if the current exercise is saved into localStorage
        if (localStorage.getItem(programName) === null) {
            template = exercises[programName];
        } else {
            // load if saved from localStorage
            template = JSON.parse(localStorage.getItem(programName))
        }
        this.saveTemplate(template);
        return template;
    }
    static saveTemplate(template) {
        localStorage.setItem(programName, JSON.stringify(template))
    }
    static displayexercisese() {
        const ui = new UI()
        ui.addCurrentExercises(this.getCurrentDay())
    }
    static getWeekLength() {
        return this.getTemplate().ex.length
    }
    static getCurrentDay() {
        return this.getTemplate().ex[this.getTemplate().currentDay]
    }
    static getName() {
        return this.getTemplate().name
    }
}

document.addEventListener("DOMContentLoaded", ProgramTemplate.displayexercisese());


// Button to advance to next day
nextButton.addEventListener("click", () => {
    let currentTemplate = ProgramTemplate.getTemplate();
    // Removes current training day
    document.querySelector(".current-Day").remove()
    // get current day
    let currentDay = currentTemplate.currentDay;
    // add to current Day
    currentDay++

    // loops back to 0 if days are exceeded
    if (currentDay >= ProgramTemplate.getWeekLength()) {
        currentDay = 0;
    }
    const ui = new UI()
    // change current day on template
    currentTemplate.currentDay = currentDay;
    // saves current day on localStorage
    ProgramTemplate.saveTemplate(currentTemplate);
    // draws current day exercises
    ui.addCurrentExercises(ProgramTemplate.getCurrentDay())
});

// button for previous day
prevButton.addEventListener("click", () => {
    let currentTemplate = ProgramTemplate.getTemplate();
    // Removes current training day
    document.querySelector(".current-Day").remove()
    // get current day
    let currentDay = currentTemplate.currentDay;
    // rest to current Day 
    currentDay--;
    // loops back to last day if 0 is reached
    if (currentDay < 0) {
        currentDay = ProgramTemplate.getWeekLength() - 1;
    }
    const ui = new UI()
    // change current day on template
    currentTemplate.currentDay = currentDay;
    // saves current day on localStorage
    ProgramTemplate.saveTemplate(currentTemplate);
    // draws current day exercises
    ui.addCurrentExercises(ProgramTemplate.getCurrentDay())
})



//  save new weight to localstorage when changed in ui
document.querySelector(".container").addEventListener("change", (e) => {
    let currentTemplate = ProgramTemplate.getTemplate();
    let currentDay = ProgramTemplate.getCurrentDay()
    // gets the name of the exercise to change saved in class of l
    const changedWeigth = e.target.classList[0]
    // confirmation to change weigth
    if (confirm("quieres cambiar el peso de este ejercicio?")) {
        // loops on current day to find index of changed weight
        currentDay.forEach((element, index) => {

            //change weight on supersets
            if (element.type === "superset") {

                element.exercises.forEach((el,i) => {
                    
                    
                    if (el.name == changedWeigth) {
                        currentDay[index].exercises[i].weight = parseInt(e.target.value)
                        currentTemplate.ex[currentTemplate.currentDay] = currentDay
                    }
                });
            } 
            // change weight on non supersets
            else {
                if (element.name == changedWeigth) {

                    currentDay[index].weight = parseInt(e.target.value)
                    currentTemplate.ex[currentTemplate.currentDay] = currentDay
                }
            }
        });


        ProgramTemplate.saveTemplate(currentTemplate)
    } else {
        e.target.value = ""
    }
    document.querySelector(".current-Day").remove()
    ProgramTemplate.displayexercisese()

})

//
//
//