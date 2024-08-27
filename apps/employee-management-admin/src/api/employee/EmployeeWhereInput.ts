import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeWhereInput = {
  attendances?: AttendanceListRelationFilter;
  department?: DepartmentWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
};
