{
    "question": "Do you have any difficulty breathing?",
    "responses": [{
        "answer": "No",
        "question": "Do you have any wheezing?",
        "responses": [{
            "answer": "No",
            "question": "Do you have any chest pain when you are not coughing?",
            "responses": [{
                "answer": "No ",
                "question": "Do you have any sinus pain?",
                "responses": [{
                    "answer": "No",
                    "question": "Do you have any swelling in your ankles?",
                    "responses": [{
                        "answer": "No",
                        "question": "Are you producing and yellow or green mucus?",
                        "responses": [{
                            "answer": "No",
                            "actionCode": "DispositionCoughHomeCare"
                        }, {
                            "answer": "Yes",
                            "responses": null,
                            "actionCode": "DispositionCoughNextDayVisit"
                        }

                        ]
                    }, {
                        "answer": "Yes",
                        "actionCode": "DispositionCoughNextDayVisit"
                    }

                    ]
                }, {
                    "answer": "Yes",
                    "actionCode": "DispositionCoughNextDayVisit"
                }

                ]
            }, {
                "answer": "Yes",
                "actionCode": "DispositionCoughUrgentCare"
            }

            ]
        }, {
            "answer": "Yes",
            "actionCode": "DispositionCoughUrgentCare"
        }

        ]
    }, {
        "answer": "Yes",
        "actionCode": "DispositionCoughUrgentCare"
    }

    ]
}