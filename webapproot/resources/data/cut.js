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
							"actionCode": "DispositionCutUrgentCare"
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
											"actionCode": "DispositionCutUrgentCare"
										}, 
										{
											"answer": "No ", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare"
										}
									]
								}, 
								{
									"answer": "No ", 
									"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
									"responses": [
										{
											"answer": "Yes", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare"
										}, 
										{
											"answer": "No ", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare"
										}
									]
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
													"actionCode": "DispositionCutUrgentCare"
												}, 
												{
													"answer": "No ", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare"
												}
											]
										}, 
										{
											"answer": "No ", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare"
												}, 
												{
													"answer": "No ", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare"
												}
											]
										}
									]
								}, 
								{
									"answer": "Multiple Locations", 
									"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
									"responses": [
										{
											"answer": "Yes", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare"
										}, 
										{
											"answer": "No ", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare"
										}
									]
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
															"actionCode": "DispositionCutUrgentCare"
														}, 
														{
															"answer": "No ", 
															"responses": null, 
															"actionCode": "DispositionCutUrgentCare"
														}
													]
												}, 
												{
													"answer": "No ", 
													"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
													"responses": [
														{
															"answer": "Yes", 
															"responses": null, 
															"actionCode": "DispositionCutUrgentCare"
														}, 
														{
															"answer": "No ", 
															"responses": null, 
															"actionCode": "DispositionCutUrgentCare"
														}
													]
												}
											]
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
															"actionCode": "DispositionCutUrgentCare"
														}, 
														{
															"answer": "No ", 
															"responses": null, 
															"actionCode": "DispositionCutUrgentCare"
														}
													]
												}, 
												{
													"answer": "No ", 
													"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
													"responses": [
														{
															"answer": "Yes", 
															"responses": null, 
															"actionCode": "DispositionCutUrgentCare"
														}, 
														{
															"answer": "No ", 
															"responses": null, 
															"actionCode": "DispositionCutUrgentCare"
														}
													]
												}
											]
										}
									], 
									"actionCode": "DispositionCutHomeCare"
								}
							]
						}, 
						{
							"answer": "Yes", 
							"responses": null, 
							"actionCode": "DispositionCutBiteNoSuturesUrgentCare"
						}
					]
				}, 
				{
					"answer": "Yes", 
					"responses": null, 
					"actionCode": "DispositionCutBiteNoSutureUrgentCare"
				}
			]
		}, 
		{
			"answer": "Over 24 hours ago", 
			"question": "Is this related to a human or animal bite?", 
			"responses": [
				{
					"answer": "Yes", 
					"responses": null, 
					"actionCode": "DispositionCutBiteNoSutureUrgentCare"
				}, 
				{
					"answer": "No", 
					"responses": null, 
					"actionCode": "DispositionCutHomeCare"
				}
			]
		}, 
		{
			"answer": "About 13 to 24 hours ago", 
			"question": "Where on the body is the cut?", 
			"responses": [
				{
					"answer": "Head or Face ", 
					"responses": null, 
					"actionCode": "DispositionCutUrgentCare"
				}, 
				{
					"answer": "Arm", 
					"responses": null, 
					"actionCode": "DispositionCutUrgentCare"
				}, 
				{
					"answer": "Leg", 
					"responses": null, 
					"actionCode": "DispositionCutUrgentCare"
				}, 
				{
					"answer": "Hand", 
					"responses": null, 
					"actionCode": "DispositionCutHomeCare"
				}, 
				{
					"answer": "Foot", 
					"responses": null, 
					"actionCode": "DispositionCutHomeCare"
				}
			]
		}, 
		{
			"answer": "About 3 to 12 hours ago", 
			"question": "Is this related to a human or animal bite?", 
			"responses": [
				{
					"answer": "Yes", 
					"responses": null, 
					"actionCode": "DispositionCutBiteNoSutureUrgentCare"
				}, 
				{
					"answer": "No", 
					"question": "Where on the body is the cut?", 
					"responses": [
						{
							"answer": "Head or Face ", 
							"responses": null, 
							"actionCode": "DispositionCutUrgentCare"
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
											"actionCode": "DispositionCutUrgentCare"
										}, 
										{
											"answer": "No ", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare"
										}
									]
								}, 
								{
									"answer": "No ", 
									"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
									"responses": [
										{
											"answer": "Yes", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare"
										}, 
										{
											"answer": "No ", 
											"responses": null, 
											"actionCode": "DispositionCutUrgentCare"
										}
									]
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
													"actionCode": "DispositionCutUrgentCare"
												}, 
												{
													"answer": "No ", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare"
												}
											]
										}, 
										{
											"answer": "No ", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare"
												}, 
												{
													"answer": "No ", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare"
												}
											]
										}, 
										{
											"answer": "Multiple Locations", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare"
												}, 
												{
													"answer": "No ", 
													"responses": null, 
													"actionCode": "DispositionCutUrgentCare"
												}
											]
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
																	"actionCode": "DispositionCutUrgentCare"
																}, 
																{
																	"answer": "No ", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare"
																}
															]
														}, 
														{
															"answer": "No ", 
															"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
															"responses": [
																{
																	"answer": "Yes", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare"
																}, 
																{
																	"answer": "No ", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare"
																}
															]
														}
													]
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
																	"actionCode": "DispositionCutUrgentCare"
																}, 
																{
																	"answer": "No ", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare"
																}
															]
														}, 
														{
															"answer": "No ", 
															"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
															"responses": [
																{
																	"answer": "Yes", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare"
																}, 
																{
																	"answer": "No ", 
																	"responses": null, 
																	"actionCode": "DispositionCutUrgentCare"
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
}