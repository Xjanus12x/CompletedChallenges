
import java.util.InputMismatchException;
import java.util.Scanner;

class Activity2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int userInput;
        int sumOfAllEvenNumbers = 0;
        int productOfAllOddNumbers = 1;
        System.out.println("Enter -1 to exit.");
        while(true) {
            System.out.print("Enter a digit: ");
            try {
             userInput = input.nextInt();
             if(userInput == -1) break;
             else if((userInput%2)==0) {
                sumOfAllEvenNumbers += userInput;
             }
             else {
                productOfAllOddNumbers *= userInput;
             }
            } catch(InputMismatchException e) {
                System.out.println("\n\nError. Please enter a valid input.\n\n");

                // to prevent infinite error msg loop;
                input.nextLine();
            }
           
        }
        System.out.println("\n\nResult: ");
        System.out.println("Sum of all inputed numbers by user: "+sumOfAllEvenNumbers);
        System.out.println("Product of all inputed numbers by user: "+productOfAllOddNumbers);
        System.out.println("End of the program...");
        input.close();
    }
}