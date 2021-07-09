const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`)
  readline.question('', userName => {
    // console.log("Username: ",userName);
    let arr = [userName]
    // console.log( typeof arr);
    readline.close();
  })
})


// --------------------------- ********** ---------------------


const stdin = process.openStdin();
let content = '';
var i = 0;
stdin.addListener('data',
  d => {
    content += d.toString();
    console.log(++i + " : ", content);
  });
stdin.addListener('end', () => {

  // console.info(content); 

});



// Java Code 
// import java.io.*; // for handling input/output
// import java.util.*; // contains Collections framework

// // don't change the name of this class
// // you can add inner classes if needed
// class Main {
// 	public static void main (String[] args) throws IOException {
//         Scanner scan = new Scanner(System.in);
//         String str = scan.nextLine();
//         String[] strArr = str.split(" ");
//         Arrays.sort(strArr);
//         for(int i = 0; i < strArr.length; i++) {
//           System.out.print(strArr[i] + " ");
//         }
//       }
//     }
        // Scanner scan = new Scanner(System.in);
//         BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

//         // String str = scan.nextLine();
//         String str = reader.readLine();
//         // if(str == ""){
//         //     return;
//         // }
//         String[] strArr = str.split(" ");
//            int n = strArr.length;
//         //    for (int i = 0; i < n; i++) {
//         //     for (int j = i + 1; j < n; j++) {

//         //         // to compare one string with other strings
//         //         if (strArr[i].compareTo(strArr[j]) > 0) {
//         //             // swapping
//         //             String temp = strArr[i];
//         //             strArr[i] = strArr[j];
//         //             strArr[j] = temp;
//         //         }
//         //     }
//         // }

//         // print output array
//         // System.out.println(
//         //     "The names in alphabetical order are: ");
//         // for (int i = 0; i < n; i++) {
//         //     System.out.print(strArr[i] + " ");
//         // }

//         Arrays.sort(strArr);
//         for(int i = 0; i < n; i++) {
//             if(strArr[i].equals(" ")) {
//                 continue;
//             }
//             System.out.print(strArr[i]);
//             if(i != strArr.length - 1){
//                 System.out.print(" ");
//             }
//         }
// 	}
// }
