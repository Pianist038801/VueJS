export const STATES = {
  NEW: 1,
  CLOSED: 7,
  FOLLOWUP: 3,
  KICKOFF: 4,
}
export const COLUMNS = [
  'sys_id',
  'number',
  'state',
  'caller_id',
  'u_hospital',
  'u_workgroup',
  'u_team',
  'u_nurse_name',
  'u_phone_number',
  'u_patient_last_name',
  'u_bed_number',
  'problem_id',
  'u_urgent',
  'u_notes',
  'assigned_to',
];

class Incident {
  constructor({
    'sys_id': id,
    'number': number,
    'state': state,
    'caller_id': {
      value: callerId
    } = {},
    'u_hospital': hospital,
    'u_workgroup': workgroup,
    'u_team': team,
    'u_nurse_name': nurseName,
    'u_phone_number': phoneNumber,
    'u_patient_last_name': patientLastName,
    'u_bed_number': bedNumber,
    'u_problem': {
      value: problemId
    } = {},
    'u_urgent': urgent,
    'u_notes': notes,
    'assigned_to': assignedTo,
  }) {
    this.id = id;
    this.number = number;
    this.state = state;
    this.callerId = callerId;
    this.hospital = hospital;
    this.workgroup = workgroup;
    this.team = team;
    this.nurseName = nurseName;
    this.phoneNumber = phoneNumber;
    this.patientLastName = patientLastName;
    this.bedNumber = bedNumber;
    this.problemId = problemId;
    this.urgent = urgent;
    this.notes = notes;
    this.assignedTo = assignedTo;
  }
}
export const mapper = items => (
  items.map(item => (new Incident(item)))
);

export default Incident;