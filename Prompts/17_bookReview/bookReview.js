class BookReview {
    constructor(title, author) {
        this.title = title;
        this.author =author;
        this.notes = {

        }
        this.rating = undefined
    }
    addNotes(page,note) {
        if(this.notes[page] ==undefined) {
            this.notes[page] = note
        }
        else{
            this.notes[page] = this.notes[page] +" " + note;
        }
    }
    addRating(num) {
        if(num>5) {
            throw new Error ('not legit')
        }
        this.rating = num
    }
}





module.exports = { BookReview };
