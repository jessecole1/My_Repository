



    
const getSections = (string) => {
    let strings = string.split(" ");
        if (strings.length === 0) {
          return [];
        }
        return Object.values(
          strings.reduce((acc, word) => {
            let firstLetter = word[0].toLocaleUpperCase();
            if (!acc[firstLetter]) {
              acc[firstLetter] = { title: firstLetter, data: [word] };
            } else {
              acc[firstLetter].data.push(word);
            }
            return acc;
          }, {})
          );
}
console.log(getSections(""));
