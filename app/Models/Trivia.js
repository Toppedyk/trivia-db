export default class Trivia {
  constructor({question, correct_answer, incorrect_answers, category}) {
    this.question = question
    this.correct = correct_answer
    this.incorrect = incorrect_answers
    this.category = category
    this.answers = [this.correct, ...this.incorrect]
    this.answers.sort(() => Math.random() - 0.5);
  }

  get Template() {

      return `
      <div class="card col-8 my-2 d-flex" >
      <div class="card-header">
      ${this.question}
      </div>
      <ul class="list-group list-group-flush">
      ${this.Answers}
      </ul>
    </div>
      `
  }

  get Answers(){
    let template =''
    this.answers.forEach(t => template += `<button type="button" class="btn btn-info my-1" onclick="app.triviaController.checkAnswer('${t}','${this.correct}')">${t}</button>`)
    return template
  }

}
