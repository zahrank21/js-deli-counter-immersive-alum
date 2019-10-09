function takeANumber(line, person){
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line){
  return line.length > 0 ? `Currently serving ${line.shift()}.` : "There is nobody waiting to be served!"
}

function currentLine(line){
  if (line.length > 0){
    let str = "The line is currently: "
    for (let i=0; i<line.length; i++){
      if (line.length === i+1){
        str = str.concat(`${i+1}. ${line[i]}`)
      } else {
        str = str.concat(`${i + 1}. ${line[i]}, `)
      }
    }
    return str
  } else {
    return "The line is currently empty."
  }
}

