function formatNumber(value: string): string {
    const number = parseInt(value.replace(/[^0-9]/g, ""));
    const scale = Math.floor(Math.log10(number) / 3);
    const roundedNumber = Math.round(number / Math.pow(1000, scale) * 10) / 10;
    const scaleSuffix = ['', ' thousand', ' million', ' billion', ' trillion'][scale];
    return `${roundedNumber.toLocaleString()}${scaleSuffix} people`;
  }
  
  console.log(formatNumber("212559409 people")); // saída: "212.6 million people"

  export default formatNumber