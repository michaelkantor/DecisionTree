{
    "question": "Are your main symptoms runny nose, itching eyes, sneezing, or nasal congestion?", 
	"responses": [
		{
			"answer": "Yes", 
			"question": "How and when did your symptoms start?", 
			"responses": [
				{
					"answer": "Ongoing for awhile", 
					"question": "Does anything inside(chemicals, dust, etc) or outside (pollen, etc) seem to trigger symptoms?", 
					"responses": [
						{
							"answer": "No ", 
							"question": "Do you take any daily prescribed or over the counter medications?", 
							"responses": [
								{
									"answer": "No", 
									"actioncode": "Disposition_AllergiesNOTRIGGERHomeCare", 
									"nodeId": 735
								}, 
								{
									"answer": "Yes", 
									"actionCode": "Disposition_Allergies_Meds_NextDay", 
									"nodeId": 738
								}
							], 
							"nodeId": 733
						}, 
						{
							"answer": "Yes", 
							"actionCode": "Disposition_AllergiesTRIGGERHomeCare", 
							"nodeId": 742
						}
					], 
					"nodeId": 731
				}, 
				{
					"answer": "Typically seasonal, they come and go", 
					"question": "Does anything inside(chemicals, dust, etc) or outside (pollen, etc) seem to trigger symptoms?", 
					"responses": [
						{
							"answer": "No ", 
							"question": "Do you take any daily prescribed or over the counter medications?", 
							"responses": [
								{
									"answer": "No", 
									"question": "What color is your nasal discharge (snot)?", 
									"responses": [
										{
											"answer": "Clear", 
											"question": "Do you have a fever?", 
											"responses": [
												{
													"answer": "No", 
													"actioncode": "Disposition_AllergiesClearNOFEVERHomeCare", 
													"nodeId": 754
												}, 
												{
													"answer": "Yes", 
													"question": "Have you had a fever more than 3 days?", 
													"responses": [
														{
															"answer": "No", 
															"actioncode": "Disposition_AllergiesCLEARFEVERHomeCare", 
															"nodeId": 759
														}, 
														{
															"answer": "Yes", 
															"actioncode": "Disposition_AllergiesCLEARFEVERNextDay", 
															"nodeId": 762
														}
													], 
													"nodeId": 757
												}
											], 
											"nodeId": 752
										}, 
										{
											"answer": "green or yellow", 
											"question": "Do you have a fever?", 
											"responses": [
												{
													"answer": "No", 
													"actioncode": "Disposition_AllergiesGreenNOFEVERHomeCare", 
													"nodeId": 769
												}, 
												{
													"answer": "Yes", 
													"question": "Have you had a fever more than 3 days?", 
													"responses": [
														{
															"answer": "No", 
															"actioncode": "Disposition_AllergiesGreenFEVERHomeCare", 
															"nodeId": 774
														}, 
														{
															"answer": "Yes", 
															"actioncode": "Disposition_AllergiesGreenFEVERNextDay", 
															"nodeId": 777
														}
													], 
													"nodeId": 772
												}
											], 
											"nodeId": 767
										}
									], 
									"nodeId": 750
								}, 
								{
									"answer": "Yes", 
									"actionCode": "Disposition_Allergies_Meds_NextDay", 
									"nodeId": 783
								}
							], 
							"nodeId": 748
						}, 
						{
							"answer": "Yes", 
							"actionCode": "Disposition_AllergiesHomeCare", 
							"nodeId": 787
						}
					], 
					"nodeId": 746
				}, 
				{
					"answer": "New in the last week or so but not seasonal", 
					"question": "What color is your nasal discharge (snot)?", 
					"responses": [
						{
							"answer": "Clear", 
							"question": "Do you have a fever?", 
							"responses": [
								{
									"answer": "No", 
									"actioncode": "Disposition_AllergiesNEWClearNOFEVERHomeCare", 
									"nodeId": 795
								}, 
								{
									"answer": "Yes", 
									"question": "Have you had a fever more than 3 days?", 
									"responses": [
										{
											"answer": "No", 
											"actioncode": "Disposition_AllergiesNEWCLEARFEVERHomeCare", 
											"nodeId": 800
										}, 
										{
											"answer": "Yes", 
											"actioncode": "Disposition_AllergiesNEWCLEARFEVERNextDay", 
											"nodeId": 803
										}
									], 
									"nodeId": 798
								}
							], 
							"nodeId": 793
						}, 
						{
							"answer": "green or yellow", 
							"question": "Do you have a fever?", 
							"responses": [
								{
									"answer": "No", 
									"actioncode": "Disposition_AllergiesNEWGreenNOFEVERHomeCare", 
									"nodeId": 810
								}, 
								{
									"answer": "Yes", 
									"question": "Have you had a fever more than 3 days?", 
									"responses": [
										{
											"answer": "No", 
											"actioncode": "Disposition_AllergiesNEWGreenFEVERHomeCare", 
											"nodeId": 815
										}, 
										{
											"answer": "Yes", 
											"actioncode": "Disposition_AllergiesNEWGreenFEVERNextDay", 
											"nodeId": 818
										}
									], 
									"nodeId": 813
								}
							], 
							"nodeId": 808
						}
					], 
					"nodeId": 791
				}
			], 
			"nodeId": 729
		}, 
		{
			"answer": "No", 
			"actionCode": "Disposition_NotRightExam", 
			"nodeId": 825
		}
	], 
	"nodeId": 727
}