import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

export default function PaginationDataTable({
    totalPages,
    currentPage,
    onChangePage
}: {
    totalPages: number
    currentPage: number
    onChangePage: (page: number) => void
}) {
    return (
        <Pagination className="justify-end">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={() => {
                        if (currentPage > 1) {
                            onChangePage(currentPage - 1)
                        } else {
                            onChangePage(totalPages);
                        }
                    }} />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, index) => {
                    const page = index + 1;
                    if (
                        page === 1 ||
                        page === totalPages ||
                        Math.abs(page - currentPage) <= 1
                    ) {
                        return (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    isActive={page === currentPage}
                                    onClick={() => {
                                        if (page !== currentPage) onChangePage(page)
                                    }}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        )
                    }

                    if (
                        (page === currentPage - 2 && page > 1) ||// jika page == currentPage -2 (kondisi ketika saya berada dihalaman 5 maka tampilkan 3 4 5 )
                        (page === currentPage + 2 && page < totalPages)
                    ) {
                        return (
                            <PaginationItem key={`ellipsis-${page}`}>
                                {/* ini untuk page yang .... misal 1 ... 10 */}
                                <PaginationEllipsis />
                            </PaginationItem>
                        )
                    }

                })}

                <PaginationItem>
                    <PaginationNext onClick={() => {
                        if (currentPage < totalPages) {
                            onChangePage(currentPage + 1)
                        } else {
                            onChangePage(1);
                        }
                    }} />
                </PaginationItem>
            </PaginationContent >

        </Pagination >
    )
}