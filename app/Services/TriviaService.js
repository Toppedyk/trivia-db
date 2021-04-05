import { ProxyState } from "../AppState.js";
import Trivia from "../Models/Trivia.js";
import { api } from "./AxiosService.js";

class TriviaService {
  async getAllTrivia(){
    let results = await api.get()

    let questions = results.data.results.map(q => new Trivia(q))
    ProxyState.trivia = questions
  }

  checkAnswer(myAns, coAns){
    if(myAns == coAns){
      console.log("THAT'S CORRECT")
      window.alert("THAT'S CORRECT")
    }else{
      console.log("THAT'S INCORRECT")
      window.alert("THAT'S INCORRECT, TRY HARDER")
    }
  }

}

export const triviaService = new TriviaService();