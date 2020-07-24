var journal = [];

/*addRecord*/ 


// add a record to the journal array defined above
// notice i just specified a property name instead of declearing one as in {events : events} in the object parsed to push method, this is because, i want the property name to have the same name as the binding, automatically the  property name is derived from the binding with the same name;

function addRecord(events, werewolf) {
 
  journal.push({events, werewolf});
}


/*addRecord*/ 



/*phi*/ 


// using the concept of CORRELATION in mathematice(statistics) between variables, i can compute the measure of the correlation of boolean value (value of werewolf when pizza is included in the event) using the phi coefficient (this is a formular whose input is a frequency table containing the number of times the different combinations of the variables were observed, its output is a number between -1 and 1 denoting the correlation)

// taking frequency of transformation(variable 1) with respect to the event of eating pizza(variable 2) and using this frequency as the input of our phi coefficient. NB. using the JOURNAL array in journal.js as the test date

// n00 = number of times there was no transformation and pizza was not eaten = 11
// n01 = number of times there was no transformation but pizza was eaten = 0 
// n10 = number of times there was transformation pizza but was not eaten = 0
// n11 = number of times there was a transformation and pizza was eaten = 3
// n1. = number of times transformation occured(true) = 3
// n0. = number of times transformation did not occured(false) = 11
// n.1 = number of times pizza was eaten(true) = 3
// n.0 = number of times pizza was not eaten(false) = 11

// phi coefficient = ((n11n00) - (n10n01))/sqrt(n1. n0. n.1 n.0)

// We can represent a two-by-two table in JavaScript with a four-element array ([11, 0, 0, 3]) which corrresponds to ([n00, n01, n10, n11])

// translation the phi coeffient into a javascript function below
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

// console.log(phi([11, 0, 0, 3]));


/*phi*/ 



/*tableFor*/ 


// looping over all the records and tally how many times the pizza was eaten in relation to warewolf transformations. This will enable us to extract a two-by-two table for a specific record from the journal

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let record = journal[i], index = 0;
    if (record.events.includes(event)) index += 1;
    if (record.werewolf) index += 2;
    table[index] += 1;
  }
  return table;
}

// console.log(tableFor("pizza", JOURNAL));
// → [11, 0, 0, 3]


/*tableFor*/ 



/*journalEvents*/ 


// NB: where the below syntax of the for loop is used, with the word "of" after a variable definition,it will loop over the elements of the value given after "of", in this case "journal" is stated after "of" which is an array, therefore there will be a loop over the elements of "journal"

// for (let record of journal) {
//      console.log(`${entry.events.length} events.`);
// }


// going over all the events and adding those that aren’t already in there to the events array, the function collects every type of event. Using that, we can see all the correlations 

function journalEvents(journal) {
  let events = [];
  for (let record of journal) {
    for (let event of record.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}


/*journalEvents*/ 