const formatNumber = (number: number) =>
  `${number < 10 ? 0 : ''}${number}`.slice(-2)

export default formatNumber
