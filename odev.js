/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

/*
//1.Yöntem fonksiyona doğrudan bind etme
var car = { 
  registrationNumber: "GA12345",
  brand: "Toyota",
  displayDetails: function(){
    console.log(`${this.registrationNumber} ${this.brand}`);
  }.bind(car)
}
const myCarDetails =  car.displayDetails;
myCarDetails();
*/
/*
//2.Yöntem dışardan bind ederek this'e erişim sağlanır
var car = { 
  registrationNumber: "GA12345",
  brand: "Toyota",
  displayDetails: function(){
    console.log(`${this.registrationNumber} ${this.brand}`);
  }
}
const myCarDetails =  car.displayDetails;
const tmpDetails = myCarDetails.bind(car);
tmpDetails();
*/
/*
//3.Yöntem apply kullanımı ile fonksiyon içinden this'e erişim sağlanır
var car = { 
  registrationNumber: "GA12345",
  brand: "Toyota",
  displayDetails: function(){
    console.log(`${this.registrationNumber} ${this.brand}`);
  }
}
car.displayDetails.apply(car)
*/
/*
//4. Kullanım arrow fonkisyonu ile this'e erişim sağlanır
var car = { 
  registrationNumber: "GA12345",
  brand: "Toyota",
  displayDetails() {
      console.log(this.registrationNumber + " " + this.brand);
  }
}

const myCarDetails =  () => car.displayDetails();
myCarDetails();
*/
//5. Yöntem call yöntemi fonksiyon içinden this'e erişim sağlanır.
var car = { 
  registrationNumber: "GA12345",
  brand: "Toyota",
  displayDetails: function(){
    console.log(`${this.registrationNumber} ${this.brand}`);
  }
}
car.displayDetails.call(car)


/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler "en az 2 karakterden olusmali.

**/

function isValidName(name) {
  
  if (name === undefined || name === null) return false;
  
  else return typeof name === "string" && name.trim('').split(/\s+/).every((item) => item.length >= 2);
  
}

/**
3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.
**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}
/*
1.Yöntem apply ederek hem fonksiyonu çağırıyoruz hem de fonksiyona dışarıdan array olarak parametre  yollayabiliyoruz.
*/
//summary.apply(book,['dystopian','1932'])

/*
2.Yöntem apply ederek hem fonksiyonu çağırıyoruz hem de fonksiyona dışarıdan parametre yollayabiliyoruz.
*/
summary.call(book,'dystopian','1932')

/*
  3.Yöntem ise bind yöntemi , bind kullanımın da dikkat edilmesi gereken fonksiyonu sizin çağırmanız gerekiyor
 */
/*
let summaryFunc = summary.bind(book,'dystopian','1932')
summaryFunc();
 */

module.exports = isValidName;