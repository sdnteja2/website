export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('id', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
