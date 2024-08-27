import { AttendanceUpdateManyWithoutEmployeesInput } from "./AttendanceUpdateManyWithoutEmployeesInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutEmployeesInput;
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  role?: RoleWhereUniqueInput | null;
};
