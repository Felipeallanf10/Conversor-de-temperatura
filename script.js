// adicionar html
function addHtml() {
  return `
<div class="container">
            <input type="number" id="input1" value="">

            <select name="degree" id="select1">
              <optgroup label="Qual a escala?">
               <option value="c" id="op11">Celsius</option>
                <option value="f" id="op22">Fahrenheit</option>
                <option value="k" id="op33">Kelvin</option>
              </optgroup>
            </select>
          </div>

                  <div class="sinalIgual">=</div> 

          <div class="box">
            <input type="number" id="input2" value="" disabled/>
            <select name="degree" id="select2">
              <optgroup label="Qual a escala?">
              <option value="f"  id="op1">Fahrenheit</option>
              <option value="c" id="op2">Celsius</option>
              <option value="k" id="op3">Kelvin</option>
              </optgroup>
            </select>
          </div>
`
}
document.querySelector('form').innerHTML = addHtml()

input1.onkeyup = function (e) {
  // pegar o valor do input
  const input1 = document.getElementById('input1')
  const input2 = document.getElementById('input2')
  const select1 = document.querySelector('#select1')
  const select2 = document.querySelector('#select2')

  console.log(select1.value, select2.value)

  var degree = input1.value.toString()
  degree = degree + select1.value.toString()

  //função que faz a transformação
  function transformDegree(degree) {
    const fahrenheitExistis = degree.toUpperCase().includes('F')
    const celsiusExistis = degree.toUpperCase().includes('C')
    const kelvinExistis = degree.toUpperCase().includes('K')

    if (!celsiusExistis && !fahrenheitExistis && !kelvinExistis) {
      throw new Error('Grau não identificado')
    }

    let updateDegree
    let formula
    let degreesign

    if (fahrenheitExistis && select2.value === 'c') {
      updateDegree = Number(degree.toUpperCase().replace('F', ''))
      formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
      degreesign = 'C'
    } else if (fahrenheitExistis && select2.value === 'f') {
      updateDegree = Number(degree.toUpperCase().replace('F', ''))
      formula = fahrenheit => fahrenheit + 0
      degreesign = 'F'
    } else if (fahrenheitExistis && select2.value === 'k') {
      updateDegree = Number(degree.toUpperCase().replace('F', ''))
      formula = fahrenheit => ((fahrenheit - 32) * 5) / 9 + 273.15
      degreesign = 'K'
    } else if (celsiusExistis && select2.value === 'f') {
      updateDegree = Number(degree.toUpperCase().replace('C', ''))
      formula = celsius => (celsius * 9) / 5 + 32
      degreesign = 'F'
    } else if (celsiusExistis && select2.value === 'k') {
      updateDegree = Number(degree.toUpperCase().replace('C', ''))
      formula = celsius => celsius + 273.15
      degreesign = 'K'
    } else if (celsiusExistis && select2.value === 'c') {
      updateDegree = Number(degree.toUpperCase().replace('C', ''))
      formula = celsius => celsius + 0
      degreesign = 'C'
    } else if (kelvinExistis && select2.value === 'c') {
      updateDegree = Number(degree.toUpperCase().replace('K', ''))
      formula = kelvin => kelvin - 273.15
      degreesign = 'C'
    } else if (kelvinExistis && select2.value === 'f') {
      updateDegree = Number(degree.toUpperCase().replace('K', ''))
      formula = kelvin => ((kelvin - 273.15) * 9) / 5 + 32
      degreesign = 'F'
    } else if (kelvinExistis && select2.value === 'k') {
      updateDegree = Number(degree.toUpperCase().replace('K', ''))
      formula = kelvin => kelvin + 0
      degreesign = 'k'
    }

    input2.setAttribute('value', `${formula(updateDegree)}`)

    return formula(updateDegree) + degreesign
  }
  try {
    console.log(transformDegree(degree))
  } catch (error) {
    console.log(error.message)
  }
}

/*
  const select1 = document.querySelector('#select1')
  const select2 = document.querySelector('#select2')
  const opition1 = document.querySelector('#op1')
  const opition2 = document.querySelector('#op2')
console.log(select1, select2, opition1, opition2)
  
  // trocar o select de c para f, ou de f para c
  select1.addEventListener('onchange',   function() {
    if (select1.value.includes('f')) {
      opition2.setAttribute('selected', 'selected')
    } else if (select1.value.includes('c')){
      opition1.setAttribute('selected', 'selected')
    } else {alert('Please select')}
    
  }) 
  
*/
