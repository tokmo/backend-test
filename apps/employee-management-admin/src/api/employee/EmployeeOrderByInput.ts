import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  roleId?: SortOrder;
  updatedAt?: SortOrder;
};
