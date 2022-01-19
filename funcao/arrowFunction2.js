function pessoa() {
    this.idade = 0

    setInterval(() => { //Arrow function literal detro de setInterval
        this.idade++ // Neste caso o "this" não variou quando usamos uma arrow function = " => "
        console.log(this.idade)
    }, 1000)
}
new pessoa