let data= {
  "dialerInfo": {
    "recordSpec": "Epic",
    "recordImported": "Sept 26, 1:00 PM",
    "attempts": "First",
    "firstName": 'John',
    "lastName": "Jacobs",
    "record": "7299281",
    "phoneNumber": "12147015489",
    "reasonCode": "A984"
  },
  "Pharmacy": [
    {
      "rxNumber": "Rx 4672983",
      "physician": "Dr Richard Cox",
      "pharmacy": "Walgreens",
      "daySupply": "52",
      "numberOfRefills": "5",
      "refillsRemaining": "5",
      "drugClassification": "Opioid",
      "insuranceProvider": "Jack David"
    },
    {
      "rxNumber": "Rx 9834092",
      "physician": "Dr Chris Synder",
      "pharmacy": "St Lukes Hospital Pharmacy",
      "daySupply": "36",
      "numberOfRefills": "3",
      "refillsRemaining": "0",
      "drugClassification": "Steroid",
      "insuranceProvider": "Michale Wilson"
    }
  ],
  "currentShowPhoneBook": false,
  "callerInfo": {
    "callerName": "Johns Jacobs",
    "callerNo": "214-701-5489",
    "callerType": "Patient",
    "transferLocation": "NA",
    "hospital": "NA"
  },
  "referralAppointments" : [
    {
      "StartTime": "August 20, 2018",
      "EndTime": "September 5, 2018"
    },
    {
      "StartTime": "September 5, 2018",
      "EndTime": "September 6, 2018"
    }
  ],
  "callInfos": [
    {
      "tempDNIS": "97223456789",
      "Status": "unused",
      "destination": "",
      "patientPH": "",
      "patientMRN": "",
      "Notes": ""
    },
    {
      "tempDNIS": "9721112223",
      "Status": "unused",
      "destination": "",
      "patientPH": "",
      "patientMRN": "",
      "Notes": ""
    },
    {
      "tempDNIS": "9721112224",
      "Status": "unused",
      "destination": "",
      "patientPH": "",
      "patientMRN": "",
      "Notes": ""
    }
  ],
  "Referrals": [
    {
      "refID": "9145142519",
      "patientID": "331325525",
      "patientName": "Grace Paz",
      "referredBy": "Kevin Walker",
      "referredTo": "Chris Walker",
      "referralType": "Direct",
      "referredStatus": "Authorized",
      "businessSegment": "Business1",
      "serviceArea" : "Dallas",
      "startDate": "2018/03/02",
      "endDate": "2018/06/05",

      "refID_External": "222222222",
      "patientAddress": "3453 T Ave Fort Worth, TX 76179, USA",
      "diagnoses": "Fever, Pain",
      "procedures": "",
      "referredToAddress": "163 Main Street, Dallas, TX",
      "referredToFacility": "173 Main Street, Dallas, TX",

      "reason": "",
      "scheduleDate": "",
      "scheduleStatus": "Pending",
      "deptID": "",
      "deptType": "",
      "locationID": "",
      "locationType": "",
      "assignAppointment": false,
      "appointment": "",
      "notes": "",
      "comments": ""
    },
    {
      "refID": "29145142519",
      "patientID": "2221325525",
      "patientName": "Johns Jacobs",
      "referredBy": "Joseph Synder",
      "referredTo": "Rajiv Sharma",
      "referralType": "Direct",
      "referredStatus": "Pending",
      "businessSegment": "Business1",
      "serviceArea" : "Dallas",
      "startDate": "2018/03/02",
      "endDate": "2018/06/05",

      "refID_External": "51523525325",
      "patientAddress": "3453 T Ave Fort Worth, TX 76179, USA",
      "diagnoses": "Cold, Pain",
      "procedures": "",
      "referredToAddress": "163 Main Street, Dallas, TX",
      "referredToFacility": "173 Main Street, Dallas, TX",

      "reason": "",
      "scheduleDate": "",
      "scheduleStatus": "Pending",
      "deptID": "",
      "deptType": "",
      "locationID": "",
      "locationType": "",
      "assignAppointment": true,
      "appointment": "",
      "notes": "",
      "comments": ""
    }
  ],
  "Patients": [{
    "screenPopLinkInfo": "http://10.3.74.119/openemr/interface/patient_file/summary/demographics.php?set_pid=1",
    "Category": "EPIC",
    "Name": "Johns Jacobs",
    "DateOfBirth": "1981-07-01 00:00:00",
    "MRN": 7499281,
    "SSN": "***-**-6789",
    "PhoneNumber": "+1 214 701 5489",
    "PhotoUrl": "img/user.png",
    "PrimaryCareProvider": {
      "Name": "Mark Williams, MD",
      "Phone": "+1 208 975 3874"
    },
    "medicalHistory": [
      "> Cardiac left ventricular ejection fraction 21-40 percent",
      "> Sleeeptalking"
    ],
    "activeProblems": [
      "> Protein-calorie malnutrition, severe",
      "> Moderate asthma without complication"
    ],
    "allergies": [
      {
        "name": "IODINE",
        "description": "IODINE",
        "dateEntered": "Aug 08, 2018",
        "dateNoted": "Aug 08, 2018",
        "reactions": "itchy rash taht comes on slowly",
        "reactionComments": "Direct contact with skin results in small bumps",
        "severity": "Moderate",
        "type": "Intolerance"
      },
      {
        "name": "PENICILLINS",
        "description": "PENICILLINS",
        "dateEntered": "Jul 13, 2018",
        "dateNoted": "Jul 13, 2018",
        "reactions": "Hives nad itchy eyes",
        "reactionComments": "Overdose",
        "severity": "Low",
        "type": "Tolerant"
      }
    ],
    "encounters": [
      {
        "type": "Evaluation",
        "date": "Mar 05, 2017",
        "eventType": "Admission",
        "patientClass": "In Patient",
        "admissionType": "Elective",
        "dischargeDisposition": "30 - Still Patient"
      },
      {
        "type": "Evaluation",
        "date": "Mar 15, 2018",
        "eventType": "Transfer In",
        "patientClass": "In Patient",
        "admissionType": "Elective",
        "dischargeDisposition": "02 - Transferred"
      }
    ],
    "Address": {
      "Line1": "3453 T Ave, Fort Worth",
      "Line2": "TX 76179, USA"
    },
    "TreatmentTeam": [
    ],
    "Provider": [
      {
        "Name": "United Healthcare (UHC Parkway, GA,66552)",
        "PhoneNumber": "+1 216 411 8765"
      }
    ],
    "InsuranceVerification": {
      "InsuranceName": "Johns Jacobs",
      "GroupNum": "#45ABC",
      "NetworkNum": "#45ABC",
      "PolicyNum": "#022141242",
      "IssueDate": "20-Aug-2016 00:00:00"
    },
    "Vitals": {
      "Height": 168,
      "Weight": 78,
      "RespirationRate": 58,
      "BMI": 18.9,
      "Pulse": 210,
      "BloodPressureLo": 127,
      "BloodPressureHi": 145
    },
    "Physician": {
      "Name": "Mark Williams, MD",
      "PrimaryPhone": "+1 208 975 3874",
      "Clinic": "Clarit Clinic",
      "Specialty": "PCP",
      "EmergencyPhone": "+1 800 111 2222"
    },
    "Status": {
      "Email": "john.doe@gmail.com",
      "Race": "White",
      "Ethnicity": "Not Hispanic Or Latino",
      "Religion": "Christian (non-Catholic, non-Specific)",
      "MaritalStatus": "Married",
      "EmergencyContact": {
        "Relation": "Wife",
        "Name": "Sarah Doe",
        "Phone": "+1 (972) 293 9101"
      }
    },
    "Location": {
      "DropdownRecords": [
        {
          "Name": "Patient Geo Location",
          "Address": "1431 T Ave, Fort Worth, TX 76179",
          "Position": {"lat": 32.944827, "lng": -96.645879},
          "Phone": "+1 (214)-701-5489",
          "Hours": "N / A",
          "Markers":[
            {
              "Name": "Patient Geo Location"
            , "Address": "1272 Belt Line Rd, Garland TX 75040"
            , "Position": {"lat": 32.944827, "lng": -96.645879}
            , "Phone": "+1 (214)-701-5489"
            }
          ]
        },
        {
          "Name": "Pharmacies In Area",
          "Address": "1272 Belt Line Rd, Garland TX 75040",
          "Position": {"lat": 32.944827, "lng": -96.645879},
          "Phone": "+1 (972) 495-1933",
          "Hours": "Open 9 AM to 10 PM",
          "Markers":[
            {
              "Name": "CVS Pharmacy"
            , "Address": "1372 Belt Line Rd"
            , "Position": {"lat": 32.944527, "lng": -96.646960}
            ,"Phone": "+1 (972) 495-1934"
            } ,
            {
              "Name": "Walmart Pharmacy"
            , "Address": "101 W Buckingham Rd"
            , "Position": {"lat": 32.932013, "lng": -96.631611}
            ,"Phone": "+1 (972) 495-1935"
            } ,
            {
              "Name": "Walgreens"
            , "Address": "2614 Lavon Dr"
            , "Position": {"lat": 32.939566, "lng": -96.621946}
            ,"Phone": "+1 (972) 495-1936"
            } ,
            {
              "Name": "Walgreens"
            , "Address": "1902 N Jupiter Rd"
            , "Position": {"lat": 32.930183, "lng": -96.682285}
            ,"Phone": "+1 (972) 495-1937"
            } ,
            {
              "Name": "CVS Pharmacy - Target"
            , "Address": "5301 N Garland Ave"
            , "Position": {"lat": 32.965650, "lng": -96.646806}
            ,"Phone": "+1 (972) 495-1938"
            } ,
            {
              "Name": "Walmart Pharmacy"
            , "Address": "5302 N Garland Ave"
            , "Position": {"lat": 32.962346, "lng": -96.642499}
            ,"Phone": "+1 (972) 495-1939"
            }
          ]
        },
        {
          "Name": "Hospitals In Area",
          "Address": "7 Medical Pkwy, Dallas, TX 75234",
          "Position": {"lat": 32.944827, "lng": -96.645879},
          "Phone": "+(972) 888-7000",
          "Hours": "Open 9AM to 9PM",
          "Markers":[
            {
              "Name": "Baylor Scott & White Medical Center"
            , "Address": "2300 Marie Curie Blvd"
            , "Position": {"lat": 32.918755, "lng": -96.661963}
            , "Phone": "+(972) 888-7001",
            } ,
            {
              "Name": "Select Specialty Hospital - Dallas Garland"
            , "Address": "2300 Marie Curie Drive Floors 3E & 3W"
            , "Position": {"lat": 32.918793, "lng": -96.662041}
            , "Phone": "+(972) 888-7002",
            } ,
            {
              "Name": "Children's Health Pediatric Group Garland"
            , "Address": "455 N Garland Ave"
            , "Position": {"lat": 28.548467, "lng": -81.381385}
            , "Phone": "+(972) 888-7003",
            } ,
            {
              "Name": "Sundance Hospital Dallas"
            , "Address": "2696 W Walnut St"
            , "Position": {"lat": 32.913402, "lng": -96.670117}
            , "Phone": "+(972) 888-7004",
            }
          ]
        }
      ]
    },
    "PastAppointments": [
      {
        "Date": "7-01-2018 15:00:00",
        "Time": "12:00:00",
        "Department": "SpinSci Clinic",
        "Provider": "Administrator",
        "VisitType": "Office Visit",
        "VisitReason": "New Patient",
        "Appointment Details": {
          "Interpreter Required": "No",
          "IsRequired": "false",
          "Interpreter Language": "None",
          "Status": "Arrived Late"
        }
      }
    ],
    "CurrentAppointments": [
      {
        "Date": "8-20-2018 15:00:00",
        "Time": "15:00:00",
        "Department": "Radiology",
        "Provider": "Dr. Steve Angler",
        "VisitType": "Office Visit",
        "VisitReason": "No Comments",
        "Appointment Details": {
          "Interpreter Required": "No",
          "IsRequired": "false",
          "Interpreter Language": "None",
          "Status": "Arrived Late"
        }
      },
      {
        "Date": "8-25-2018 14:30:00",
        "Time": "13:00:00",
        "Department": "General",
        "Provider": "Dr. John Lee",
        "VisitType": "Office Visit",
        "VisitReason": "Knee Pain",
        "Appointment Details": {
          "Interpreter Required": "Yes",
          "IsRequired": "True",
          "Interpreter Language": "Mandarin",
          "Status": "Checked Out"
        }
      },
      {
        "Date": "9-01-2018 14:00:00",
        "Time": "11:00:00",
        "Department": "Kent Health Center",
        "Provider": "Dr. Mary John",
        "VisitType": "Physical",
        "VisitReason": "No Comments",
        "Appointment Details": {
          "Interpreter Required": "No",
          "IsRequired": "True",
          "Interpreter Language": "None",
          "Status": "Checked Out"
        }
      },
      {
        "Date": "10-01-2018 14:00:00",
        "Time": "11:00:00",
        "Department": "Kent Health Center",
        "Provider": "Dr. John Lee",
        "VisitType": "Physical",
        "VisitReason": "No Comments",
        "Appointment Details": {
          "Interpreter Required": "No",
          "IsRequired": "True",
          "Interpreter Language": "None",
          "Status": "Checked Out"
        }
      }
    ],
    "Billing": {
      "Provider": "United HealthCare",
      "Plan": "Choice",
      "Subscriber": "Self",
      "Street": "3153 T Ave",
      "City": "Fort Worth",
      "State": "TX",
      "ZipCode": "75038",
      "GroupNum": "52534422",
      "PolicyNum": "112222456"
    },
    "BillHistory": [
      {
        "name": " JACOBS,JOHN ",
        "status": "Unpaid",
        "StatementId": "06642326",
        "PatientName": "Johns Jacobs",
        "PatientId": "28724351",
        "Payer": "United",
        "ClaimType": "eClaims",
        "Date": "12/03/2017",
        "TotalAmount": "848.09",
        "TotalPaidAmount": "1200.00",
        "reviews": [
          {
            "date": "07/07/2017",
            "description": "ENCOUNTER 209523",
            "amount": "",
            "insurance": "",
            "currentBalance": "",
            "lineItem": ""
          },
          {
            "date": "07/07/2017",
            "description": "815235 OFFICE/OUTPATIENT VISIT",
            "amount": "$70.00",
            "insurance": "",
            "currentBalance": "$38.04",
            "lineItem": ""
          },
          {
            "date": "07/07/2017",
            "description": "Adjustment UNITED",
            "amount": "$31.96",
            "insurance": "",
            "currentBalance": "$",
            "lineItem": ""
          },
          {
            "date": "07/07/2017",
            "description": "Payment UNITED",
            "amount": "$0.00",
            "insurance": "",
            "currentBalance": "$",
            "lineItem": ""
          }
        ],
        "total": {
          "amount": "$848.09",
          "insurance": "$0.00",
          "currentBalance": "$38.04",
          "lineItem": "$38.04"
        }
      },
      {
        "status": "Paid",
        "StatementId": "02534126",
        "PatientName": "Johns Jacobs",
        "PatientId": "28724351",
        "Payer": "United",
        "ClaimType": "eClaims",
        "Date": "11/02/2016",
        "TotalAmount": "848.09",
        "TotalPaidAmount": "1200.00",
        "reviews": [
          {
            "date": "11/11/2017",
            "description": "ENCOUNTER 109523",
            "amount": "",
            "insurance": "",
            "currentBalance": "",
            "lineItem": ""
          },
          {
            "date": "11/11/2017",
            "description": "163235 OFFICE/OUTPATIENT VISIT",
            "amount": "$70.00",
            "insurance": "",
            "currentBalance": "$38.04",
            "lineItem": ""
          },
          {
            "date": "11/11/2017",
            "description": "Adjustment UNITED",
            "amount": "$31.96",
            "insurance": "",
            "currentBalance": "$",
            "lineItem": ""
          },
          {
            "date": "11/11/2017",
            "description": "Payment UNITED",
            "amount": "$0.00",
            "insurance": "",
            "currentBalance": "$",
            "lineItem": ""
          }
        ],
        "total": {
          "amount": "$848.09",
          "insurance": "$0.00",
          "currentBalance": "$38.04",
          "lineItem": "$38.04"
        }
      },
      {
        "status": "Unpaid",
        "StatementId": "02512426",
        "PatientName": "Johns Jacobs",
        "PatientId": "28724351",
        "Payer": "United",
        "ClaimType": "eClaims",
        "Date": "04/04/2015",
        "TotalAmount": "848.09",
        "TotalPaidAmount": "1100.00",
        "reviews": [
          {
            "date": "03/03/2017",
            "description": "ENCOUNTER 209523",
            "amount": "",
            "insurance": "",
            "currentBalance": "",
            "lineItem": ""
          },
          {
            "date": "02/02/2017",
            "description": "815235 OFFICE/OUTPATIENT VISIT",
            "amount": "$70.00",
            "insurance": "",
            "currentBalance": "$38.04",
            "lineItem": ""
          },
          {
            "date": "01/01/2017",
            "description": "Adjustment UNITED",
            "amount": "$31.96",
            "insurance": "",
            "currentBalance": "$",
            "lineItem": ""
          },
          {
            "date": "01/01/2017",
            "description": "Payment UNITED",
            "amount": "$0.00",
            "insurance": "",
            "currentBalance": "$",
            "lineItem": ""
          }
        ],
        "total": {
          "amount": "$848.09",
          "insurance": "$0.00",
          "currentBalance": "$38.04",
          "lineItem": "$38.04"
        }
      }
    ]
  },
  {
    "screenPopLinkInfo": "http://10.3.74.119/openemr/interface/patient_file/summary/demographics.php?set_pid=1",
    "Category": "EPIC",
    "Name": "Sarah Jones",
    "DateOfBirth": "1993-07-01 00:00:00",
    "MRN": 7499281,
    "SSN": "***-**-5124",
    "PhoneNumber": "+1 253 704 2531",
    "PhotoUrl": "img/uhaha.png",
    "PrimaryCareProvider": {
      "Name": "Mark Williams, MD",
      "Phone": "+1 208 975 3874"
    },
    "medicalHistory": [
      "> Heart surgery at the age of 21",
      "> Sleeeptalking"
    ],
    "activeProblems": [
      "> Moderate Insomnia",
      "> Severe fever"
    ],
    "allergies": [
      {
        "name": "IODINE",
        "description": "IODINE",
        "dateEntered": "Aug 08, 2018",
        "dateNoted": "Aug 08, 2018",
        "reactions": "itchy rash taht comes on slowly",
        "reactionComments": "Direct contact with skin results in small bumps",
        "severity": "Moderate",
        "type": "Intolerance"
      },
      {
        "name": "BEE VENOM",
        "description": "BEE VENOM",
        "dateEntered": "Mar 05, 2017",
        "dateNoted": "Mar 05, 2017",
        "reactions": "nausea and vomiting",
        "reactionComments": "Patient was stung by a bee",
        "severity": "High",
        "type": "Intolerant"
      }
    ],
    "encounters": [
      {
        "type": "Office Visit",
        "date": "Jun 05, 2018",
        "eventType": "Hospital Outpatient",
        "patientClass": "Our Patient",
        "admissionType": "Emergency",
        "dischargeDisposition": "09 - Admitted as an inpatient to this hospital"
      },
      {
        "type": "Orders Only",
        "date": "Mar 15, 2018",
        "eventType": "Admission",
        "patientClass": "In Patient",
        "admissionType": "Elective",
        "dischargeDisposition": "52 - The referring/prescribing/rendering provider is not eligible to refer/prescribe/order/perform the service billed"
      }
    ],
    "Address": {
      "Line1": "1431 T Ave, Fort Worth",
      "Line2": "TX 76179, USA"
    },
    "TreatmentTeam": [
    ],
    "Provider": [
      {
        "Name": "United Healthcare (UHC Parkway, GA,66552)",
        "PhoneNumber": "+1 216 411 8765"
      }
    ],
    "InsuranceVerification": {
      "InsuranceName": "Sarah Jones",
      "GroupNum": "#42AEC",
      "NetworkNum": "#42AEC",
      "PolicyNum": "#055113542",
      "IssueDate": "20-Aug-2016 00:00:00"
    },
    "Vitals": {
      "Height": 160,
      "Weight": 55,
      "RespirationRate": 67,
      "BMI": 22,
      "Pulse": 100,
      "BloodPressureLo": 80,
      "BloodPressureHi": 120
    },
    "Physician": {
      "Name": "Mark Williams, MD",
      "PrimaryPhone": "+1 208 975 3874",
      "Clinic": "Clarit Clinic",
      "Specialty": "PCP",
      "EmergencyPhone": "+1 800 111 2222"
    },
    "Status": {
      "Email": "sarah.jones@gmail.com",
      "Race": "White",
      "Ethnicity": "Not Hispanic Or Latino",
      "Religion": "Christian (non-Catholic, non-Specific)",
      "MaritalStatus": "Married",
      "EmergencyContact": {
        "Relation": "Husband",
        "Name": "Jack Jones",
        "Phone": "+1 (972) 293 9234"
      }
    },
    "Location": {
      "DropdownRecords": [
        {
          "Name": "Patient Geo Location",
          "Address": "1431 T Ave, Fort Worth, TX 76179",
          "Position": {"lat": 31.944827, "lng": -95.645879},
          "Phone": "+1 (253)-704-2531",
          "Hours": "N / A",
          "Markers":[
            {
              "Name": "Patient Geo Location"
            , "Address": "1272 Belt Line Rd, Garland TX 75040"
            , "Position": {"lat": 31.944827, "lng": -95.645879}
            , "Phone": "+1 (253)-704-2531"
            }
          ]
        },
        {
          "Name": "Pharmacies In Area",
          "Address": "1272 Belt Line Rd, Garland TX 75040",
          "Position": {"lat": 31.944827, "lng": -95.645879},
          "Phone": "+1 (972) 496-1933",
          "Hours": "Open 9 AM to 10 PM",
          "Markers":[
            {
              "Name": "CVS Pharmacy"
            , "Address": "1372 Belt Line Rd"
            , "Position": {"lat": 31.944527, "lng": -95.646960}
            , "Phone": "+1 (972) 496-1934" 
            } ,
            {
              "Name": "Walmart Pharmacy"
            , "Address": "101 W Buckingham Rd"
            , "Position": {"lat": 31.932013, "lng": -95.631611}
            , "Phone": "+1 (972) 496-1935" 
            } ,
            {
              "Name": "Walgreens"
            , "Address": "2614 Lavon Dr"
            , "Position": {"lat": 31.939566, "lng": -95.621946}
            , "Phone": "+1 (972) 496-1936" 
            } ,
            {
              "Name": "Walgreens"
            , "Address": "1902 N Jupiter Rd"
            , "Position": {"lat": 32.930183, "lng": -95.682285}
            , "Phone": "+1 (972) 496-1937" 
            } ,
            {
              "Name": "CVS Pharmacy - Target"
            , "Address": "5301 N Garland Ave"
            , "Position": {"lat": 32.965650, "lng": -95.646806}
            , "Phone": "+1 (972) 496-1938" 
            } ,
            {
              "Name": "Walmart Pharmacy"
            , "Address": "5302 N Garland Ave"
            , "Position": {"lat": 32.962346, "lng": -95.642499}
            , "Phone": "+1 (972) 496-1939" 
            }
          ]
        },
        {
          "Name": "Hospitals In Area",
          "Address": "7 Medical Pkwy, Dallas, TX 75234",
          "Position": {"lat": 32.944827, "lng": -95.645879},
          "Phone": "+(972) 898-7000",
          "Hours": "Open 9AM to 9PM",
          "Markers":[
            {
              "Name": "Baylor Scott & White Medical Center"
            , "Address": "2300 Marie Curie Blvd"
            , "Position": {"lat": 32.918755, "lng": -95.661963}
            , "Phone": "+(972) 898-7001"
            } ,
            {
              "Name": "Select Specialty Hospital - Dallas Garland"
            , "Address": "2300 Marie Curie Drive Floors 3E & 3W"
            , "Position": {"lat": 32.918793, "lng": -96.662041}
            , "Phone": "+(972) 898-7002"
            } ,
            {
              "Name": "Children's Health Pediatric Group Garland"
            , "Address": "455 N Garland Ave"
            , "Position": {"lat": 28.548467, "lng": -81.381385}
            , "Phone": "+(972) 898-7003"
            } ,
            {
              "Name": "Sundance Hospital Dallas"
            , "Address": "2696 W Walnut St"
            , "Position": {"lat": 32.913402, "lng": -96.670117}
            , "Phone": "+(972) 898-7004"
            }
          ]
        }
      ]
    },
    "PastAppointments": [
      {
        "Date": "7-15-2018 15:00:00",
        "Time": "12:00:00",
        "Department": "SpinSci Clinic",
        "Provider": "Administrator",
        "VisitType": "Office Visit",
        "VisitReason": "New Patient",
        "Appointment Details": {
          "Interpreter Required": "No",
          "IsRequired": "false",
          "Interpreter Language": "None",
          "Status": "Arrived Late"
        }
      }
    ],
    "CurrentAppointments": [
      {
        "Date": "8-24-2018 15:00:00",
        "Time": "15:00:00",
        "Department": "Urology",
        "Provider": "Dr. Steve Angler",
        "VisitType": "Office Visit",
        "VisitReason": "No Comments",
        "Appointment Details": {
          "Interpreter Required": "No",
          "IsRequired": "false",
          "Interpreter Language": "None",
          "Status": "Arrived Late"
        }
      },
      {
        "Date": "8-22-2018 14:30:00",
        "Time": "13:00:00",
        "Department": "General",
        "Provider": "Dr. John Lee",
        "VisitType": "Office Visit",
        "VisitReason": "Knee Pain",
        "Appointment Details": {
          "Interpreter Required": "Yes",
          "IsRequired": "True",
          "Interpreter Language": "Mandarin",
          "Status": "Checked Out"
        }
      },
      {
        "Date": "10-03-2018 14:00:00",
        "Time": "11:00:00",
        "Department": "Kent Health Center",
        "Provider": "Dr. John Lee",
        "VisitType": "Physical",
        "VisitReason": "No Comments",
        "Appointment Details": {
          "Interpreter Required": "No",
          "IsRequired": "True",
          "Interpreter Language": "None",
          "Status": "Checked Out"
        }
      }
    ],
    "Billing": {
      "Provider": "United HealthCare",
      "Plan": "Choice",
      "Subscriber": "Self",
      "Street": "3153 T Ave",
      "City": "Fort Worth",
      "State": "TX",
      "ZipCode": "75038",
      "GroupNum": "52534422",
      "PolicyNum": "112222456"
    },
    "BillHistory": [
      {
        "name": " JONES,SARAH ",
        "status": "Unpaid",
        "StatementId": "06642326",
        "PatientName": "Sarah Jones",
        "PatientId": "28724301",
        "Payer": "United",
        "ClaimType": "eClaims",
        "Date": "12/03/2017",
        "TotalAmount": "848.09",
        "TotalPaidAmount": "1200.00",
        "reviews": [
          {
            "date": "07/07/2017",
            "description": "ENCOUNTER 209233",
            "amount": "",
            "insurance": "",
            "currentBalance": "",
            "lineItem": ""
          },
          {
            "date": "07/07/2017",
            "description": "815235 OFFICE/OUTPATIENT VISIT",
            "amount": "$70.00",
            "insurance": "",
            "currentBalance": "$15.04",
            "lineItem": ""
          },
          {
            "date": "07/07/2017",
            "description": "Adjustment UNITED",
            "amount": "$41.96",
            "insurance": "",
            "currentBalance": "$",
            "lineItem": ""
          },
          {
            "date": "07/07/2017",
            "description": "Payment UNITED",
            "amount": "$0.00",
            "insurance": "",
            "currentBalance": "$",
            "lineItem": ""
          }
        ],
        "total": {
          "amount": "$551.09",
          "insurance": "$0.00",
          "currentBalance": "$38.04",
          "lineItem": "$38.04"
        }
      },
      {
        "status": "Paid",
        "StatementId": "02534126",
        "PatientName": "Sarah Jones",
        "PatientId": "28724301",
        "Payer": "United",
        "ClaimType": "eClaims",
        "Date": "11/02/2016",
        "TotalAmount": "848.09",
        "TotalPaidAmount": "1200.00",
        "reviews": [
          {
            "date": "11/11/2017",
            "description": "ENCOUNTER 109523",
            "amount": "",
            "insurance": "",
            "currentBalance": "",
            "lineItem": ""
          },
          {
            "date": "11/11/2017",
            "description": "163235 OFFICE/OUTPATIENT VISIT",
            "amount": "$70.00",
            "insurance": "",
            "currentBalance": "$38.04",
            "lineItem": ""
          },
          {
            "date": "11/11/2017",
            "description": "Adjustment UNITED",
            "amount": "$31.96",
            "insurance": "",
            "currentBalance": "$",
            "lineItem": ""
          },
          {
            "date": "11/11/2017",
            "description": "Payment UNITED",
            "amount": "$0.00",
            "insurance": "",
            "currentBalance": "$",
            "lineItem": ""
          }
        ],
        "total": {
          "amount": "$848.09",
          "insurance": "$0.00",
          "currentBalance": "$38.04",
          "lineItem": "$38.04"
        }
      },
      {
        "status": "Unpaid",
        "StatementId": "02512426",
        "PatientName": "Sarah Jones",
        "PatientId": "28724301",
        "Payer": "United",
        "ClaimType": "eClaims",
        "Date": "04/04/2015",
        "TotalAmount": "848.09",
        "TotalPaidAmount": "1100.00",
        "reviews": [
          {
            "date": "03/03/2017",
            "description": "ENCOUNTER 209523",
            "amount": "",
            "insurance": "",
            "currentBalance": "",
            "lineItem": ""
          },
          {
            "date": "02/02/2017",
            "description": "815235 OFFICE/OUTPATIENT VISIT",
            "amount": "$70.00",
            "insurance": "",
            "currentBalance": "$38.04",
            "lineItem": ""
          },
          {
            "date": "01/01/2017",
            "description": "Adjustment UNITED",
            "amount": "$31.96",
            "insurance": "",
            "currentBalance": "$",
            "lineItem": ""
          },
          {
            "date": "01/01/2017",
            "description": "Payment UNITED",
            "amount": "$0.00",
            "insurance": "",
            "currentBalance": "$",
            "lineItem": ""
          }
        ],
        "total": {
          "amount": "$848.09",
          "insurance": "$0.00",
          "currentBalance": "$38.04",
          "lineItem": "$38.04"
        }
      }
    ]
  },
    {
      "screenPopLinkInfo": "http://10.3.74.119/openemr/interface/patient_file/summary/demographics.php?set_pid=3",
      "Category": "EPIC",
      "Name": "Grace Paz",
      "DateOfBirth": "2007-12-25 00:00:00",
      "MRN": 7499220,    
      "SSN": "***-**-5428",
      "PhoneNumber": "+1 255 703 8801",
      "PhotoUrl": "img/user2.png",
      "PrimaryCareProvider": {
        "Name": "Mark Williams, MD",
        "Phone": "+1 208 975 3874"
      },
      "Address": {
        "Line1": "5234 T Ave",
        "Line2": "Fort Worth, TX 76179, USA"
      },
      "medicalHistory": [
        "> Sleeeptalking",
        "> Hepatitis"
      ],
      "activeProblems": [
        "> Prolonged fever without complication",
        "> Protein-calorie malnutrition, moderate"
      ],
      "allergies": [
        {
          "name": "PENICILLINS",
          "description": "PENICILLINS",
          "dateEntered": "Jul 13, 2018",
          "dateNoted": "Jul 13, 2018",
          "reactions": "Hives nad itchy eyes",
          "reactionComments": "Overdose",
          "severity": "Low",
          "type": "Tolerant"
        },
        {
          "name": "BEE VENOM",
          "description": "BEE VENOM",
          "dateEntered": "Mar 05, 2017",
          "dateNoted": "Mar 05, 2017",
          "reactions": "nausea and vomiting",
          "reactionComments": "Patient was stung by a bee",
          "severity": "High",
          "type": "Intolerant"
        }
      ],
      "encounters": [
        {
          "type": "Office Visit",
          "date": "Jun 05, 2018",
          "eventType": "Telephone",
          "patientClass": "Our Patient",
          "admissionType": "Elective",
          "dischargeDisposition": "B2 - Covered visits. INACTIVE"
        },
        {
          "type": "Abstract",
          "date": "Mar 05, 2018",
          "eventType": "History",
          "patientClass": "Our Patient",
          "admissionType": "Elective",
          "dischargeDisposition": "29 - The time limit for filing has expired"
        }
      ],
      "TreatmentTeam": [
        {
          "Name": "David Steve",
          "PhoneNumber": "+1 404 418 1212"
        }
      ],
      "Provider": [
        {
          "Name": "United Healthcare (UHC Parkway, GA,66552)",
          "PhoneNumber": "+1 216 411 8765"
        }
      ],
      "Billing": {
        "Provider": "United HealthCare",
        "Plan": "Choice",
        "Subscriber": "Self",
        "Street": "5234 T Ave",
        "City": "Fort Worth",
        "State": "TX",
        "ZipCode": "75038",
        "GroupNum": "555664422",
        "PolicyNum": "334422456"
      },
      "BillHistory": [
        {
          "name": " JACOBS,JOHN ",
          "status": "Unpaid",
          "StatementId": "06642326",
          "PatientName": "Grace Paz",
          "PatientId": "28724351",
          "Payer": "United",
          "ClaimType": "eClaims",
          "Date": "12/03/2017",
          "TotalAmount": "848.09",
          "TotalPaidAmount": "1200.00",
          "reviews": [
            {
              "date": "12/03/2017",
              "description": "ENCOUNTER 209523",
              "amount": "",
              "insurance": "",
              "currentBalance": "",
              "lineItem": ""
            },
            {
              "date": "12/03/2017",
              "description": "815235 OFFICE/OUTPATIENT VISIT",
              "amount": "$70.00",
              "insurance": "",
              "currentBalance": "$38.04",
              "lineItem": ""
            },
            {
              "date": "12/03/2017",
              "description": "Adjustment UNITED",
              "amount": "$31.96",
              "insurance": "",
              "currentBalance": "$",
              "lineItem": ""
            },
            {
              "date": "12/18/2017",
              "description": "Payment UNITED",
              "amount": "$0.00",
              "insurance": "",
              "currentBalance": "$",
              "lineItem": ""
            }
          ],
          "total": {
            "amount": "$848.09",
            "insurance": "$0.00",
            "currentBalance": "$38.04",
            "lineItem": "$38.04"
          }
        },
        {
          "status": "Paid",
          "StatementId": "02534126",
          "PatientName": "Grace Paz",
          "PatientId": "28724351",
          "Payer": "United",
          "ClaimType": "eClaims",
          "Date": "11/02/2016",
          "TotalAmount": "848.09",
          "TotalPaidAmount": "1200.00",
          "reviews": [
            {
              "date": "11/03/2017",
              "description": "ENCOUNTER 109523",
              "amount": "",
              "insurance": "",
              "currentBalance": "",
              "lineItem": ""
            },
            {
              "date": "11/03/2017",
              "description": "115235 OFFICE/OUTPATIENT VISIT",
              "amount": "$70.00",
              "insurance": "",
              "currentBalance": "$38.04",
              "lineItem": ""
            },
            {
              "date": "11/03/2017",
              "description": "Adjustment UNITED",
              "amount": "$31.96",
              "insurance": "",
              "currentBalance": "$",
              "lineItem": ""
            },
            {
              "date": "12/14/2017",
              "description": "Payment UNITED",
              "amount": "$0.00",
              "insurance": "",
              "currentBalance": "$",
              "lineItem": ""
            }
          ],
          "total": {
            "amount": "$848.09",
            "insurance": "$0.00",
            "currentBalance": "$38.04",
            "lineItem": "$38.04"
          }
        },
        {
          "status": "Unpaid",
          "StatementId": "02513426",
          "PatientName": "Grace Paz",
          "PatientId": "28724351",
          "Payer": "United",
          "ClaimType": "eClaims",
          "Date": "08/02/2015",
          "TotalAmount": "848.09",
          "TotalPaidAmount": "1100.00",
          "reviews": [
            {
              "date": "12/15/2017",
              "description": "ENCOUNTER 209523",
              "amount": "",
              "insurance": "",
              "currentBalance": "",
              "lineItem": ""
            },
            {
              "date": "12/16/2017",
              "description": "815235 OFFICE/OUTPATIENT VISIT",
              "amount": "$70.00",
              "insurance": "",
              "currentBalance": "$38.04",
              "lineItem": ""
            },
            {
              "date": "12/15/2017",
              "description": "Adjustment UNITED",
              "amount": "$31.96",
              "insurance": "",
              "currentBalance": "$",
              "lineItem": ""
            },
            {
              "date": "12/15/2017",
              "description": "Payment UNITED",
              "amount": "$0.00",
              "insurance": "",
              "currentBalance": "$",
              "lineItem": ""
            }
          ],
          "total": {
            "amount": "$848.09",
            "insurance": "$0.00",
            "currentBalance": "$38.04",
            "lineItem": "$38.04"
          }
        }
      ],

      "InsuranceVerification": {
        "InsuranceName": "Johns Jacobs",
        "GroupNum": "#555664422",
        "NetworkNum": "#45ABC",
        "PolicyNum": "#334422456",
        "IssueDate": "20-Aug-2016 00:00:00"
      },
      "Vitals": {
        "Height": 133,
        "Weight": 30,
        "RespirationRate": 29,
        "BMI": 17.2,
        "Pulse": 84,
        "BloodPressureLo": 70,
        "BloodPressureHi": 100  
      },
      "Physician": {
        "Name": "Mark Williams, MD",
        "PrimaryPhone": "+1 208 975 3874",
        "Clinic": "Clarit Clinic",
        "Specialty": "PCP",
        "EmergencyPhone": "+1 800 111 2222"
      },
      "Status": {
        "Email": "grace.paz.531@aol.com",
        "Race": "Declined to Specify",
        "Ethnicity": "Declined to Specify",
        "Religion": "Cyberculture Religions",
        "MaritalStatus": "Single",
        "EmergencyContact": {
          "Relation": "Friend",
          "Name": "Mr Nobody",
          "Phone": "+1 (972) 293 9101"
        }
      },
      "Location": {
        "DropdownRecords": [
          {
            "Name": "Patient Geo Location",
            "Address": "5234 T Ave, Fort Worth, TX 76179",
            "Position": {
              "lat": 31.900827,
              "lng": -97.600879
            },
            "Phone": "+1 255 703 8801",
            "Hours": "N / A",
            "Markers": [
              {
                "Name": "Patient Geo Location",
                "Address": "1272 Belt Line Rd, Garland TX 75040",
                "Position": {
                  "lat": 31.900827,
                  "lng": -97.600879
                },
                "Phone": "+1 255 703 8801"
              }
            ]
          },
          {
            "Name": "Pharmacies In Area",
            "Address": "1272 Belt Line Rd, Garland TX 75040",
            "Position": {
              "lat": 31.900827,
              "lng": -97.600879
            },
            "Phone": "+1 (972) 498-1933",
            "Hours": "Open 9 AM to 10 PM",
            "Markers": [
              {
                "Name": "CVS Pharmacy",
                "Address": "1372 Belt Line Rd",
                "Position": {
                  "lat": 31.900827,
                  "lng": -97.600879
                },
                "Phone": "+1 (972) 498-1934"
              },
              {
                "Name": "Walmart Pharmacy",
                "Address": "101 W Buckingham Rd",
                "Position": {
                  "lat": 31.900827,
                  "lng": -97.600879
                },
                "Phone": "+1 (972) 498-1935"
              },
              {
                "Name": "Walgreens",
                "Address": "2614 Lavon Dr",
                "Position": {
                  "lat": 31.900827,
                  "lng": -97.600879
                },
                "Phone": "+1 (972) 498-1936"
              },
              {
                "Name": "Walgreens",
                "Address": "1902 N Jupiter Rd",
                "Position": {
                  "lat": 31.900827,
                  "lng": -97.600879
                },
                "Phone": "+1 (972) 498-1937"
              },
              {
                "Name": "CVS Pharmacy - Target",
                "Address": "5301 N Garland Ave",
                "Position": {
                  "lat": 31.900827,
                  "lng": -97.600879
                },
                "Phone": "+1 (972) 498-1938"
              },
              {
                "Name": "Walmart Pharmacy",
                "Address": "5302 N Garland Ave",
                "Position": {
                  "lat": 31.900827,
                  "lng": -97.600879
                },
                "Phone": "+1 (972) 498-1939"
              }
            ]
          },
          {
            "Name": "Hospitals In Area",
            "Address": "7 Medical Pkwy, Dallas, TX 75234",
            "Position": {
              "lat": 32.944827,
              "lng": -97.600879
            },
            "Phone": "+(972) 988-7000",
            "Hours": "Open 9AM to 9PM",
            "Markers": [
              {
                "Name": "Baylor Scott & White Medical Center",
                "Address": "2300 Marie Curie Blvd",
                "Position": {
                  "lat": 32.918755,
                  "lng": -97.600879
                },
                "Phone": "+(972) 988-7001",
              },
              {
                "Name": "Select Specialty Hospital - Dallas Garland",
                "Address": "2300 Marie Curie Drive Floors 3E & 3W",
                "Position": {
                  "lat": 32.918793,
                  "lng": -97.600879
                },
                "Phone": "+(972) 988-7002",
              },
              {
                "Name": "Children's Health Pediatric Group Garland",
                "Address": "455 N Garland Ave",
                "Position": {
                  "lat": 28.548467,
                  "lng": -81.381385
                },
                "Phone": "+(972) 988-7003",
              },
              {
                "Name": "Sundance Hospital Dallas",
                "Address": "2696 W Walnut St",
                "Position": {
                  "lat": 32.913402,
                  "lng": -96.670117
                },
                "Phone": "+(972) 988-7004",
              }
            ]
          }
        ]
      },
      "PastAppointments": [
        {
          "Date": "7-23-2018 15:00:00",
          "Time": "12:00:00",
          "Department": "SpinSci Clinic",
          "Provider": "Administrator",
          "VisitType": "Office Visit",
          "VisitReason": "New Patient",
          "Appointment Details": {
            "Interpreter Required": "No",
            "IsRequired": "false",
            "Interpreter Language": "None",
            "Status": "Arrived Late"
          }
        }
      ],
      "CurrentAppointments": [
        {
          "Date": "8-23-2018 15:00:00",
          "Time": "12:00:00",
          "Department": "SpinSci Clinic",
          "Provider": "Administrator",
          "VisitType": "Office Visit",
          "VisitReason": "New Patient",
          "Appointment Details": {
            "Interpreter Required": "No",
            "IsRequired": "false",
            "Interpreter Language": "None",
            "Status": "Arrived Late"
          }
        },
        {
          "Date": "8-28-2018 14:30:00",
          "Time": "15:00:00",
          "Department": "SpinSci Clinic",
          "Provider": "Administrator",
          "VisitType": "Office Visit",
          "VisitReason": "Perscription Clarification",
          "Appointment Details": {
            "Interpreter Required": "Yes",
            "IsRequired": "True",
            "Interpreter Language": "Mandarin",
            "Status": "Checked Out"
          }
        },
        {
          "Date": "9-30-2018 15:00:00",
          "Time": "12:00:00",
          "Department": "SpinSci Clinic",
          "Provider": "Administrator",
          "VisitType": "Office Visit",
          "VisitReason": "New Patient",
          "Appointment Details": {
            "Interpreter Required": "No",
            "IsRequired": "false",
            "Interpreter Language": "None",
            "Status": "Arrived Late"
          }
        }
      ]
    }
  ],
  "MakeAppointmentDropDownOptions": {
    "Department": [
      "Select Department...",
      "Emergency",
      "Outpatient",
      "Radiology",
      "General"
    ],
    "Facility": [
      "Select Facility...",
      "Clarit",
      "Imaging Center"
    ],
    "Provider": [
      "Select Provider...",
      "Medical Center",
      "Hospital",
      "Clinic"
    ],
    "Physician": [
      "Select Physician...",
      "Dr. John Lee, MD",
      "Dr. Steve Angler, MD",
      "Dr. Phil Patel, MD",
      "Dr. Mark Williams, MD"
    ]
  },
  "ExistingAppointmentSlots": [
    {
      "StartTime": "20-Oct-2017 08:00:00",
      "EndTime": "20-Oct-2017 08:30:00",
      "Name": "Open Schedule",
      "IsOpen": true,
      "Facility": "---",
      "Provider": "---",
      "Physician": "---",
      "Status": "Available"
    },
    {
      "StartTime": "20-Oct-2017 08:30:00",
      "EndTime": "20-Oct-2017 09:00:00",
      "Name": "Open Schedule",
      "IsOpen": true,
      "Facility": "---",
      "Provider": "---",
      "Physician": "---",
      "Status": "Available"
    },
    {
      "StartTime": "20-Oct-2017 09:00:00",
      "EndTime": "20-Oct-2017 09:30:00",
      "Name": "Open Schedule",
      "IsOpen": true,
      "Facility": "---",
      "Provider": "---",
      "Physician": "---",
      "Status": "Available"
    },
    {
      "StartTime": "20-Oct-2017 09:30:00",
      "EndTime": "20-Oct-2017 10:00:00",
      "Name": "Jean Jacobs",
      "IsOpen": false,
      "Facility": "Imaging Center",
      "Provider": "Dr. Steve",
      "Physician": "---",
      "Status": "On Hold"
    },
    {
      "StartTime": "20-Oct-2017 10:00:00",
      "EndTime": "20-Oct-2017 10:30:00",
      "Name": "Open Schedule",
      "IsOpen": true,
      "Facility": "---",
      "Provider": "---",
      "Physician": "---",
      "Status": "Available"
    },
    {
      "StartTime": "20-Oct-2017 10:30:00",
      "EndTime": "20-Oct-2017 11:00:00",
      "Name": "Open Schedule",
      "IsOpen": true,
      "Facility": "---",
      "Provider": "---",
      "Physician": "---",
      "Status": "Available"
    },
    {
      "StartTime": "20-Oct-2017 11:00:00",
      "EndTime": "20-Oct-2017 11:30:00",
      "Name": "Open Schedule",
      "IsOpen": true,
      "Facility": "---",
      "Provider": "---",
      "Physician": "---",
      "Status": "Available"
    },
    {
      "StartTime": "20-Oct-2017 11:30:00",
      "EndTime": "20-Oct-2017 12:00:00",
      "Name": "Open Schedule",
      "IsOpen": true,
      "Facility": "---",
      "Provider": "---",
      "Physician": "---",
      "Status": "Available"
    },
    {
      "StartTime": "20-Oct-2017 12:00:00",
      "EndTime": "20-Oct-2017 12:30:00",
      "Name": "Thomas Smith",
      "IsOpen": false,
      "Facility": "Imaging Center",
      "Provider": "Dr. John",
      "Physician": "---",
      "Status": "On Hold"
    }
  ],
  "NewAppointment": {
    "StartTime": "20-Oct-2017 10:00:00",
    "EndTime": "20-Oct-2017 10:30:00",
    "Name": "Johns Jacobs",
    "IsOpen": false,
    "Facility": "SpinSci Clinic",
    "Provider": "United Healthcare(UHC Parkway, GA,66552)",
    "Physician": "Rohit Potaraju, MD",
    "Status": "On Hold"
  },
  "BookNowData": {
    "InterpreterLanguages": [
      "Spanish",
      "French",
      "Mandarin"
    ],
    "GoogleMapIMG": "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Google_maps_screenshot.png/300px-Google_maps_screenshot.png",
    "SmsConfirmTemplate": "Dear [PATIENTNAME] , we have scheduled an appointment with you for [APPTDATE] at [FACILITY]. Regards, [DRNAME]",
    "EmailConfirmTemplate": "Dear [PATIENTNAME]: This letter is to confirm your appointment at [APPTDATE]. Please plan to arrive approximately 30 minutes prior to your scheduled appointment to allow time for you and your significant other to sign consent forms that are required for your treatment. It is important that your significant other is able to accompany you to your appointments as much as possible. With the type of care we provide, we may be unable to schedule/perform certain procedures without their signature.\n\nPlease complete the following informational forms and return to our office prior to your appointment.\n+ Patient Information Page \n+ Medical History Form\nThis will enable us to thoroughly review your medical background and provide you with the best possible care. If you have been seen by another physician, please request that your medical records be forwarded to our office prior to your appointment, as well. \n\nIn an effort to be HIPAA compliant and to protect your private health information and identity, we require that you bring your photo I.D. and insurance card to your first visit.\n\nAs a courtesy to you we will submit your insurance claims for you; however any copayments will be collected at time of service. For any non insured patients, fees for all office visits and related charges are payable at the time of service. \n\nMy staff and I appreciate your selecting our office for your health care. We recognize the trust and responsibility placed in us and we will do everything possible to provide for those needs. \n\nWe look forward to seeing you!\nSincerely,\n[DRNAME]"
  }
}

