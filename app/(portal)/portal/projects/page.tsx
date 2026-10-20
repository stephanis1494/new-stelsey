"use client"
import { useCustomerProjectListQuery } from "@/src/store/api.generated"
import { formatDate } from "@/src/utils/formatDate"

export default function PortalProjects() {
  const { data: projects } = useCustomerProjectListQuery()

  return (
    <section className="flex flex-col">
      <h1 className="mb-4 text-2xl font-medium">Projects</h1>
      <div className="flex flex-row flex-wrap gap-2">
        {(projects || []).map(({ id, name, status, createdAt }) => (
          <div
            key={`project-name-${id}-container`}
            className="flex h-60 w-full max-w-120 flex-col items-center justify-center gap-2 rounded-lg border border-white/16 bg-forest p-4"
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
              <span className="text-xl">{formatDate(createdAt)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
