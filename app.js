// WHITE BOARDS!

// EASY ONES -----------------------------------------------
// TODO Reverse String
// input- any string
// output- string reversed
function reverseString(str) {
  let strReverse = str.split('').reverse().join('')
  return console.log("Reverse String 1:", strReverse)
}


function reverseString2(str) {
  let strReverse = ''
  for (let i = str.length - 1; i > 0; i--) {
    let char = str[i]
    strReverse += char
  }
  return console.log("ReverseString 2: ", strReverse)
}

// TODO Capitalize Letters
// Given a word and a capital letter replace all lowercase instances of the letter with uppercase instances
// input- bananas, N => baNaNas
function capitalizeLetters(word, char) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == char.toLower()) {
      word[i] = char
    }
  }
  return word
}


// TODO add all numbers in array
// input [1,4,5,10]
// output 20
function addNumbers(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return console.log("Add all Numbers in Array ", sum)
}

// TODO Spare Change
// given a products price and and array of coins (nickels, dimes, quarters), determine if there is enough money to buy the product, return appropriate bool
// input - 4.50, [5,10,7]
// output - 

function spareChange(price, coins) {
  let money = 0
  money += coins[0] * .05
  money += coins[1] * .10
  money += coins[3] * .25
  return console.log("spareChange result ", money >= price)
}

// REVIEW Split a number
// Given a number return it split in two
// input 6 => [3,3]
// input 7 => [3,4]

function evenSplit(num) {
  if (num % 2 == 0) {
    return [num / 2, num / 2]
  } else {
    return [(num - 1) / 2, (num + 1) / 2]
  }
}
// one line solution
// return [Math.floor(num/2), Math.ceil(num/2)]


// MEDIUM ONES -------------------------------------------
// REVIEW Capitalize name
// Given a first and last name return them Capitalized
// input - "mick shannahan" => "Mick Shannahan"
function capitalizeName(str) {
  let firstName = str.split(" ")[0]
  let lastName = str.split(" ")[1]
  firstName.splice(0, 1, firstName[0].toUpper())
  lastName.splice(0, 1, lastName[0].toUpper())
  return firstName + " " + lastName
}


// REVIEW AnnaGrams
// given two words return true if they are annagrams of eachother
// input - slime, limes => true
// banana - banned = > false

function annagrams(str1, str2) {
  let arr1 = str1.split('')
  let arr2 = str2.split('')
  for (let i = 0; i < arr1.length; i++) {
    let char1 = arr1[i]
    for (let j = 0; j < arr2.lenght; j++) {
      let char2 = arr2[j]
      if (char1 == char2) {
        // Probably will need help with break condition
        break;
      }
      return console.log("annagrams result", false)
    }
    return console.log("anangrams result", true)
  }
}


// REVIEW how many iterations (is meh)
// given and array of 3 numbers add them together until you reach 100 or greater, return how many full itterations of the array it took to reach 100
// input - [10,15,25]
// output - 2

function itterations(arr) {
  let sum = 0
  let loops = 0
  debugger
  for (let i = 0; sum < 100; i++) {
    if (i == arr.length) {
      i = 0
      loops++
    }
    sum += arr[i]
  }
  return console.log("How many Itterations result ", loops)
}

// REVIEW  IS SPY
// Given a name, determine if that name contains the work spy (in any order) and return the appropriate bool
// input - 'Kipriyanov Stepanovich' => true
// input - 'Yaromeyeva Yurievpa' => false

function isSpyEasy(str) {
  let person = str.toLowerCase()
  let s = false
  let p = false
  let y = false
  for (let i = 0; i < person.length; i++) {
    let char = person[i]
    if (char = "s") {
      s = true
    } else if (char = "p") {
      p = true
    } else if (char = 'y') {
      y = true
    }
    return console.log("Is Spy Easy Result", (s && p && y))
  }
}

// REVIEW Wizard Fight WIP
// Given and array of numbers (representing wizards), and a complicated set of rules, return the number of the winning wizard
// rules, Highest number wins unless evenly divisible by lower number
// input - [7,14,2,8,9] => 7 beats 14, 2 beats 7, 8 beats 2, 8 beats 9 => 8 wins
function wizardFight(wizards) {
  let w = wizards[0]
  for (let i = 1; i < wizards.length; i++) {
    wizards[i] > w ? 
  }
}


