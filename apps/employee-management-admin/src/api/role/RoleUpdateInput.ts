import { EmployeeUpdateManyWithoutRolesInput } from "./EmployeeUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  employees?: EmployeeUpdateManyWithoutRolesInput;
  title?: string | null;
};
