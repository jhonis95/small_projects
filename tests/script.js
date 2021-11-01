const test={
    frases:["vai  corinthians"," vai furia","vai brasil"],
    pickFrases(){
        const {frases}=this;//frase=test.frases
        const idx=Math.floor(Math.random()*frases.length);
        return frases[idx];
    }
}

const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    showName(){
        const {name}=this;
        return `nome: ${name}`;
    }
  };