export const kFormatter = (num: number) => {
    return num > 999 ? num % 1000 === 0 ? (num / 1000).toFixed(0) + 'k' : (num / 1000).toFixed(1) + 'k' : num
}