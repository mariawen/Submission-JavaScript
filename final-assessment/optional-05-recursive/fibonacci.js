function fibonacci(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
  
    const series = fibonacci(n - 1);
    const nextValue = series[series.length - 1] + series[series.length - 2];
    series.push(nextValue);
    return series;
  }

// Jangan hapus kode di bawah ini!
export default fibonacci;
