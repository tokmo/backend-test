import { Role as TRole } from "../api/role/Role";

export const ROLE_TITLE_FIELD = "title";

export const RoleTitle = (record: TRole): string => {
  return record.title?.toString() || String(record.id);
};
