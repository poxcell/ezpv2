const exercises = {
    pplPH2: {
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
                    reps: [3, 3, 2],
                    weightP: [.8, .9, 1]
                },
                {
                    name: "Pull-Up",
                    weight: 0,
                    muscle: "back",
                    type: "ladder",
                    sets: [5, 3, 2],
                    reps: [3, 3, 2],
                    weightP: [.8, .9, 1]
                },
                {
                    type: "superset",
                    exercises: [{
                            name: "BB-Bicep",
                            weight: 0,
                            muscle: "bicep",
                            sets: 5,
                            reps: 12
                        },
                        {
                            name: "rear-delt",
                            weight: 0,
                            muscle: "delt",
                            sets: 5,
                            reps: 15
                        }
                    ]
                },
                {
                    type: "superset",
                    exercises: [{
                            name: "flag-abs",
                            weight: 0,
                            muscle: "abs",
                            sets: 5,
                            reps: 20
                        },
                        {
                            name: "db-Curl",
                            weight: 0,
                            muscle: "bicep",
                            sets: 5,
                            reps: 20
                        }
                    ]
                }
            ],
            [{
                    name: "Squat",
                    weight: 0,
                    muscle: "quads",
                    type: "ladder",
                    sets: [5, 3, 2],
                    reps: [3, 3, 2],
                    weightP: [.8, .9, 1]
                },
                {
                    name: "Deadlift",
                    weight: 0,
                    muscle: "hamstring",
                    type: "ladder",
                    sets: [5, 3, 2],
                    reps: [3, 3, 2],
                    weightP: [.8, .9, 1]
                },
                {
                    type: "superset",
                    exercises: [{
                            name: "lunges",
                            weight: 0,
                            muscle: "quads",
                            sets: 3,
                            reps: 1
                        },
                        {
                            name: "death-March",
                            weight: 0,
                            muscle: "hamstrings",
                            sets: 3,
                            reps: 1
                        }
                    ]
                }
            ],
            [{
                    name: "Bench-Press",
                    weight: 0,
                    muscle: "Chest",
                    type: "ladder",
                    sets: [5, 3, 2],
                    reps: [3, 3, 2],
                    weightP: [.8, .9, 1]
                },
                {
                    name: "OHP",
                    weight: 0,
                    muscle: "Shoulder",
                    type: "ladder",
                    sets: [5, 3, 2],
                    reps: [3, 3, 2],
                    weightP: [.8, .9, 1]
                },
                {
                    type: "superset",
                    exercises: [{
                            name: "lateral-Raise",
                            weight: 0,
                            muscle: "delt",
                            sets: 5,
                            reps: 10
                        },
                        {
                            name: "machine-Dip",
                            weight: 0,
                            muscle: "delt",
                            sets: 5,
                            reps: 10
                        }
                    ]
                },
                {
                    type: "superset",
                    exercises: [{
                            name: "face-Pull",
                            weight: 0,
                            muscle: "delt",
                            sets: 5,
                            reps: 10
                        },
                        {
                            name: "side-Bends",
                            weight: 0,
                            muscle: "abs",
                            sets: 5,
                            reps: 10
                        }
                    ]
                }
            ],
            [{
                    type: "superset",
                    exercises: [{
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
                        }
                    ]
                },
                {
                    type: "superset",
                    exercises: [{
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
                        }
                    ]
                },
                {
                    type: "superset",
                    exercises: [{
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
                        }
                    ]
                }
            ],
            [{
                    type: "superset",
                    exercises: [{
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
                        }
                    ]
                },
                {
                    type: "superset",
                    exercises: [{
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
                        }
                    ]
                },
                {
                    type: "superset",
                    exercises: [{
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
                        }
                    ]
                }
            ],
            [{
                    type: "superset",
                    exercises: [{
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
                        }
                    ]
                },
                {
                    type: "superset",
                    exercises: [{
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
                        }
                    ]
                },
                {
                    type: "superset",
                    exercises: [{
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
                        }
                    ]
                }
            ]
        ]
    }
}