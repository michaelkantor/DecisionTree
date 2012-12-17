{
    "question": "When did you get cut?", 
	"responses": [
		{
			"answer": "Less than 3 hours ago", 
			"question": "Is this related to a human or animal bite?", 
			"responses": [
				{
					"answer": "No", 
					"question": "Where on the body is the cut?", 
					"responses": [
						{
							"answer": "Head or Face ", 
							"responses": null, 
							"actionCode": "DispositionCutUrgentCare", 
							"nodeId": 43
						}, 
						{
							"answer": "Arm ", 
							"question": "Is there any numbness beyond the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
									"responses": [
										{
											"answer": "Yes", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare", 
											"nodeId": 50
										}, 
										{
											"answer": "No ", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare", 
											"nodeId": 53
										}
									], 
									"nodeId": 48
								}, 
								{
									"answer": "No ", 
									"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
									"responses": [
										{
											"answer": "Yes", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare", 
											"nodeId": 59
										}, 
										{
											"answer": "No ", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare", 
											"nodeId": 62
										}
									], 
									"nodeId": 57
								}
							], 
							"nodeId": 46
						}, 
						{
							"answer": "Hand", 
							"question": "Does the part where the cut is work as before? ", 
							"responses": [
								{
									"answer": "Yes", 
									"question": "Is there any numbness beyond the cut? ", 
									"responses": [
										{
											"answer": "Yes", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 73
												}, 
												{
													"answer": "No ", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 76
												}
											], 
											"nodeId": 71
										}, 
										{
											"answer": "No ", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 82
												}, 
												{
													"answer": "No ", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 85
												}
											], 
											"nodeId": 80
										}
									], 
									"nodeId": 69
								}, 
								{
									"answer": "No ", 
									"question": "Is there any numbness beyond the cut? ", 
									"responses": [
										{
											"answer": "Yes", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 94
												}, 
												{
													"answer": "No ", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 97
												}
											], 
											"nodeId": 92
										}, 
										{
											"answer": "No ", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 103
												}, 
												{
													"answer": "No ", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 106
												}
											], 
											"nodeId": 101
										}
									], 
									"nodeId": 90
								}
							], 
							"actionCode": "DispositionCutHomeCare", 
							"nodeId": 67
						}, 
						{
							"answer": "Multiple Locations", 
							"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"responses": null, 
									"actionCode": "DispositionCutUrgentCare", 
									"nodeId": 114
								}, 
								{
									"answer": "No ", 
									"responses": null, 
									"actionCode": "DispositionCutUrgentCare", 
									"nodeId": 117
								}
							], 
							"nodeId": 112
						}, 
						{
							"answer": "Leg ", 
							"question": "Is there any numbness beyond the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
									"responses": [
										{
											"answer": "Yes", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare", 
											"nodeId": 125
										}, 
										{
											"answer": "No ", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare", 
											"nodeId": 128
										}
									], 
									"nodeId": 123
								}, 
								{
									"answer": "No ", 
									"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
									"responses": [
										{
											"answer": "Yes", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare", 
											"nodeId": 134
										}, 
										{
											"answer": "No ", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare", 
											"nodeId": 137
										}
									], 
									"nodeId": 132
								}
							], 
							"nodeId": 121
						}
					], 
					"nodeId": 41
				}, 
				{
					"answer": "Yes", 
					"responses": null, 
					"actionCode": "DispositionCutBiteNoSutureUrgentCare", 
					"nodeId": 143
				}
			], 
			"nodeId": 39
		}, 
		{
			"answer": "Over 24 hours ago", 
			"question": "Is this related to a human or animal bite?", 
			"responses": [
				{
					"answer": "Yes", 
					"responses": null, 
					"actionCode": "DispositionCutBiteNoSutureUrgentCare", 
					"nodeId": 149
				}, 
				{
					"answer": "No", 
					"responses": null, 
					"actionCode": "DispositionCutHomeCare", 
					"nodeId": 152
				}
			], 
			"nodeId": 147
		}, 
		{
			"answer": "About 13 to 24 hours ago", 
			"question": "Where on the body is the cut?", 
			"responses": [
				{
					"answer": "Head or Face ", 
					"responses": null, 
					"actionCode": "DispositionCutUrgentCare", 
					"nodeId": 158
				}, 
				{
					"answer": "Arm", 
					"responses": null, 
					"actionCode": "DispositionCutUrgentCare", 
					"nodeId": 161
				}, 
				{
					"answer": "Leg", 
					"responses": null, 
					"actionCode": "DispositionCutUrgentCare", 
					"nodeId": 164
				}, 
				{
					"answer": "Hand", 
					"responses": null, 
					"actionCode": "DispositionCutHomeCare", 
					"nodeId": 167
				}, 
				{
					"answer": "Foot", 
					"responses": null, 
					"actionCode": "DispositionCutHomeCare", 
					"nodeId": 170
				}
			], 
			"nodeId": 156
		}, 
		{
			"answer": "About 3 to 12 hours ago", 
			"question": "Is this related to a human or animal bite?", 
			"responses": [
				{
					"answer": "Yes", 
					"responses": null, 
					"actionCode": "DispositionCutBiteNoSutureUrgentCare", 
					"nodeId": 176
				}, 
				{
					"answer": "No", 
					"question": "Where on the body is the cut?", 
					"responses": [
						{
							"answer": "Head or Face ", 
							"responses": null, 
							"actionCode": "DispositionCutUrgentCare", 
							"nodeId": 181
						}, 
						{
							"answer": "Arm ", 
							"question": "Is there any numbness beyond the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
									"responses": [
										{
											"answer": "Yes", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare", 
											"nodeId": 188
										}, 
										{
											"answer": "No ", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare", 
											"nodeId": 191
										}
									], 
									"nodeId": 186
								}, 
								{
									"answer": "No ", 
									"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
									"responses": [
										{
											"answer": "Yes", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare", 
											"nodeId": 197
										}, 
										{
											"answer": "No ", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare", 
											"nodeId": 200
										}
									], 
									"nodeId": 195
								}, 
								{
									"answer": "Leg ", 
									"question": "Is there any numbness beyond the cut? ", 
									"responses": [
										{
											"answer": "Yes", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 208
												}, 
												{
													"answer": "No ", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 211
												}
											], 
											"nodeId": 206
										}, 
										{
											"answer": "No ", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 217
												}, 
												{
													"answer": "No ", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 220
												}
											], 
											"nodeId": 215
										}, 
										{
											"answer": "Multiple Locations", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 226
												}, 
												{
													"answer": "No ", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare", 
													"nodeId": 229
												}
											], 
											"nodeId": 224
										}, 
										{
											"answer": "Hand", 
											"question": "Does the part where the cut is work as before? ", 
											"responses": [
												{
													"answer": "Yes", 
													"question": "Is there any numbness beyond the cut? ", 
													"responses": [
														{
															"answer": "Yes", 
															"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
															"responses": [
																{
																	"answer": "Yes", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare", 
																	"nodeId": 239
																}, 
																{
																	"answer": "No ", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare", 
																	"nodeId": 242
																}
															], 
															"nodeId": 237
														}, 
														{
															"answer": "No ", 
															"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
															"responses": [
																{
																	"answer": "Yes", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare", 
																	"nodeId": 248
																}, 
																{
																	"answer": "No ", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare", 
																	"nodeId": 251
																}
															], 
															"nodeId": 246
														}
													], 
													"nodeId": 235
												}, 
												{
													"answer": "No ", 
													"question": "Is there any numbness beyond the cut? ", 
													"responses": [
														{
															"answer": "Yes", 
															"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
															"responses": [
																{
																	"answer": "Yes", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare", 
																	"nodeId": 260
																}, 
																{
																	"answer": "No ", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare", 
																	"nodeId": 263
																}
															], 
															"nodeId": 258
														}, 
														{
															"answer": "No ", 
															"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
															"responses": [
																{
																	"answer": "Yes", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare", 
																	"nodeId": 269
																}, 
																{
																	"answer": "No ", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare", 
																	"nodeId": 272
																}
															], 
															"nodeId": 267
														}
													], 
													"nodeId": 256
												}
											], 
											"nodeId": 233
										}
									], 
									"nodeId": 204
								}
							], 
							"nodeId": 184
						}
					], 
					"nodeId": 179
				}
			], 
			"nodeId": 174
		}
	], 
	"nodeId": 37
}