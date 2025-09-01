interface TableProps<T> {
    columns
}
function Table<T extends { id: string | number }>({}: TableProps<T>) {

}
export default Table;
