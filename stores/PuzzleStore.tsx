import words from '../data/words.json'

export default {
    wins: 0,
    loss: 0,
    word: '',
    userGuesses: [],
    currentGuess: 0,
    get won(){
        if(this.userGuesses[this.currentGuess - 1] === this.word){
            this.wins += 1
            return true
        }
        return false 
    },
    get lost(){
        if(this.currentGuess === 6){
            this.loss += 1
            return true
        }
        return false
    },
    init() {
        const count = Math.round(Math.random() * words.length)
        console.log(words[count])
        this.word = words[count]
        this.userGuesses.replace(new Array(6).fill(''))
        this.currentGuess = 0
    },
    submitGuess(){
        //if(words.includes(this.userGuesses[this.currentGuess])){
        this.currentGuess += 1
        //}
    },
    handleKeyUp (e) {
        if(this.won || this.lost){
            return

        }
        if(e.key === 'Enter' || this.userGuesses[this.currentGuess].length == 5){
            return this.submitGuess()
        }

        if(e.key === 'Backspace'){
            this.userGuesses[this.currentGuess] = this.userGuesses[this.currentGuess].slice(0, this.userGuesses[this.currentGuess].length - 1)
            return
        }

        if(this.userGuesses[this.currentGuess].length < 5 && e.key.match(/^[A-z]$/)){
            this.userGuesses[this.currentGuess] = this.userGuesses[this.currentGuess] + e.key.toLowerCase();
        }
    },

}