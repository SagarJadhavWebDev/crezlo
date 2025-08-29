interface TableProps<T> {
    columns: any;
}
declare function Table<T extends {
    id: string | number;
}>({}: TableProps<T>): void;
export default Table;
