const excercises = {
    pplPH: {
        name: "PPL-PH",
        weeks: 6,
        currentDay: 0,
        currentWeek: 0,
        ex: [
            [{
                    name: "Barbell-Row",
                    weight: 0,
                    muscle: "back",
                    type: "ladder",
                    sets: [5, 3, 2],
                    reps: [3, 3, 2]
                },
                {
                    name: "Pull-Up",
                    weight: 0,
                    muscle: "back",
                    type: "ladder",
                    sets: [5, 3, 2],
                    reps: [3, 3, 2]
                },
                {
                    name: "BB-Bicep",
                    weight: 0,
                    muscle: "bicep",
                    type: "superset",
                    sets: 5,
                    reps: 12
                },
                {
                    name: "rear-delt",
                    weight: 0,
                    muscle: "delt",
                    type: "superset",
                    sets: 5,
                    reps: 15
                }
            ],
            [{
                    name: "Squat",
                    weight: 0,
                    muscle: "quads",
                    type: "ladder",
                    sets: [5, 3, 2],
                    reps: [3, 3, 2]
                },
                {
                    name: "Deadlift",
                    weight: 0,
                    muscle: "hamstring",
                    type: "ladder",
                    sets: [5, 3, 2],
                    reps: [3, 3, 2]
                },
                {
                    name: "lunges",
                    weight: 0,
                    muscle: "quads",
                    type: "superset",
                    sets: 3,
                    reps: 0
                },
                {
                    name: "death-March",
                    weight: 0,
                    muscle: "hamstrings",
                    type: "superset",
                    sets: 3,
                    reps: 0
                },
                {
                    name: "sideBend",
                    weight: 0,
                    muscle: "abs",
                    type: "simple",
                    sets: 3,
                    reps: 10
                }
            ],
            [{
                name: "Bench-Press",
                weight: 0,
                muscle: "Chest",
                type: "ladder",
                sets: [5, 3, 2],
                reps: [3, 3, 2]
            },
            {
                name: "OHP",
                weight: 0,
                muscle: "Shoulder",
                type: "ladder",
                sets: [5, 3, 2],
                reps: [3, 3, 2]
            },
            {
                name: "lateral-Raise",
                weight: 0,
                muscle: "delt",
                type: "superset",
                sets: 5,
                reps: 10
            },
            {
                name: "machine-Dip",
                weight: 0,
                muscle: "delt",
                type: "superset",
                sets: 5,
                reps: 10
            },{
                name: "face-Pull",
                weight: 0,
                muscle: "delt",
                type: "superset",
                sets: 5,
                reps: 10
            }],
            [{
                name: "Pull-Down",
                weight: 0,
                muscle: "back",
                type: "superset",
                sets: 5,
                reps: 8
            },
            {
                name: "Barbell-Bicep",
                weight: 0,
                muscle: "bicep",
                type: "superset",
                sets: 5,
                reps: 10
            },
            {
                name: "Machine-Row",
                weight: 0,
                muscle: "back",
                type: "superset",
                sets: 5,
                reps: 8
            },
            {
                name: "Inclined-Bicep",
                weight: 0,
                muscle: "bicep",
                type: "superset",
                sets: 5,
                reps: 10
            },
            {
                name: "Pull-Over",
                weight: 0,
                muscle: "back",
                type: "superset",
                sets: 5,
                reps: 12
            },
            {
                name: "rear-delt",
                weight: 0,
                muscle: "delt",
                type: "superset",
                sets: 5,
                reps: 15
            }],
            [{
                name: "Lunges",
                weight: 0,
                muscle: "quad",
                type: "superset",
                sets: 5,
                reps: 0
            },
            {
                name: "Death-March",
                weight: 0,
                muscle: "hamstring",
                type: "superset",
                sets: 5,
                reps: 0
            },
            {
                name: "leg-extension",
                weight: 0,
                muscle: "quads",
                type: "superset",
                sets: 5,
                reps: 12
            },
            {
                name: "leg-curl",
                weight: 0,
                muscle: "bicep",
                type: "superset",
                sets: 5,
                reps: 12
            },
            {
                name: "goblet-Squat",
                weight: 0,
                muscle: "quad",
                type: "superset",
                sets: 5,
                reps: 20
            },
            {
                name: "Romanian-Deadlift",
                weight: 0,
                muscle: "hamstring",
                type: "superset",
                sets: 5,
                reps: 20
            }],
            [{
                name: "DB-BenchPress",
                weight: 0,
                muscle: "chest",
                type: "superset",
                sets: 5,
                reps: 10
            },
            {
                name: "DB-press",
                weight: 0,
                muscle: "shoulder",
                type: "superset",
                sets: 5,
                reps: 10
            },
            {
                name: "cable-fly",
                weight: 0,
                muscle: "chest",
                type: "superset",
                sets: 5,
                reps: 15
            },
            {
                name: "lateral-raise",
                weight: 0,
                muscle: "delt",
                type: "superset",
                sets: 5,
                reps: 10
            },
            {
                name: "OH-tricep-rope",
                weight: 0,
                muscle: "back",
                type: "superset",
                sets: 5,
                reps: 15
            },
            {
                name: "tricep-press",
                weight: 0,
                muscle: "delt",
                type: "superset",
                sets: 5,
                reps: 20
            }]
        ]
    },
    pplPH2: {
        name: "PPL-PH",
        weeks: 6,
        ex: [
            [{
                    name: "a",
                    weight: 2,
                    type: "leg"
                },
                {
                    name: "b",
                    weight: 2,
                    type: "leg"
                },
                {
                    name: "c",
                    weight: 2,
                    type: "leg"
                },
                {
                    name: "d",
                    weight: 2,
                    type: "leg"
                }
            ],
            [{
                name: "e",
                weight: 2,
                type: "chest"
            }, {
                name: "f",
                weight: 2,
                type: "chest"
            }, {
                name: "g",
                weight: 2,
                type: "chest"
            }, {
                name: "h",
                weight: 2,
                type: "chest"
            }],
            [{
                name: "i",
                weight: 2,
                type: "back"
            }, {
                name: "j",
                weight: 2,
                type: "back"
            }, {
                name: "k",
                weight: 2,
                type: "back"
            }, {
                name: "l",
                weight: 2,
                type: "back"
            }]
        ]
    }
}