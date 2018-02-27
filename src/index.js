class SmartCalculator {
  constructor(initialValue) {
    this.ar = [initialValue];
  }

  add(number) {
    this.ar.push('+', number);
    return this;
  }
  
  subtract(number) {
    this.ar.push('-', number);
    return this;
  }

  multiply(number) {
    this.ar.push('*', number);
    return this;
  }

  devide(number) {
    this.ar.push('/', number);
    return this;
  }

  pow(number) {
    this.ar.push('^', number);
    return this;
  }
  
  toString(){
    console.log(this.ar);
      for(var j=0; j<this.ar.length; j++){
        if(this.ar[j]=='^') {
          this.ar.splice(j - 1, 3 , Math.pow(this.ar[j-1],this.ar[j+1]));
          j = 0;
        }}
        for(var j=0; j<this.ar.length; j++){
        if(this.ar[j]=='*'){
          this.ar.splice(j - 1, 3, this.ar[j+1]*this.ar[j-1]);
          j = 0;
        }}
        for(var j=0; j<this.ar.length; j++){
        if(this.ar[j]=='/'){
          this.ar.splice(j - 1, 3, this.ar[j-1]/this.ar[j+1]);
          j = 0;
        }}
        for(var j=0; j<this.ar.length; j++){
        if(this.ar[j]=='-'){
          this.ar.splice(j - 1, 3, this.ar[j-1]-this.ar[j+1]);
          j = 0;
        }}
        for(var j=0; j<this.ar.length; j++){
        if(this.ar[j]=='+'){
          this.ar.splice(j - 1, 3, this.ar[j+1]+this.ar[j-1]);
          j = 0;
        }}
      
    return this.ar[0];
  }
}

module.exports = SmartCalculator;