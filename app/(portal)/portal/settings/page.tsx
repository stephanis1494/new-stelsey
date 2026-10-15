"use client"
import { RightSidebar } from "@/src/components/RightSidebar"
import { PortalNavigationSidebar } from "@/app/(portal)/portal/_components/PortalNavigationSidebar"

export default function Settings() {
  return (
    <div className="flex w-full flex-row">
      <PortalNavigationSidebar />
      <main className="flex grow flex-col pt-20">
        <span className="mb-4 text-2xl font-medium">Settings</span>
      </main>
      <RightSidebar />
    </div>
  )
}
