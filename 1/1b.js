const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const stuffNeeded = ['a','A','b', 'B','c', 'C','d' , 'D','e' , 'E','f', 'F','g', 'G','h', 'H' ,'i', 'I','j', 'J','k', 'K','l', 'L','m', 'M','n', 'N','o', 'O',
                    'p', 'P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z','!','?','.',',']

                    
function cleanText(sentence){
        const filteredText = []
        
        for(let i = 0; i < sentence.length; i ++){
                for(let j = 0; j < stuffNeeded.length; j++){
                    if(sentence[i] == stuffNeeded[j])
                        filteredText.push(sentence[i])
                }
            }
    return filteredText.join(" ")
   }

console.log(cleanText(sentence))
    
    

   

