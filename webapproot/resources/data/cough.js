{
    "question": "Do you have any difficulty breathing?", 
	"responses": [
		{
			"answer": "No", 
			"question": "Do you have any wheezing?", 
			"responses": [
				{
					"answer": "No", 
					"question": "Do you have any chest pain when you are not coughing?", 
					"responses": [
						{
							"answer": "No ", 
							"question": "Do you have any sinus pain?", 
							"responses": [
								{
									"answer": "No", 
									"question": "Do you have any swelling in your ankles?", 
									"responses": [
										{
											"answer": "No", 
											"question": "Are you producing and yellow or green mucus?", 
											"responses": [
												{
													"answer": "No", 
													"question": "Do you have a fever?", 
													"responses": [
														{
															"answer": "No", 
															"actionCode": "Disposition_CoughNOFEVERHomeCare", 
															"nodeId": 681
														}, 
														{
															"answer": "Yes", 
															"question": "Have you had a fever more than 3 days?", 
															"responses": [
																{
																	"answer": "No", 
																	"actioncode": "Disposition_CoughFeverHomeCare", 
																	"nodeId": 686
																}, 
																{
																	"answer": "Yes", 
																	"actioncode": "Disposition_CoughFever3daysNextDay", 
																	"nodeId": 689
																}
															], 
															"nodeId": 684
														}
													], 
													"nodeId": 679
												}, 
												{
													"answer": "Yes", 
													"question": "Do you have a fever?", 
													"responses": [
														{
															"answer": "No", 
															"actionCode": "Disposition_CoughMucusNOFEVERHOMECARE", 
															"nodeId": 696
														}, 
														{
															"answer": "Yes", 
															"question": "Have you had a fever more than 3 days?", 
															"responses": [
																{
																	"answer": "No", 
																	"actioncode": "Disposition_CoughMUCUSFeverHomeCare", 
																	"nodeId": 701
																}, 
																{
																	"answer": "Yes", 
																	"actioncode": "Disposition_CoughMUCYSFever3daysNextDay", 
																	"nodeId": 704
																}
															], 
															"nodeId": 699
														}
													], 
													"nodeId": 694
												}
											], 
											"nodeId": 677
										}, 
										{
											"answer": "Yes", 
											"actionCode": "Disposition_CoughEdemaNextDayVisit", 
											"nodeId": 710
										}
									], 
									"nodeId": 675
								}, 
								{
									"answer": "Yes", 
									"actionCode": "Disposition_CoughSinusNextDayVisit", 
									"nodeId": 714
								}
							], 
							"nodeId": 673
						}, 
						{
							"answer": "Yes", 
							"actionCode": "Disposition_CoughCPUrgentCare", 
							"nodeId": 718
						}
					], 
					"nodeId": 671
				}, 
				{
					"answer": "Yes", 
					"actionCode": "Disposition_CoughWheezeUrgentCare", 
					"nodeId": 722
				}
			], 
			"nodeId": 669
		}, 
		{
			"answer": "Yes", 
			"actionCode": "Disposition_CoughDiffBreathUrgentCare", 
			"nodeId": 726
		}
	], 
	"nodeId": 667
}