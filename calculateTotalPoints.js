const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(...styleNotes);

  const total = Math.round((distancePoints + stylePoints + windFactor + (gateFactor || 0)) * 100) / 100;
  return total;
}

module.exports = calculateTotalPoints;