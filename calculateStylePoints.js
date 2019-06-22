const calculateStylePoints = (...styleNotes) => {
    
    const styleTab = [...styleNotes];
    const highestNote = parseFloat(Math.max(...styleNotes));
    const lowestNote = parseFloat(Math.min(...styleNotes));

    const sum = () => {
        let result = 0;
        for (let i=0; i < styleTab.length; i++) {
            result += parseFloat(styleTab[i]);
        }
        return result;
    };

    if (styleTab.length < 4) {
        const sumStyleNote = sum()
        return sumStyleNote;
    } else {
        const sumStyleNote = sum() - highestNote - lowestNote;
        return sumStyleNote;
    }
  };
  
  module.exports = calculateStylePoints;

  