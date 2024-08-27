import { Employee } from "../employee/Employee";

export type Role = {
  createdAt: Date;
  employees?: Array<Employee>;
  id: string;
  title: string | null;
  updatedAt: Date;
};
