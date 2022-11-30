var images = ["https://i.postimg.cc/L6HcYQM0/grand-father.png",
 "https://i.postimg.cc/wjMnFtMX/father.jpg" ,
  "https://i.postimg.cc/bw5W5zSK/mother.jpg",
   "https://i.postimg.cc/5ymDKL83/bro.jpg",
    "https://i.postimg.cc/JnL6wtrd/sister.jpg"];

var names = ["Vovozinho", "Douglas Silva - Pai", "Ana Silva - Mãe", "Roberto Silva - Irmão", "Sonia Silva - Irmã"];

var age = [60, 40, 38, 20, 17]



age.sort()









var i = 0;

function update()
{
    age.reverse()
    
    i++;

    var numbersOfFamilyMemberInArray = 4
    if(i > numbersOfFamilyMemberInArray )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("familyNemberImage").src = updatedImage;
    
    document.getElementById("familyMemberName").innerHTML = updatedName;

    document.getElementById("familyMemberAge").innerHTML = updatedAge;

    


var maxNumber = Math.max.apply(Math, age)
            console.log("A maior idade é: 80 ", maxNumber)

    

    var maxNumber = Math.apply(Math );
    console.log("A maior idade é: 80 ",  );

    

  var minNumber = Math.min.apply(Math, age)
            console.log("A menor idade é: 1 ", minNumber)

    

    var minNumber = Math.apply(Math);
    console.log("A menor idade é: 1 ",  );
}