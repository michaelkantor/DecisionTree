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
							"actionCode": "Disposition_CutFaceUrgentCare", 
							"nodeId": 351
						}, 
						{
							"answer": "Arm or Leg", 
							"question": "Is there any numbness beyond the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"actioncode": "Disposition_CutExtNumbUrgentCare ", 
									"nodeId": 356
								}, 
								{
									"answer": "No ", 
									"question": "Does the part where the cut is work as before? ", 
									"responses": [
										{
											"answer": "Yes", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"actionCode": "Disposition_CutFBUrgentCare", 
													"nodeId": 363
												}, 
												{
													"answer": "No ", 
													"actionCode": "Disposition_CutExtUrgentCare", 
													"nodeId": 366
												}
											], 
											"nodeId": 361
										}, 
										{
											"answer": "No ", 
											"actionCode": "Disposition_CutExtremityNotWorkingUrgentCare", 
											"nodeId": 370
										}
									], 
									"nodeId": 359
								}
							], 
							"nodeId": 354
						}, 
						{
							"answer": "Hand or Foot", 
							"question": "Is there any numbness beyond the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"actioncode": "Disposition_CutHandFootNumbUrgentCare ", 
									"nodeId": 377
								}, 
								{
									"answer": "No ", 
									"question": "Does the part where the cut is work as before? ", 
									"responses": [
										{
											"answer": "Yes", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"actionCode": "Disposition_CutFBUrgentCare", 
													"nodeId": 384
												}, 
												{
													"answer": "No ", 
													"actionCode": "Disposition_CutHandFootUrgentCare", 
													"nodeId": 387
												}
											], 
											"nodeId": 382
										}, 
										{
											"answer": "No ", 
											"actionCode": "Disposition_CutHandFootNotWorkingUrgentCare", 
											"nodeId": 391
										}
									], 
									"nodeId": 380
								}
							], 
							"nodeId": 375
						}, 
						{
							"answer": "Trunk or Back", 
							"actioncode": "Disposition_CutTrunkBackUrgentCare", 
							"nodeId": 396
						}, 
						{
							"answer": "Multiple Locations", 
							"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"actionCode": "Disposition_CutFBUrgentCare", 
									"nodeId": 401
								}, 
								{
									"answer": "No ", 
									"actionCode": "Disposition_CutUrgentCare", 
									"nodeId": 404
								}
							], 
							"nodeId": 399
						}
					], 
					"nodeId": 349
				}, 
				{
					"answer": "Yes", 
					"question": "Where on the body is the cut?", 
					"responses": [
						{
							"answer": "Head or Face ", 
							"actionCode": "Disposition_CutFaceBiteUrgentCare", 
							"nodeId": 411
						}, 
						{
							"answer": "Arm or Leg", 
							"actioncode": "Disposition_CutExtBiteUrgentCare ", 
							"nodeId": 414
						}, 
						{
							"answer": "Hand or Foot", 
							"actioncode": "Disposition_CutHandFootBiteUrgentCare ", 
							"nodeId": 417
						}, 
						{
							"answer": "Trunk or Back", 
							"actioncode": "Disposition_CutTrunkBackBiteUrgentCare", 
							"nodeId": 420
						}, 
						{
							"answer": "Multiple Locations", 
							"actioncode": "Disposition_CutMultipleBiteUrgentCare", 
							"nodeId": 423
						}
					], 
					"nodeId": 409
				}
			], 
			"nodeId": 347
		}, 
		{
			"answer": "Over 24 hours ago", 
			"question": "Is this related to a human or animal bite?", 
			"responses": [
				{
					"answer": "No", 
					"question": "Where on the body is the cut?", 
					"responses": [
						{
							"answer": "Head or Face ", 
							"actionCode": "Disposition_CutFace24hrUrgentCare", 
							"nodeId": 432
						}, 
						{
							"answer": "Arm or Leg", 
							"question": "Is there any numbness beyond the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"actioncode": "Disposition_CutExtNumbUrgentCare ", 
									"nodeId": 437
								}, 
								{
									"answer": "No ", 
									"question": "Does the part where the cut is work as before? ", 
									"responses": [
										{
											"answer": "Yes", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"actionCode": "Disposition_CutFBUrgentCare", 
													"nodeId": 444
												}, 
												{
													"answer": "No ", 
													"actionCode": "Disposition_CutExt24hrHomeCare", 
													"nodeId": 447
												}
											], 
											"nodeId": 442
										}, 
										{
											"answer": "No ", 
											"actionCode": "Disposition_CutExtremityNotWorkingUrgentCare", 
											"nodeId": 451
										}
									], 
									"nodeId": 440
								}
							], 
							"nodeId": 435
						}, 
						{
							"answer": "Hand or Foot", 
							"question": "Is there any numbness beyond the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"actioncode": "Disposition_CutHandFootNumbUrgentCare ", 
									"nodeId": 458
								}, 
								{
									"answer": "No ", 
									"question": "Does the part where the cut is work as before? ", 
									"responses": [
										{
											"answer": "Yes", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"actionCode": "Disposition_CutFBUrgentCare", 
													"nodeId": 465
												}, 
												{
													"answer": "No ", 
													"actionCode": "Disposition_CutHandFoot24hrHomeCare", 
													"nodeId": 468
												}
											], 
											"nodeId": 463
										}, 
										{
											"answer": "No ", 
											"actionCode": "Disposition_CutHandFootNotWorkingUrgentCare", 
											"nodeId": 472
										}
									], 
									"nodeId": 461
								}
							], 
							"nodeId": 456
						}, 
						{
							"answer": "Trunk or Back", 
							"actioncode": "Disposition_CutTrunkBack24hrHomeCare", 
							"nodeId": 477
						}, 
						{
							"answer": "Multiple Locations", 
							"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"actionCode": "Disposition_CutFBUrgentCare", 
									"nodeId": 482
								}, 
								{
									"answer": "No ", 
									"actionCode": "Disposition_Cut24hrHomeCare", 
									"nodeId": 485
								}
							], 
							"nodeId": 480
						}
					], 
					"nodeId": 430
				}, 
				{
					"answer": "Yes", 
					"question": "Where on the body is the cut?", 
					"responses": [
						{
							"answer": "Head or Face ", 
							"actionCode": "Disposition_CutFaceBiteUrgentCare", 
							"nodeId": 492
						}, 
						{
							"answer": "Arm or Leg", 
							"actioncode": "Disposition_CutExtBiteUrgentCare ", 
							"nodeId": 495
						}, 
						{
							"answer": "Hand or Foot", 
							"actioncode": "Disposition_CutHandFootBiteUrgentCare ", 
							"nodeId": 498
						}, 
						{
							"answer": "Trunk or Back", 
							"actioncode": "Disposition_CutTrunkBackBiteUrgentCare", 
							"nodeId": 501
						}, 
						{
							"answer": "Multiple Locations", 
							"actioncode": "Disposition_CutMultipleBiteUrgentCare", 
							"nodeId": 504
						}
					], 
					"nodeId": 490
				}
			], 
			"nodeId": 428
		}, 
		{
			"answer": "About 13 to 24 hours ago", 
			"question": "Is this related to a human or animal bite?", 
			"responses": [
				{
					"answer": "No", 
					"question": "Where on the body is the cut?", 
					"responses": [
						{
							"answer": "Head or Face ", 
							"actionCode": "Disposition_CutFaceUrgentCare", 
							"nodeId": 513
						}, 
						{
							"answer": "Arm or Leg", 
							"question": "Is there any numbness beyond the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"actioncode": "Disposition_CutExtNumbUrgentCare ", 
									"nodeId": 518
								}, 
								{
									"answer": "No ", 
									"question": "Does the part where the cut is work as before? ", 
									"responses": [
										{
											"answer": "Yes", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"actionCode": "Disposition_CutFBUrgentCare", 
													"nodeId": 525
												}, 
												{
													"answer": "No ", 
													"actionCode": "Disposition_CutExt1324hrUrgentCare", 
													"nodeId": 528
												}
											], 
											"nodeId": 523
										}, 
										{
											"answer": "No ", 
											"actionCode": "Disposition_CutExtremityNotWorkingUrgentCare", 
											"nodeId": 532
										}
									], 
									"nodeId": 521
								}
							], 
							"nodeId": 516
						}, 
						{
							"answer": "Hand or Foot", 
							"question": "Is there any numbness beyond the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"actioncode": "Disposition_CutHandFootNumbUrgentCare ", 
									"nodeId": 539
								}, 
								{
									"answer": "No ", 
									"question": "Does the part where the cut is work as before? ", 
									"responses": [
										{
											"answer": "Yes", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"actionCode": "Disposition_CutFBUrgentCare", 
													"nodeId": 546
												}, 
												{
													"answer": "No ", 
													"actionCode": "Disposition_CutHandFoot1324hrUrgentCare", 
													"nodeId": 549
												}
											], 
											"nodeId": 544
										}, 
										{
											"answer": "No ", 
											"actionCode": "Disposition_CutHandFootNotWorkingUrgentCare", 
											"nodeId": 553
										}
									], 
									"nodeId": 542
								}
							], 
							"nodeId": 537
						}, 
						{
							"answer": "Trunk or Back", 
							"actioncode": "Disposition_CutTrunkBack1324hrUrgentCare", 
							"nodeId": 558
						}, 
						{
							"answer": "Multiple Locations", 
							"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"actionCode": "Disposition_CutUrgentCare", 
									"nodeId": 563
								}, 
								{
									"answer": "No ", 
									"actionCode": "Disposition_CutMultiple1324hrUrgentCare", 
									"nodeId": 566
								}
							], 
							"nodeId": 561
						}
					], 
					"nodeId": 511
				}, 
				{
					"answer": "Yes", 
					"question": "Where on the body is the cut?", 
					"responses": [
						{
							"answer": "Head or Face ", 
							"actionCode": "Disposition_CutFaceBiteUrgentCare", 
							"nodeId": 573
						}, 
						{
							"answer": "Arm or Leg", 
							"actioncode": "Disposition_CutExtBiteUrgentCare ", 
							"nodeId": 576
						}, 
						{
							"answer": "Hand or Foot", 
							"actioncode": "Disposition_CutHandFootBiteUrgentCare ", 
							"nodeId": 579
						}, 
						{
							"answer": "Trunk or Back", 
							"actioncode": "Disposition_CutTrunkBackBiteUrgentCare", 
							"nodeId": 582
						}, 
						{
							"answer": "Multiple Locations", 
							"actioncode": "Disposition_CutMultipleBiteUrgentCare", 
							"nodeId": 585
						}
					], 
					"nodeId": 571
				}
			], 
			"nodeId": 509
		}, 
		{
			"answer": "About 3 to 12 hours ago", 
			"question": "Is this related to a human or animal bite?", 
			"responses": [
				{
					"answer": "No", 
					"question": "Where on the body is the cut?", 
					"responses": [
						{
							"answer": "Head or Face ", 
							"actionCode": "Disposition_CutFaceUrgentCare", 
							"nodeId": 594
						}, 
						{
							"answer": "Arm or Leg", 
							"question": "Is there any numbness beyond the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"actioncode": "Disposition_CutExtNumbUrgentCare ", 
									"nodeId": 599
								}, 
								{
									"answer": "No ", 
									"question": "Does the part where the cut is work as before? ", 
									"responses": [
										{
											"answer": "Yes", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"actionCode": "Disposition_CutFBUrgentCare", 
													"nodeId": 606
												}, 
												{
													"answer": "No ", 
													"actionCode": "Disposition_CutExtUrgentCare", 
													"nodeId": 609
												}
											], 
											"nodeId": 604
										}, 
										{
											"answer": "No ", 
											"actionCode": "Disposition_CutExtremityNotWorkingUrgentCare", 
											"nodeId": 613
										}
									], 
									"nodeId": 602
								}
							], 
							"nodeId": 597
						}, 
						{
							"answer": "Hand or Foot", 
							"question": "Is there any numbness beyond the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"actioncode": "Disposition_CutHandFootNumbUrgentCare ", 
									"nodeId": 620
								}, 
								{
									"answer": "No ", 
									"question": "Does the part where the cut is work as before? ", 
									"responses": [
										{
											"answer": "Yes", 
											"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
											"responses": [
												{
													"answer": "Yes", 
													"actionCode": "Disposition_CutFBUrgentCare", 
													"nodeId": 627
												}, 
												{
													"answer": "No ", 
													"actionCode": "Disposition_CutHandFootUrgentCare", 
													"nodeId": 630
												}
											], 
											"nodeId": 625
										}, 
										{
											"answer": "No ", 
											"actionCode": "Disposition_CutHandFootNotWorkingUrgentCare", 
											"nodeId": 634
										}
									], 
									"nodeId": 623
								}
							], 
							"nodeId": 618
						}, 
						{
							"answer": "Trunk or Back", 
							"actioncode": "Disposition_CutTrunkBackUrgentCare", 
							"nodeId": 639
						}, 
						{
							"answer": "Multiple Locations", 
							"question": "Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? ", 
							"responses": [
								{
									"answer": "Yes", 
									"actionCode": "Disposition_CutFBUrgentCare", 
									"nodeId": 644
								}, 
								{
									"answer": "No ", 
									"actionCode": "Disposition_CutUrgentCare", 
									"nodeId": 647
								}
							], 
							"nodeId": 642
						}
					], 
					"nodeId": 592
				}, 
				{
					"answer": "Yes", 
					"question": "Where on the body is the cut?", 
					"responses": [
						{
							"answer": "Head or Face ", 
							"actionCode": "Disposition_CutFaceBiteUrgentCare", 
							"nodeId": 654
						}, 
						{
							"answer": "Arm or Leg", 
							"actioncode": "Disposition_CutExtBiteUrgentCare ", 
							"nodeId": 657
						}, 
						{
							"answer": "Hand or Foot", 
							"actioncode": "Disposition_CutHandFootBiteUrgentCare ", 
							"nodeId": 660
						}, 
						{
							"answer": "Trunk or Back", 
							"actioncode": "Disposition_CutTrunkBackBiteUrgentCare", 
							"nodeId": 663
						}, 
						{
							"answer": "Multiple Locations", 
							"actioncode": "Disposition_CutMultipleBiteUrgentCare", 
							"nodeId": 666
						}
					], 
					"nodeId": 652
				}
			], 
			"nodeId": 590
		}
	], 
	"nodeId": 345
}