// MEDIUM HARD -------------------------------------------
// NOTE Bang
// input ".........Bang", ".......Bang"
// output "cowboy 2 shot first"
function noonDraw(str1, str2) {
  let long = str1
  let short = str2
  str1.length > str2.length ? true : short = str1, long = str2
  for (let i = 0; i < long.length; i++) {
    if (long[i] != short[i]) {
      if (long[i] == 'B') {
        return console.log("Bang Result ", "cowboy 1 shot first")
      }
      return console.log("Bang Result ", "cowboy 2 shot first")

    }
  }
  return console.log("Bang Result ", "both cowboys shot at the same time, they both dead")
}
// NOTE IS spy
// given a array of names (strings), return an array of boolean values if they are a spy (contains the word "spy" in any order)
// input - ['Reznikov Vissarion', 'Vlad Sepgeyevna', 'Yaromeyeva Yurievpa', 'Kipriyanov Stepanovich' ]
// output - [false, true, false, true]
// best explained in russian accent

function isSpy(arr) {
  let spys = []
  for (let i = 0; i < arr.length; i++) {
    let person = arr[i].toLowerCase()
    let s = person.includes('s')
    let p = person.includes('p')
    let y = person.includes('y')
    spys.push(s && p && y)
  }
  return console.log("Is Spy Result", spys)
}

// NOTE RADAR
// Input [[0,0,0,0],  ----[[0,0,0,0],[0,0,0,0],[0,0,1,0],[0,0,0,0]]
//        [0,0,0,0], 
//        [0,0,1,0], 
//        [0,0,0,0]]
// output 'B2' OR '2-2'  (non 0 index "C3" OR 3-3)
function radarScanNum(arr) {
  for (let r = 0; r < arr.length; r++) {
    let row = arr[r]
    for (let c = 0; c < row.length; c++) {
      let col = row[c]
      if (col == 1) {
        return console.log("Radar Results", row + '-' + col)
      }
    }
  }
  return console.log("Radar Results", "no enemies on radar")
}

function radarScanChar(arr) {
  let chars = ["A", "B", "C", "D"]
  for (let r = 0; r < arr.length; r++) {
    let row = arr[r]
    for (let c = 0; c < row.length; c++) {
      let col = row[c]
      if (col == 1) {
        return console.log("Radar Results", chars[row] + col)
      }
    }
  }
  return console.log("Radar Results", "no enemies on radar")
}

// extend return ALL enemies
function radarScanNumAll(arr) {
  let enemies = {}
  for (let r = 0; r < arr.length; r++) {
    let row = arr[r]
    for (let c = 0; c < row.length; c++) {
      let col = row[c]
      if (col == 1) {
        enemies[col] = row
      }
    }
  }
  return console.log("Radar All Enemies Result ", enemies)
}

// NOTE Range Sum
// given a array of numbers, determine if any TWO numbers added together equal any other number
// input [1,5,16,9,7] => true, 7 + 9 = 16
function rangeSum(arr) {
  let max = arr.sort((a, b) => a - b)[arr.length - 1]
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i]
    for (let j = 0; j < arr.length; j++) {
      let num2 = arr[j]
      if (num1 + num2 == max) {
        return true
      }
    }
  }
  return false
}



// HARD ONES ---------------------------------------------------

// FIXME IS Spy NO (INCLUDES) METHOD
function isSpyNoIncludes(arr) {
  let spys = {}
  for (let i = 0; i < arr.length; i++) {
    let person = arr[i].toLowerCase().split(' ').join('')
    let traitor = { s: false, p: false, y: false }
    for (let j = 0; j < person.length; j++) {
      let char = person[j]
      switch (char) {
        case 's':
        case 'p':
        case 'y':
          traitor[char] = true
          break;
      }
    }
    spys[person] = (traitor.s && traitor.p && traitor.y)
  }
  return console.log("Is Spy no Includes Result", spys)
}



// REALLY HARD ONES
// STUB Radar HARD same problem but only one intteration
// Input [[0,0,0,0],  ----[[0,0,0,0],[0,0,0,0],[0,0,1,0],[0,0,0,0]]
//        [0,0,0,0], 
//        [0,0,1,0], 
//        [0,0,0,0]]
// output - F1

function radarScanHard(grid, ping) {
  // unused but for battleship style coordinates
  let cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  let rows = ['1', '2', '3', '4', '5', '6', '7']
  // -------------------------------------------
  let col = 0
  let row = 0

  for (let i = 0; i < ping.length; i++) {
    let cord = ping[i]
    if (cord == 'x') {
      return console.log("Radar Hard Result ", col + 1, row + 1)
    }
    col++
    i % grid == 0 ? row++ : false
    col == grid ? col = 0 : col = col

  }
  return console.log("Radar Hard Result ", "no boggies")

}


