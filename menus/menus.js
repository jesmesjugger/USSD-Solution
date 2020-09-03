exports.getMenuContent = function () {
    return {
        "1": {
            "user_new": {
                "title": "Welcome to Old Mutual Nigeria. You are currently not registered on this platform. Please enter your BVN or National ID number. t's & c's apply",
                "next": {
                    "*\\w+": "welcome.national_id",
                }
            },
            "user_exists": {
                "title": "Welcome to Old Mutual Nigeria Abimbola Kareem, please enter your secret 4 digit PIN code.",
                "next": {
                    "*\\w+": "entry.pin",
                }
            }
        },
        "2": {
            "welcome": {
                "title": "Abimbola Kareem 5, Akinwale Street, Ikoyi, Lagos.\nPlease confirm that the KYC details above are yours.\n1. Yes\n2. No\n00 Back",
                "next": {
                    "1": "confirm_details_yes",
                    "2": "confirm_details_no",
                    "0": "back_to_main"
                }
            },
            "choose_service": {
                "title": "1. Insure with us\n2. Invest with us\n3. My Portfolio",
                "next": {
                    "1": "insure",
                    "2": "invest",
                    "3": "portfolio",
                    "0": "back_to_main"
                }
            },
            "update_kyc": {
                "title": "Dear Customer, Please update your KYC from your Telco provider.\nThank you!\n00 Back",
                "next": {
                    "1": "policy_status_options",
                    "2": "policy_status_options",
                    "3": "policy_status_options",
                    "4": "policy_status_options",
                    "0": "back_to_main"
                }
            }
        },
        "3": {
            "confirm_details_yes": {
                "title": "Now set your secret four digit PIN code",
                "next": {
                    "*\\w+": "enter_pin.code",
                }
            },
            "re_enter_pin": {
                "title": "Re-enter your secret four digit PIN code\n00 Back",
                "next": {
                    "*\\w+": "re_enter_pin.code",
                }
            },
            "confirm_details_no": {
                "title": "Dear Customer, Please update your KYC from your Telco provider.\nThank you!",
                "next": {
                    "1": "end",
                }
            },

            "insure": {
                "title": "1. Third Party Cover\n2. TravelSure\n\n00. Back\n0. Main Menu",
                "next": {
                    "1": "third_party_cover",
                    "2": "travel_sure",
                    "0": "back_to_main"
                }
            },
        },
        "4": {
            "registration_success": {
                "title": "Your registration has been successful. You will receive an SMS shortly with instructions on how to proceed.",
                "next": {
                    "*\\w+": "registration_success",
                    "0": "back_to_main"
                }
            }, "third_party_cover": {
                "title": "Enter Car Registration Number\n\n00. Back\n0. Main Menu",
                "next": {
                    "*\\w+": "entry.car_reg_no",
                    "0": "back_to_main"
                }
            }, "car_licence_no": {
                "title": "Enter License Number\n\n00. Back\n0. Main Menu",
                "next": {
                    "*\\w+": "entry.car_reg_no",
                    "0": "back_to_main"
                }
            },"vehicle_type": {
                "title": "Please select your vehicle type:\n1. Saloon/SUV -5,000\n2. Bus -7,500\n3. Mini-truck/Tippers -10,000\n4. Trucks -25,000\n\n00. Back\n0. Main Menu",
                "next": {
                    "1": "tp_cover",
                    "2": "travel_sure",
                    "0": "back_to_main"
                }
            },
        },
        "5": {
            "third_party_cover": {
                "title": "1. Third Party Cover\n2. TravelSure\n\n00. Back\n0. Main Menu",
                "next": {
                    "1": "tp_cover",
                    "2": "travel_sure",
                    "0": "back_to_main"
                }
            },
            "health_worker_national_id": {
                "title": "Kindly enter your National ID number\n\n0 Main menu",
                "next": {
                    "*\\w+": "health_worker.national_id",
                    "0": "back_to_main"
                }
            },
            "provide_details_health_worker_hosp_claim_id": {
                "title": "Kindly enter your National ID number? e.g. 1234567\n\n0 Main menu",
                "next": {
                    "*\\w+": "provide_details_health_worker_hosp.national_id",
                    "0": "back_to_main"
                }
            },
            "provide_details_health_worker_last_claim_id": {
                "title": "Kindly enter your National ID number? e.g. 1234567\n\n0 Main menu",
                "next": {
                    "*\\w+": "provide_details_health_worker_last.national_id",
                    "0": "back_to_main"
                }
            }
        },
        "6": {
            "health_worker_facility": {
                "title": "Kindly enter your primary health facility of operation?\n\n0 Main menu",
                "next": {
                    "*\\w+": "health_worker.facility",
                    "0": "back_to_main"
                }
            }
        },
        "7": {
            "health_worker_reg_no": {
                "title": "Kindly enter your professional registration / licence no.\n\n0 Main menu",
                "next": {
                    "*\\w+": "health_worker.reg_no",
                    "0": "back_to_main"
                }
            }
        },
        "8": {
            "health_worker_beneficiary_name": {
                "title": "Beneficiary information:\n\nKindly enter your beneficiary'\s name (first name & surname)\n\n0 Main menu",
                "next": {
                    "*[a-zA-Z]+": "health_worker.beneficiary_name",
                    "0": "back_to_main"
                }
            }
        },
        "9": {
            "health_worker_beneficiary_phone_no": {
                "title": "Kindly enter your beneficiary\'s phone number\n\n0 Main menu",
                "next": {
                    "*\\w+": "health_worker.beneficiary_phone_no",
                    "0": "back_to_main"
                }
            }
        },

        "generic": {
            "registration_success": {
                "title": "Your registration has been successful. You will receive an SMS shortly with instructions on how to proceed.",
                "next": {
                    "0": "back_to_main"
                }
            },
            "response_options": {
                "next": {
                    "1": "provide_details",
                    "2": "request_callback",
                    "0": "back_to_main"
                }
            },
            "provide_details": {
                "next": {
                    "1": "success_end_message",
                    "0": "back_to_main"
                }
            },
            "success_end_message": {
                "title": "Thank you for the details provided. One of our Call center representatives will call you within 24 hours.\n\n0 Main menu",
                "next": {
                    "0": "back_to_main"
                }
            },
            "success_end_message_hw_claim": {
                "title": "We have successfully received your claim notification.\n One of our call center representatives will contact you within 24 Hours.\n\n0. Main Menu",
                "next": {
                    "0": "back_to_main"
                }
            },
            "success_end_message_hw_registration": {
                "title": "Your registration has been completed successfully..\n\n0. Main Menu",
                "next": {
                    "0": "back_to_main"
                }
            },
            "exit": {
                "title": "Thank you for the details provided, one of our call center agents will call you within 24 hours."
            },
            "covid_end_message": {
                "title": "A link has sent to you via sms on"
            },
            "covid_update_message": {
                "title": "A link has been sent to you via sms on \n00 Back \n0 Main menu",
                "next": {
                    "0": "back_to_main",
                    "11": "exit"
                }
            },
            "covid_menu": {
                "title": "A link has sent to you via sms on",
                "1": "how to keep healthy\n00 Back\n0 Main menu",
                "2": "what to do if you feel unwell\n00 Back\n0 Main menu",
                "3": "how to work from home\n00 Back\n0 Main menu",
                "4": "how to study from home\n00 Back\n0 Main menu",
                "5": "how to unwind from home\n00 Back\n0 Main menu",
                "6": "ministry of health updates\n00 Back\n0 Main menu",
                "0": "back to menu"
            },
            "insurance_class": [
                "Health Insurance",
                "Car Insurance",
                "Life Insurance",
                "other insurance insurance"
            ]
        }
    }
}