/*
    forEach, map, sort, filter, reduce
    push, pop, unshift, shit, concat, slice, splice, indexOf, lastIndexOf, 
    includes, find, findIndex, reverse, split, join, isArray, some, fill,
    every, toString
*/
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  const numbers = [10,10,20,30,55,44,55,22,20,10,40,30];
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
   for(i=0;i<companies.length;i++){
       console.log(companies[i])
   }
  //forEach
  companies.forEach(function(company,index,companies){
      console.log(company);
  })
  //filter
  //let canDrink =[];
//   const canDrink = ages.filter(function(age,index,ages){
//       if(age >= 21){
//           return true;
//       }
//   })
  const canDrink = ages.filter(age => age >= 21);
//   for(i=0;i< ages.length;i++){
//       if(ages[i]>= 21){
//       canDrink.push(ages[i]);
//     }
//   }
const retailCompany = companies.filter(company => company.category === 'Retail');
const eightiesCompany = companies.filter(company => (company.start >= 1980 && company.start < 1990 ))
const lastedTenYears = companies.filter(company => (company.end - company.start >10));  
console.log(canDrink);
  console.log(retailCompany);
  console.log(eightiesCompany);
  console.log(lastedTenYears);
  //map

  const newCompanies = companies.map((company,index)=> {
        console.log(company)
  })
  const newCompanies1 = companies.map(function(company) {
        return(company.name);
  });
  console.log(newCompanies1);

  const agesSquare = ages.map(age => Math.sqrt(age));

  console.log(agesSquare);
  const agesTimesTwo = ages.map(age => age * 2);

  console.log(agesTimesTwo);
  //sort
const sortedCompanies = companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
})
console.log(sortedCompanies);

const sortedCompanies2= companies.sort((a,b)=> (a.start > b.start ? 1 : -1));

console.log(sortedCompanies2);

const agesSort = ages.sort((a,b) => a - b);
console.log(agesSort);
  //reduce
const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);

const totalYears = companies.reduce((total, company)=> total + (company.end - company.start),0);

console.log(totalYears);

const combined = ages
                    .map( age => age *2)
                    .filter(age => age >= 40)
                    .sort((a,b) => a- b)
                    //.reduce((a,b) => a + b , 0)
console.log(combined);

// Function to Calculate Min value from array...
const minAgeCalculation = (ages)=>{
    let minAge = ages[0];
    for(i=0;i<ages.length;i++){
        if(minAge > ages[i]){
            minAge = ages[i];
        }
    }
    return minAge;
}
// Function to Calculate Max value from array...
const maxAgeCalculation = (ages) =>{
    let maxAge = ages[0];
    for(i=0;i<ages.length;i++){
        if(maxAge < ages[i]){
            maxAge = ages[i];
        }
    }
    return maxAge;
}
// Function to Calculate Sum/Total value from array...
const  sumAgeCalculation= (ages)=>{
    let sum =0 ;
    for(i=0;i<ages.length;i++){
        sum+=ages[i];
    }
    return sum;
}
console.log(minAgeCalculation(ages));
console.log(maxAgeCalculation(ages));
console.log(sumAgeCalculation(ages));
const uniqueNumbers = numbers.filter((number,index,arr)=>{
    return arr.indexOf(number) === index;
});
function displayUniqueNumbers(numbers){
        // Empty array to push all unique values without
        // Changing original numbers array.
        
        var outputArray = []; 
        // Count variable is used to add the 
        // new unique value only once in the 
        // outputArray. 

        var count = 0; 
        // Start variable is used to set true 
        // if a repeated duplicate value is  
        // encontered in the output array. 

        var start = false; 
          
        for (j = 0; j < numbers.length; j++) { 
            for (k = 0; k < outputArray.length; k++) { 
                if ( numbers[j] == outputArray[k] ) { 
                    start = true; 
                } 
            } 
            count++; 
            if (count == 1 && start == false) { 
                outputArray.push(numbers[j]); 
            }
            start = false; 
            count = 0; 
        }
        return outputArray; 
}
function sortArrayByAscending(numbers){
    for (var i = 0; i < numbers.length; i++) {
        var target = numbers[i];
        for (var j = i - 1; j >= 0 && (numbers[j] > target); j--) {
            numbers[j+1] = numbers[j];
        }
        numbers[j+1] = target
    }
    return numbers;
}
function sortArrayByDescending(numbers){
    for (var i = 0; i < numbers.length; i++) {
        var target = numbers[i];
        for (var j = i - 1; j >= 0 && (numbers[j] < target); j--) {
            numbers[j+1] = numbers[j];
        }
        numbers[j+1] = target
    }
    return numbers;
}
console.log(uniqueNumbers);
console.log(displayUniqueNumbers(numbers));
console.log(sortArrayByAscending(numbers));
console.log(sortArrayByDescending(numbers));