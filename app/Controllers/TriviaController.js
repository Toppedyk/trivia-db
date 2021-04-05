import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";


//Private
function _draw() {
  let trivia = ProxyState.trivia;
  let template = ''
  trivia.forEach(t => template += t.Template)
  document.getElementById("app").innerHTML = 
  `  
  <div className="card-columns values">
      ${template}
  </div>
  `
}

//Public
export default class TriviaController {
  constructor() {
    ProxyState.on("trivia", _draw);
    triviaService.getAllTrivia()
  }

  checkAnswer(myAns, coAns){
    triviaService.checkAnswer(myAns, coAns)
  }

}
