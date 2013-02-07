{
    "question": "Have you had any recent injury or surgery on your eye?", 
	"responses": [
		{
			"answer": "No", 
			"question": "Do you have eye pain?", 
			"responses": [
				{
					"answer": "No pain at all", 
					"question": "How is your vision?", 
					"responses": [
						{
							"answer": "Normal", 
							"question": "Where is the redness?", 
							"responses": [
								{
									"answer": "diffuse or covers most of the white part of the eye", 
									"question": "Is there any discharge from your eye?", 
									"responses": [
										{
											"answer": "None", 
											"question": "Do your eyelids look abnormal (bumps, pimples, etc)", 
											"responses": [
												{
													"answer": "Yes", 
													"actioncode": "Disposition_RedEye_EyelidHomeCare", 
													"nodeId": 838
												}, 
												{
													"answer": "No", 
													"question": "Do you feel like something is in your eye (dust, dirt, eyelash, etc)?", 
													"responses": [
														{
															"answer": "No", 
															"actioncode": "Disposition_RedEyeHomeCare", 
															"nodeId": 843
														}, 
														{
															"answer": "Yes", 
															"actioncode": "Disposition_RedEye_FBUrgentCare", 
															"nodeId": 846
														}
													], 
													"nodeId": 841
												}
											], 
											"nodeId": 836
										}, 
										{
											"answer": "clear or increased tearing", 
											"question": "Do your eyelids look abnormal (bumps, pimples, etc)", 
											"responses": [
												{
													"answer": "Yes", 
													"actioncode": "Disposition_RedEye_EyelidHomeCare", 
													"nodeId": 853
												}, 
												{
													"answer": "No", 
													"question": "Do you feel like something is in your eye (dust, dirt, eyelash, etc)?", 
													"responses": [
														{
															"answer": "No", 
															"actioncode": "Disposition_RedEyeHomeCare", 
															"nodeId": 858
														}, 
														{
															"answer": "Yes", 
															"actioncode": "Disposition_RedEye_FBUrgentCare", 
															"nodeId": 861
														}
													], 
													"nodeId": 856
												}
											], 
											"nodeId": 851
										}, 
										{
											"answer": "yellow or green", 
											"actioncode": "Disposition_RedEyeDCNextDay", 
											"nodeId": 866
										}
									], 
									"nodeId": 834
								}, 
								{
									"answer": "localized or in just one area of the eye", 
									"question": "Is there any discharge from your eye?", 
									"responses": [
										{
											"answer": "None", 
											"question": "Do you feel like something is in your eye (dust, dirt, eyelash, etc)?", 
											"responses": [
												{
													"answer": "No", 
													"actioncode": "Disposition_RedEyeHomeCare", 
													"nodeId": 874
												}, 
												{
													"answer": "Yes", 
													"actioncode": "Disposition_RedEye_FBUrgentCare", 
													"nodeId": 877
												}
											], 
											"nodeId": 872
										}, 
										{
											"answer": "clear or increased tearing", 
											"question": "Do you feel like something is in your eye (dust, dirt, eyelash, etc)?", 
											"responses": [
												{
													"answer": "No", 
													"actioncode": "Disposition_RedEyeHomeCare", 
													"nodeId": 883
												}, 
												{
													"answer": "Yes", 
													"actioncode": "Disposition_RedEye_FBUrgentCare", 
													"nodeId": 886
												}
											], 
											"nodeId": 881
										}, 
										{
											"answer": "yellow or green", 
											"actioncode": "Disposition_RedEyeNextDay", 
											"nodeId": 890
										}
									], 
									"nodeId": 870
								}
							], 
							"nodeId": 832
						}, 
						{
							"answer": "blurry, decreased or much worse than normal", 
							"actioncode": "Disposition_RedEye_PainlessVisionloss_UrgentCare", 
							"nodeId": 895
						}
					], 
					"nodeId": 830
				}, 
				{
					"answer": "irritation or itching", 
					"question": "How is your vision?", 
					"responses": [
						{
							"answer": "Normal or slightly blurred", 
							"question": "Where is the redness?", 
							"responses": [
								{
									"answer": "diffuse or covers most of the white part of the eye", 
									"question": "Is there any discharge from your eye?", 
									"responses": [
										{
											"answer": "None", 
											"question": "Do you feel like something is in your eye (dust, dirt, eyelash, etc)?", 
											"responses": [
												{
													"answer": "No", 
													"actioncode": "Disposition_RedEyeIrritItchNODCHomeCare", 
													"nodeId": 907
												}, 
												{
													"answer": "Yes", 
													"actioncode": "Disposition_RedEye_FBUrgentCare", 
													"nodeId": 910
												}
											], 
											"nodeId": 905
										}, 
										{
											"answer": "clear or increased tearing", 
											"question": "Do you feel like something is in your eye (dust, dirt, eyelash, etc)?", 
											"responses": [
												{
													"answer": "No", 
													"actioncode": "Disposition_RedEyeClearDCHomeCare", 
													"nodeId": 916
												}, 
												{
													"answer": "Yes", 
													"actioncode": "Disposition_RedEye_FBUrgentCare", 
													"nodeId": 919
												}
											], 
											"nodeId": 914
										}, 
										{
											"answer": "yellow or green", 
											"actioncode": "Disposition_RedEyeGreenDCNextDay", 
											"nodeId": 923
										}
									], 
									"nodeId": 903
								}, 
								{
									"answer": "localized or in just one area of the eye", 
									"question": "Is there any discharge from your eye?", 
									"responses": [
										{
											"answer": "None", 
											"question": "Do you feel like something is in your eye (dust, dirt, eyelash, etc)?", 
											"responses": [
												{
													"answer": "No", 
													"actioncode": "Disposition_RedEyeIrritItchLocalRedNODCHomeCare", 
													"nodeId": 931
												}, 
												{
													"answer": "Yes", 
													"actioncode": "Disposition_RedEye_FBUrgentCare", 
													"nodeId": 934
												}
											], 
											"nodeId": 929
										}, 
										{
											"answer": "clear or increased tearing", 
											"question": "Do you feel like something is in your eye (dust, dirt, eyelash, etc)?", 
											"responses": [
												{
													"answer": "No", 
													"actioncode": "Disposition_RedEyeIrritItchLocalRedClearDCHomeCare", 
													"nodeId": 940
												}, 
												{
													"answer": "Yes", 
													"actioncode": "Disposition_RedEye_FBUrgentCare", 
													"nodeId": 943
												}
											], 
											"nodeId": 938
										}, 
										{
											"answer": "yellow or green", 
											"actioncode": "Disposition_RedEyeGreenDCNextDay", 
											"nodeId": 947
										}
									], 
									"nodeId": 927
								}
							], 
							"nodeId": 901
						}, 
						{
							"answer": "decreased or much worse than normal", 
							"actioncode": "Disposition_RedEye_Visionloss_UrgentCare", 
							"nodeId": 952
						}
					], 
					"nodeId": 899
				}, 
				{
					"answer": "deep or severe pain", 
					"question": "How is your vision?", 
					"responses": [
						{
							"answer": "Normal", 
							"actioncode": "Disposition_RedEye_PainNoVisionloss_UrgentCare", 
							"nodeId": 958
						}, 
						{
							"answer": "blurry, decreased or much worse than normal", 
							"actioncode": "Disposition_RedEye_PainVisionloss_UrgentCare", 
							"nodeId": 961
						}
					], 
					"nodeId": 956
				}
			], 
			"nodeId": 828
		}, 
		{
			"answer": "Yes", 
			"actionCode": "Disposition_RedEye_SurgInjUrgentCare", 
			"nodeId": 966
		}
	], 
	"nodeId": 826
}