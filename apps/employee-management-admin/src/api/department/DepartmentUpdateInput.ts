import { EmployeeUpdateManyWithoutDepartmentsInput } from "./EmployeeUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  employees?: EmployeeUpdateManyWithoutDepartmentsInput;
  name?: string | null;
};
