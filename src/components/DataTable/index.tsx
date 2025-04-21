import { DataTableProps } from '@/components/DataTable/DataTable.types';

export const DataTable = ({ children }: DataTableProps) => {
  return (
    <div>
      DataTable
      {children}
    </div>
  );
};
