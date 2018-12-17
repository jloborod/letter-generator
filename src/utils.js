export function propsCompleted() {
  return Object.values(arguments).every(propValue => propValue !== undefined)
}