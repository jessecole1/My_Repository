using Internal;
namespace Internal;

internal class Program
{
    private static void Main(string[] args)
    {
        for (int i = 1; i <= 255; i++) {
            Console.WriteLine(i);
        }

        Console.WriteLine("- - - - - - - - - - - - -");

        Random rand = new Random();
        int x = 0;
        for (int i = 0; i < 5; i++)
        {
            x += rand.Next(10,20);
        }
        Console.WriteLine(x);

        Console.WriteLine("- - - - FIZZBUZZ - - - - ");

        for (int i = 0; i < 100; i++)
        {
            if (i % 3 == 0 && i % 5 == 0) 
            {
                continue;
            } else if (i % 3 == 0) {
                Console.WriteLine(i);
            } else if (i % 5 == 0) {
                Console.WriteLine(i);
            } 
        }

    }
}