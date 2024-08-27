import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type AttendanceCreateInput = {
  date?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
  status?: "Option1" | null;
};
