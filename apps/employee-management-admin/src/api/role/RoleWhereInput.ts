import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoleWhereInput = {
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
