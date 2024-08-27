import { Employee } from "../employee/Employee";

export type Department = {
  createdAt: Date;
  employees?: Array<Employee>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
