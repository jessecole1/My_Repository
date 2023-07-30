// Dynamic Polymorphism 
// Known as dynamic method dispatch 
// Call to an overridden method is resolved at runtime. Otherwise known as runtime polymorphism. 




public class Dog extends Animal{

  public void animalSound(){
      System.out.println("Woof");
  }

  public static void main(String args[]){
      Animal obj = new Dog();
      obj.animalSound();
  }
}
