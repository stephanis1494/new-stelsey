"use client"
import { RightSidebar } from "@/src/components/RightSidebar"
import { useCustomerProjectListQuery } from "@/src/store/api.generated"
import { PortalNavigationSidebar } from "@/app/(portal)/portal/_components/PortalNavigationSidebar"

export default function Portal() {
  const { data: projects, isLoading, error } = useCustomerProjectListQuery()
  return (
    <div className="flex w-full flex-row">
      <PortalNavigationSidebar />
      <main className="flex grow flex-col pt-20">
        <span className="mb-4 text-2xl font-medium">Projects</span>
        <div className="flex flex-row flex-wrap gap-2">
          {(projects || []).map((project) => {
            const { name, status, createdAt, id } = project
            return (
              <div
                key={`project-name-${id}-container`}
                className="flex h-60 w-120 flex-col items-center justify-center gap-2 rounded-lg border border-white/16 bg-forest p-4"
              >
                <div className="flex flex-row items-center gap-2">
                  <span className="text-xl font-bold">Project Name:</span>
                  <span className="text-xl">{name}</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-xl font-bold">Status:</span>
                  <span className="text-xl">{status}</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-xl font-bold">Start Date:</span>
                  <span className="text-xl">
                    {new Date(createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}
