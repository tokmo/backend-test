import { EmployeeCreateNestedManyWithoutRolesInput } from "./EmployeeCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  employees?: EmployeeCreateNestedManyWithoutRolesInput;
  title?: string | null;
};
