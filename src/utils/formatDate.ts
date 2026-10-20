const dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" })

// Accepts the API's ISO timestamps; the generated types mark them optional.
export const formatDate = (iso?: string) =>
  iso ? dateFormatter.format(new Date(iso)) : ""
