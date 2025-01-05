export interface IPagination {
  pageLimit: number,
  currentPage : number | null,
  totalPage ?: number
  totalRows ?: number
}