import { Attendance } from "../attendance/Attendance";
import { Department } from "../department/Department";
import { Role } from "../role/Role";

export type Employee = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  department?: Department | null;
  email: string | null;
  id: string;
  name: string | null;
  role?: Role | null;
  updatedAt: Date;
};
