export async function fetchItems<T>(url: string): Promise<T[]> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch items from ${url}`)
  }
  return response.json()
}

export function validateEntity<T>(
  entity: T,
  validator: (entity: T) => boolean
): boolean {
  return validator(entity)
}
