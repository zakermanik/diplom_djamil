import type { AdressForm, BloodOrgans, Diagnos, DigestiveSystem, Efficiency, FinalStats, GeneralInfo, InfoCaller, InitialStats, Manipulations, ObjectiveData, PatientInformation, PollResults, Result, TimeForm, UsedFunds } from '@/entities/incidents_form_110/types'

export interface Form110 {
  general_information: GeneralInfo
  time_form: TimeForm
  adress_form: AdressForm
  patient_info: PatientInformation
  caller_info: InfoCaller
  poll_results: PollResults
  objective_data: ObjectiveData
  blood_organs: BloodOrgans
  digestive_data: DigestiveSystem
  initial_stats: InitialStats
  final_stats: FinalStats
  result: Result
  diagnos: Diagnos
  used_funds: UsedFunds
  manipulations: Manipulations
  efficiency: Efficiency
}
