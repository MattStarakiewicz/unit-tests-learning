const calculateDistancePoints = (distance, hillSize, kPoint) => {

    const roundDistance = Math.round(distance / 0.5) * 0.5;
 
       if (hillSize > 185 && roundDistance >= kPoint) {
         const sumDistancePoints = 120 + ((roundDistance - kPoint)*1.2);
         return sumDistancePoints;
       } else if (hillSize > 185 && roundDistance <= kPoint) {
         const sumDistancePoints = 120 - ((kPoint - roundDistance)*1.2);
         return sumDistancePoints;
       } else if (hillSize <= 184 && hillSize > 109 && roundDistance >= kPoint) {
         const sumDistancePoints = 60 + ((roundDistance - kPoint)*1.8);
         return sumDistancePoints;
       } else if (hillSize <= 184 && hillSize > 109 && roundDistance <= kPoint) {
         const sumDistancePoints = 60 - ((kPoint - roundDistance)*1.8);
         return sumDistancePoints;
       } else if (hillSize <= 109 && roundDistance >= kPoint) {
        const sumDistancePoints = 60 + ((roundDistance - kPoint)*2);
        return sumDistancePoints;
       } else if (hillSize <= 109 && roundDistance <= kPoint) {
        const sumDistancePoints = 60 - ((kPoint - roundDistance)*2);
        return sumDistancePoints;
       } 
    
}

module.exports = calculateDistancePoints;