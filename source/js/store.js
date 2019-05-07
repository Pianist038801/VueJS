import Vue from 'vue'
import Vuex from 'vuex' 

Vue.use(Vuex)
 

export default new Vuex.Store({
  state: {
    contexts: [],
    trips: [],
    flightInfo: [],
    pacientId: 0,
    pacientName: 'Johns Jacobs',
    referrals: [],
    currentPin: '',
    chosenProvider: {
      name: "Dr.Nancy Snyder",
      type: "Provider",
      source: "Epic",
      telephone: "972-444-5452",
      address: "271 Main Street Dallas TX",
      provider: "South Shore Medical",
      providerContact: "N/A",
      providerStatus: "",
      role: "Nurse",
    },
    chosenPatient: {
      name: "Johns Jacobs",
      type: "Patient",
      source: "Epic",
      telephone: "972-778-3754",
      address: "126 Main Street Dallas TX",
      provider: "South Shore Medical",
      providerContact: "Dr.Nate Gove",
      providerStatus: "Not Available",
      role: "Patient",
    },
    chosenCustomer: {
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
          "reactions": "Itchy rash that comes on slowly",
          "reactionComments": "Direct contact with skin results in small bumps",
          "severity": "Moderate",
          "type": "Intolerance"
        },
        {
          "name": "PENICILLIN",
          "description": "PENICILLIN",
          "dateEntered": "Jul 13, 2018",
          "dateNoted": "Jul 13, 2018",
          "reactions": "Hives and itchy eyes",
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
          "patientClass": "In Customer",
          "admissionType": "Elective",
          "dischargeDisposition": "30 - Still Customer"
        },
        {
          "type": "Evaluation",
          "date": "Mar 15, 2018",
          "eventType": "Transfer In",
          "patientClass": "In Customer",
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
            "Name": "Customer Geo Location",
            "Address": "1431 T Ave, Fort Worth, TX 76179",
            "Position": {"lat": 32.944827, "lng": -96.645879},
            "Phone": "+1 (214)-701-5489",
            "Hours": "N / A",
            "Markers":[
              {
                "Name": "Customer Geo Location"
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
          "VisitReason": "New Customer",
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
          "CustomerName": "Johns Jacobs",
          "CustomerId": "28724351",
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
          "CustomerName": "Johns Jacobs",
          "CustomerId": "28724351",
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
          "CustomerName": "Johns Jacobs",
          "CustomerId": "28724351",
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
    customerSelected: false,
  },
  mutations: {
    setCurrentPin(state, pin) {
      state.currentPin = pin;
    },
    setReferralData(state, referrals){
      console.log('NEW_REF+', referrals)
      state.referrals = [...referrals]
    },
    setCallerProvider(state, info) {
      state.chosenProvider = info;
      state.chosenPatient = info;
    },
    setCustomerInfo(state, info) {
      state.chosenCustomer = info;
      state.customerSelected = true;
    },
    setPacientId (state,id) {
      // Vue.set(state, 'paciendId', id);
      state.paciendId = id
      if(id==0)
       state.pacientName = 'Johns Jacobs'
      if(id==1)
       state.pacientName = 'Sarah Jones'
      if(id==2)
       state.pacientName = 'Grace Paz'
      if(id==3)
       state.pacientName = 'Opal Lee'
    },
    setPacientName (state, name) {
      state.pacientName = name
      if(name=='Johns Jacobs')
        state.pacientId = 0;
      if(name=='Sarah Jones')
        state.pacientId = 1;
      if(name=='Grace Paz')
        state.pacientId = 2;
      if(name=='Opal Lee')
        state.pacientId = 3;
    },
    setTrips (state, _trips) {
      state.trips = _trips;
      let flightInfo = [];
      for(let i = 0; i < _trips.length; i++) {
        flightInfo = flightInfo.concat(_trips[i].TripDetail[0].FlightInfo);
      }
      state.flightInfo = flightInfo;
    },
    setContexts (state, _contexts) {
      state.contexts = _contexts;
    },
  },
  actions: {
    setContexts({commit, state}, contexts) {
      commit('setContexts', contexts);
    },
    setTrips({commit, state}, trips) {
      commit('setTrips', trips);
    },
    setCustomerInfo({commit, state}, customerInfo) {
      commit('setCustomerInfo', customerInfo);
    },
    setCallerProvider({commit, state}, callerInfo) {
      commit('setCallerProvider', callerInfo);
    },
    setCurrentPin({commit, state}, pinIndex) {
      commit('setCurrentPin', pinIndex);
    },
    setReferral({commit, state}, referrals) {
        commit('setReferralData', referrals);
        console.log(referrals);
    },
    setName({commit, state}, name) {
        commit('setPacientName', name);
        console.log('setName', name);
    },
    setId ({commit, state}, id) {
        commit('setPacientId', id)
        console.log('setPacientId', id);
    }
  }
})