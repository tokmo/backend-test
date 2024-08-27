import { EmployeeCreateNestedManyWithoutDepartmentsInput } from "./EmployeeCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  employees?: EmployeeCreateNestedManyWithoutDepartmentsInput;
  name?: string | null;
};
