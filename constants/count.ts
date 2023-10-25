export const useCount = () => {
  const count = useState('count', () => Math.random()*1000)
  const add=() => {
    count.value++;
  }
  const dec = () => {
    count.value--;
  }
  return {
    count,
    add,
    dec
  }
}