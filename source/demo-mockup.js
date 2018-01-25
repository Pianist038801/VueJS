module.exports =
  {
    Patients: [
      {
        Name: 'John Jacobs',
        DateOfBirth: '1934-07-01 00:00:00',
        SSN: '***-**-6789',
        PhoneNumber: '+1 214 701 5489',
        PhotoUrl: '~img/user.png',
        PrimaryCareProvider: {
          Name: 'Rohit Potaraju, MD',
          Phone: '1 202 456 7890'
        },
        Address: {
          Line1: '3453 T Ave',
          Line2: 'Fort Worth, TX 76179, USA'
        },
        TreatmentTeam: [
          {
            Name: 'Betsy Nancy',
            PhoneNumber: '+1 214 211 2222'
          }
        ],
        Provider: [
          {
            Name: 'United Healthcare (UHC Parkway, GA,66552)',
            PhoneNumber: '+1 216 411 8765'
          }
        ], // should be same as MakeAppointmentDropDownOptions
        InsuranceVerification: {
          InsuranceName: 'John Jacobs',
          GroupNum: '#45ABC',
          NetworkNum: '#45ABC',
          PolicyNum: '#022141242',
          IssueDate: '20-Aug-2016 00:00:00'
        }, // In theory this should probably be part of Provider, but for the demo it's pulled out.
        Vitals: { // This is the data for page 4
          Height: 168, // centimeters
          Weight: 78, // kilograms
          RespirationRate: 58, // per minute
          BMI: 53.2,
          Pulse: 210, // per minute
          BloodPressureLo: 127,
          BloodPressureHi: 145
        },
        Physician: {
          Name: 'Rohit Potaraju, MD',// same as PCP
          Clinic: 'Clarit Clinic',
          Specialty: 'PCP',
          EmergencyPhone: '+1 800 111 2222',
          PrimaryPhone: '+1 212 234 5678'
        },
        Status: {
          Email: 'john.doe@gmail.com',
          Race: 'White',
          Ethnicity: 'Not Hispanic Or Latino',
          Religion: 'Christian (non-Catholic, non-Specific)',
          MaritalStatus: 'Married',
          EmergencyContact: {
            Relation: 'Wife',
            Name: 'Sarah Doe',
            Phone: '+1 214 701 5489'
          }
        },
        Location: {
          DropdownRecords: [
            {
              Name: 'Patient Geo Location',
              Address: '1272 Belt Line Rd, Garland TX 75040',
              Phone: '+1 972 495 1934',
              Hours: 'N / A',
              GoogleMapIMG: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Google_maps_screenshot.png/300px-Google_maps_screenshot.png' // Either a hard coded image in the page, or a URL to a static bucket with an image.
            },
            {
              Name: 'Pharmacies In Area',
              Address: '1272 Belt Line Rd, Garland TX 75040',
              Phone: '+1 972 495 1934',
              Hours: 'Open 10 AM to 6 PM',
              GoogleMapIMG: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Google_maps_screenshot.png/300px-Google_maps_screenshot.png' // Either a hard coded image in the page, or a URL to a static bucket with an image.
            },
            {
              Name: 'Hospitals In Area',
              Address: '1272 Belt Line Rd, Garland TX 75040',
              Phone: '+1 972 495 1934',
              Hours: 'Open 10 AM to 6 PM',
              GoogleMapIMG: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Google_maps_screenshot.png/300px-Google_maps_screenshot.png' // Either a hard coded image in the page, or a URL to a static bucket with an image.
            }
          ]
        },
        PastAppointments: [
          {
            Date: '9-20-2017 15:00:00',
            Time: '15:00:00',
            Department: 'SpinSci Clinic',
            Provider: 'Administrator',
            VisitType: 'Office Visit',
            VisitReason: 'No Comments'
          },
          {
            Date: '9-25-2017 14:30:00',
            Time: '15:00:00',
            Department: 'SpinSci Clinic',
            Provider: 'Administrator',
            VisitType: 'Office Visit',
            VisitReason: 'Knee Pain'
          }
        ]
      }, // End of Patient 0
      {
        Name: 'Jean Jacobs',
        DateOfBirth: '1975-02-22 00:00:00',
        SSN: '***-**-4567',
        PhoneNumber: '1 555 555 5555',
        PhotoUrl: '~img/user2.jpg',
        PrimaryCareProvider: {
          Name: 'Rohit Potaraju, MD',
          Phone: '1 555 555 5555'
        },
        Address: {
          Line1: '1212 Legacy Dr',
          Line2: 'Plano, TX 75075, USA'
        },
        TreatmentTeam: [
          {
            Name: 'David Steve',
            PhoneNumber: '+1 404 418 1212'
          }
        ],
        Provider: [
          {
            Name: 'United Healthcare (UHC Parkway, GA,66552)',
            PhoneNumber: '+1 216 411 8765'
          }
        ], // should be same as MakeAppointmentDropDownOptions
        InsuranceVerification: {
          InsuranceName: 'John Jacobs',
          GroupNum: '#555664422',
          NetworkNum: '#45ABC',
          PolicyNum: '#334422456',
          IssueDate: '20-Aug-2016 00:00:00'
        }, // In theory this should probably be part of Provider, but for the demo it's pulled out.
        Vitals: { // This is the data for page 4
          Height: 150, // centimeters
          Weight: 73, // kilograms
          RespirationRate: 53, // per minute
          BMI: 58.9,
          Pulse: 175, // per minute
          BloodPressureLo: 130,
          BloodPressureHi: 148
        },
        Physician: {
          Name: 'Rohit Potaraju, MD',// same as PCP
          Clinic: 'Clarit Clinic',
          Specialty: 'PCP',
          EmergencyPhone: '+1 800 111 2222',
          PrimaryPhone: '+1 212 234 5678'
        },
        Status: {
          Email: 'salsa.dancer.87@aol.com',
          Race: 'Declined to Specify',
          Ethnicity: 'Declined to Specify',
          Religion: 'Cyberculture Religions',
          MaritalStatus: 'Married',
          EmergencyContact: {
            Relation: 'Friend',
            Name: 'Mr Nobody',
            Phone: '+1 215 882 1126'
          }
        },
        Location: {
          DropdownRecords: [
            {
              Name: 'Patient Geo Location',
              Address: '1272 Belt Line Rd, Garland TX 75040',
              Phone: '+1 972 495 1934',
              Hours: 'N / A',
              GoogleMapIMG: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Google_maps_screenshot.png/300px-Google_maps_screenshot.png' // Either a hard coded image in the page, or a URL to a static bucket with an image.
            },
            {
              Name: 'Pharmacies In Area',
              Address: '1272 Belt Line Rd, Garland TX 75040',
              Phone: '+1 972 495 1934',
              Hours: 'Open 10 AM to 6 PM',
              GoogleMapIMG: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Google_maps_screenshot.png/300px-Google_maps_screenshot.png' // Either a hard coded image in the page, or a URL to a static bucket with an image.
            },
            {
              Name: 'Hospitals In Area',
              Address: '1272 Belt Line Rd, Garland TX 75040',
              Phone: '+1 972 495 1934',
              Hours: 'Open 10 AM to 6 PM',
              GoogleMapIMG: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Google_maps_screenshot.png/300px-Google_maps_screenshot.png' // Either a hard coded image in the page, or a URL to a static bucket with an image.
            }
          ]
        },
        PastAppointments: [
          {
            Date: '9-20-2015 15:00:00',
            Time: '12:00:00',
            Department: 'SpinSci Clinic',
            Provider: 'Administrator',
            VisitType: 'Office Visit',
            VisitReason: 'New Patient'
          },
          {
            Date: '8-25-2017 14:30:00',
            Time: '15:00:00',
            Department: 'SpinSci Clinic',
            Provider: 'Administrator',
            VisitType: 'Office Visit',
            VisitReason: 'Perscription Clarification'
          }
        ]
      } // End of Patient 1
    ],

    MakeAppointmentDropDownOptions: {
      Department: [
        'Select Department...',
        'Emergency',
        'Outpatient',
        'Radiology',
        'General'
      ],
      Facility: [
        'Select Facility...',
        'Clarit',
        'Imaging Center'
      ],
      Provider: [
        'Select Provider...',
        'SpinSci',
        'Administrator'
      ],
      Physician: [
        'Select Physician...',
        'Dr. John',
        'Dr. Steve',
        'Dr. Phil'
      ] // DateRange is a date picker, it's selection needs to populate the text field below it with the day of week and date. Ideally it will also prevent selecting past dates.
    },

    ExistingAppointmentSlots: [ // Sort by Start Time. All durations should be half hour. So a new slot on the half hour, every half hour.
      { // row 0
        StartTime: '1-Jan-1980 08:00:00', // Time Only
        EndTime: '1-Jan-1980 08:30:00', // Time Only
        Name: 'Open Schedule',
        IsOpen: true,  // Theoretically tells the action button if it should be 'book now' or 'update'. Hard Code  button array or dynamically set from JSON as per whichever is easier.
        Facility: '---',
        Provider: '---',
        Physician: '---',
        Status: 'Available' // As 'IsOpen' is true.
      },
      { // row 1
        StartTime: '1-Jan-1980 08:30:00', // Time Only
        EndTime: '1-Jan-1980 09:00:00', // Time Only
        Name: 'Open Schedule',
        IsOpen: true,
        Facility: '---',
        Provider: '---',
        Physician: '---',
        Status: 'Available' // As 'IsOpen' is true.
      },
      { // row 2
        StartTime: '1-Jan-1980 09:00:00', // Time Only
        EndTime: '1-Jan-1980 09:30:00', // Time Only
        Name: 'Open Schedule',
        IsOpen: true,
        Facility: '---',
        Provider: '---',
        Physician: '---',
        Status: 'Available' // As 'IsOpen' is true.
      },
      { // row 3
        StartTime: '1-Jan-1980 09:30:00', // Time Only
        EndTime: '1-Jan-1980 10:00:00', // Time Only
        Name: 'Jean Jacobs',
        IsOpen: false,
        Facility: 'SpinSci Clinic',
        Provider: 'Administrator',
        Physician: '---',
        Status: 'On Hold'
      },
      { // row 4
        StartTime: '1-Jan-1980 10:00:00', // Time Only
        EndTime: '1-Jan-1980 10:30:00', // Time Only
        Name: 'Open Schedule',
        IsOpen: true,
        Facility: '---',
        Provider: '---',
        Physician: '---',
        Status: 'Available' // As 'IsOpen' is true.
      },
      { // row 5
        StartTime: '1-Jan-1980 10:30:00', // Time Only
        EndTime: '1-Jan-1980 11:00:00', // Time Only
        Name: 'Open Schedule',
        IsOpen: true,
        Facility: '---',
        Provider: '---',
        Physician: '---',
        Status: 'Available' // As 'IsOpen' is true.
      },
      { // row 6
        StartTime: '1-Jan-1980 11:00:00', // Time Only
        EndTime: '1-Jan-1980 11:30:00', // Time Only
        Name: 'Open Schedule',
        IsOpen: true,
        Facility: '---',
        Provider: '---',
        Physician: '---',
        Status: 'Available' // As 'IsOpen' is true.
      },
      { // row 7
        StartTime: '1-Jan-1980 11:30:00', // Time Only
        EndTime: '1-Jan-1980 12:00:00', // Time Only
        Name: 'Open Schedule',
        IsOpen: true,
        Facility: '---',
        Provider: '---',
        Physician: '---',
        Status: 'Available' // As 'IsOpen' is true.
      },
      { // row 8
        StartTime: '1-Jan-1980 12:00:00', // Time Only
        EndTime: '1-Jan-1980 12:30:00', // Time Only
        Name: 'Thomas Smith',
        IsOpen: false,
        Facility: 'SpinSci Clinic',
        Provider: 'Administrator',
        Physician: '---',
        Status: 'On Hold'
      }
      // The onClick of the 'Book Now' button ideally passes the row object and the dropdown selectors settings to the Book Now dialog screen.
    ],

    NewAppointment: { // row 4 replacement
      StartTime: '1-Jan-1980 10:00:00', // Time Only
      EndTime: '1-Jan-1980 10:30:00', // Time Only
      Name: 'John Jacobs',
      IsOpen: false,
      Facility: 'SpinSci Clinic',
      Provider: 'United Healthcare(UHC Parkway, GA,66552)',
      Physician: 'Rohit Potaraju, MD',
      Status: 'On Hold'
    },

    BookNowData: {
      InterpreterLanguages: [
        'Spanish',
        'French',
        'Mandarin'
      ],
      // Bonus Points, set a regex to replace the bracket text with matching data elements automagically. Eg 'string.replace ( '[DRNAME]' , ApptDropDown.Physician.selected )' or similar.
      GoogleMapIMG: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Google_maps_screenshot.png/300px-Google_maps_screenshot.png', // Either a hard coded image in the page, or a URL to a static bucket with an image.

      SmsConfirmTemplate:
        "Dear [PATIENTNAME] , we have scheduled an appointment with you for [APPTDATE] at [FACILITY]. Regards, [DRNAME]",
      EmailConfirmTemplate:
        'Dear [PATIENTNAME]: This letter is to confirm your appointment at [APPTDATE]. Please plan to arrive approximately 30 minutes prior to your scheduled appointment to allow time for you and your significant other to sign consent forms that are required for your treatment. It is important that your significant other is able to accompany you to your appointments as much as possible. With the type of care we provide, we may be unable to schedule/perform certain procedures without their signature.\n\nPlease complete the following informational forms and return to our office prior to your appointment.\n+ Patient Information Page \n+ Medical History Form\nThis will enable us to thoroughly review your medical background and provide you with the best possible care. If you have been seen by another physician, please request that your medical records be forwarded to our office prior to your appointment, as well. \n\nIn an effort to be HIPAA compliant and to protect your private health information and identity, we require that you bring your photo I.D. and insurance card to your first visit.\n\nAs a courtesy to you we will submit your insurance claims for you; however any copayments will be collected at time of service. For any non insured patients, fees for all office visits and related charges are payable at the time of service. \n\nMy staff and I appreciate your selecting our office for your health care. We recognize the trust and responsibility placed in us and we will do everything possible to provide for those needs. \n\nWe look forward to seeing you!\nSincerely,\n[DRNAME]'
    }
  };
