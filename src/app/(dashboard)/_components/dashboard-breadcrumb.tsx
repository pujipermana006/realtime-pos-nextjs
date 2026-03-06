"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation"
import { Fragment } from "react/jsx-runtime";

export default function DashboardBreadcrumb() {

    const pathname = usePathname();
    const paths = pathname.split('/').slice(1)

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {paths.map((path, index) => (
                    <Fragment key={`path-${path}`}>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                href={`/${paths.slice(0, index + 1).join('/')}`}
                                className="capitalize"
                            >
                                {path}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}