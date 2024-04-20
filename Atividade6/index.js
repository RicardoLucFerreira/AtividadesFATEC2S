class alunos{
    constructor(nome, email, RA, matricula, disciplinas){
        this.nome = nome
        this.email = email
        this.RA = RA
        this.matricula = matricula
        this.disciplinas = disciplinas
    }
    primeiraDisc(){
        return this.disciplinas[0]
        
    }

    ultimaDisc(){
        return this.disciplinas[this.disciplinas.length-1]
    }

}

let aluno1 = new alunos("Astolfo", "Ast@gmail.com", 5550123, 1230555, ["LPOO", "S.O", "BD"])
let aluno2 = new alunos("Osvaldo", "Osv@gmail.com", 1230321, 3210123, ["Mrkt", "AdmI", "PT"])


console.log("Nome: " + aluno1.nome)
console.log("E-mail: " + aluno1.email)
console.log("R.A: " + aluno1.RA)
console.log("Matricula: " + aluno1.matricula)
console.log("Primeira disciplina: " + aluno1.primeiraDisc())
console.log("Ultima disciplina: " + aluno1.ultimaDisc())

console.log("Nome: " + aluno2.nome)
console.log("E-mail: " + aluno2.email)
console.log("R.A: " + aluno2.RA)
console.log("Matricula: " + aluno2.matricula)
console.log("Primeira disciplina: " + aluno2.primeiraDisc())
console.log("Ultima disciplina: " + aluno2.ultimaDisc())
