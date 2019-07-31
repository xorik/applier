const getNextId = (items: Array<{ id: number }>): number => {
  if (items.length === 0) {
    return 1
  }

  return Math.max(...items.map((v: { id: number }): number => v.id)) + 1
}

function findById<S extends { id: number }>(
  items: S[],
  id: number,
): S | undefined {
  return items.find((item: S): boolean => item.id === id)
}

export { getNextId, findById }
