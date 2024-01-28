class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    calculateAverage() {
      const sum = this.data.reduce((acc, val) => acc + val, 0);
      return sum / this.data.length;
    }
  
    findMiddleValue() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
      return sortedData.length % 2 === 0 ?
        (sortedData[middle - 1] + sortedData[middle]) / 2 :
        sortedData[middle];
    }
  
    findMostFrequent() {
      const frequencyMap = {};
      this.data.forEach(value => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
      });
  
      let modes = [];
      let maxFrequency = 0;
      for (const value in frequencyMap) {
        if (frequencyMap[value] > maxFrequency) {
          modes = [value];
          maxFrequency = frequencyMap[value];
        } else if (frequencyMap[value] === maxFrequency) {
          modes.push(value);
        }
      }
  
      return modes.map(mode => parseFloat(mode));
    }
  }
  
  const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const stats = new Statistics(data);
  
  console.log("Average:", stats.calculateAverage());
  console.log("Middle Value:", stats.findMiddleValue());
  console.log("Most Frequent:", stats.findMostFrequent());