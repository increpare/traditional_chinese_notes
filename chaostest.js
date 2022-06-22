values=[]

easyvalues = [
    "雍 'jowng harmonious,concordant;affable",
  ];
  
  for (var i = 0; i < easyvalues.length; i++) {
      var value = easyvalues[i];
      var split_index1 = 1;
      var split_index2 = value.indexOf(" ", 2);
      var char = value[0];
      var mc = value.substr(2, split_index2 - 2);
      var rest = value.substr(split_index2 + 1);
      values.push(char,"",mc,"","",rest);
  }
  
  console.log(values)