function Purify(_data) {
  let data = _data;

  //Purify Referral Date
  for(let i = 0; i<_data.Referrals.length; i++)
  {
    console.log('hhh');
    let date = new Date();
    date.setDate(date.getDate() - 100);
    data.Referrals[i].startDate = ['01','02','03','04','05','06','07','08','09','10','11','12'][date.getMonth()] + '/' + date.getDate() + '/' + date.getFullYear()
    date = new Date();
    date.setDate(date.getDate() - 40);
    data.Referrals[i].endDate = ['01','02','03','04','05','06','07','08','09','10','11','12'][date.getMonth()]  + '/' + date.getDate() + '/' + date.getFullYear()
  }

  
  for(i = 0; i<_data.Patients.length; i++)
  {
    //Purify Appointment Date
    for(let j = 0 ; j<_data.Patients[i].PastAppointments.length; j++)
    {
      let date = new Date();
      date.setDate(date.getDate() - 40 + 7 * j)
      data.Patients[i].PastAppointments[j].Date = (parseInt(date.getMonth()) + 1 ) + '-' + ( date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate() ) + '-' + date.getFullYear() + ' 15:00:00';
    }
    for(j = 0 ; j<_data.Patients[i].CurrentAppointments.length ; j++)
    {
      let date = new Date();
      if(j==_data.Patients[i].CurrentAppointments.length-1)
        date.setDate(date.getDate() + 5 * j + 15)
      else
        date.setDate(date.getDate() + 5 * j)
      data.Patients[i].CurrentAppointments[j].Date = (parseInt(date.getMonth()) + 1 ) + '-' + ( date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate() ) + '-' + date.getFullYear() + ' 15:00:00';
    }

    //Purify Billing Date
    for(j = 0 ; j<_data.Patients[i].BillHistory.length; j++)
    {
      let date = new Date();
      date.setDate(date.getDate() - 140 + 20 * j)
      data.Patients[i].BillHistory[j].Date = (parseInt(date.getMonth()) + 1 ) + '/' + date.getDate() + '/' + date.getFullYear();
      for(let k = 0; k < _data.Patients[i].BillHistory[j].reviews.length ; k++)
      {
        data.Patients[i].BillHistory[j].reviews[k].date = data.Patients[i].BillHistory[j].Date
      }
    }
    
    //Purify Triage-Allergies Date
    for(j = 0 ; j<_data.Patients[i].allergies.length; j++)
    {
      let date = new Date();
      date.setDate(date.getDate() - 50 + 11 * j)
      data.Patients[i].allergies[j].dateEntered = (parseInt(date.getMonth()) + 1 ) + '/' + date.getDate() + '/' + date.getFullYear();
      data.Patients[i].allergies[j].dateNoted = data.Patients[i].allergies[j].dateEntered
    }

    //Purify Triage-Encounters Date
    for(j = 0 ; j<_data.Patients[i].encounters.length; j++)
    {
      let date = new Date();
      date.setDate(date.getDate() - 140 + 30 * j)
      data.Patients[i].encounters[j].date = (parseInt(date.getMonth()) + 1 ) + '/' + date.getDate() + '/' + date.getFullYear();
    }
  }
  
 
     

  // let date = new Date();
  // date.setDate(date.getDate() - 40 + this.$root.activePacient * 5 + data.id * 9 + 1);
  // this.nextDay = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  console.log(data.Referrals)
  return data
}

module.exports = Purify(data)
