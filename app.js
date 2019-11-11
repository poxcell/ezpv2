const nextButton = document.querySelector("#next"),
    prevButton = document.querySelector("#previous")

let currentweek = 0,
    programName = "pplPH";

class UI {
    addCurrentExercises(exercises) {
        const list = document.querySelector("#list");
        // create new UL element
        const newDiv = document.createElement("div");
        // assign class 
        newDiv.className = "current-Day container mx-auto row "
        
        exercises.forEach(e => {
            newDiv.innerHTML += `
        
        `
        if(e.type === "ladder"){
            newDiv.innerHTML+= `
            <div class="px-auto pt-3 alert alert-primary">
        ${e.name}  : <input type="number" name="" id="" placeholder="${e.weight}"class="${e.name} input-box "> 
        
            <div class="container">
                sets : ${e.sets[0]} / reps : ${e.reps[0]} / weight : ${Math.round( (e.weight)*.80)}
            </div>
            <div class="container">
                sets : ${e.sets[1]} / reps : ${e.reps[1]} / weight : ${Math.round((e.weight)*.9)}
            </div>
            <div class="container">
                sets : ${e.sets[2]} / reps : ${e.reps[2]} / weight : ${e.weight}
            </div>
            </div>
            `
        }else{
            newDiv.innerHTML+= `
            <div class="px-auto pt-3 alert alert-primary">
        ${e.name}  : <input type="number" name="" id="" placeholder="${e.weight}"class="${e.name} input-box 
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
            template = excercises[programName];
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
    static displayExcercisese() {
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

document.addEventListener("DOMContentLoaded", ProgramTemplate.displayExcercisese());


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
            if (element.name == changedWeigth) {
                currentDay[index].weight = parseInt(e.target.value)
                currentTemplate.ex[currentTemplate.currentDay] = currentDay
            }
        });

        console.log(currentTemplate.ex[currentTemplate.currentDay])
        console.log(currentTemplate)
        ProgramTemplate.saveTemplate(currentTemplate)
    }else{
        e.target.value = ""
    }
    document.querySelector(".current-Day").remove()
    ProgramTemplate.displayExcercisese()

})

//
//
//