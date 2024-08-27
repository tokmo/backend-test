import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type AttendanceUpdateInput = {
  date?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
  status?: "Option1" | null;
};
