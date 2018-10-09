package basic.java;

public class Git {
int id;
String name;
 void insert(int a, String b)
 {
	 id=a;
	 name=b;
	 
 }
 void display()
 {
	 System.out.println(id+""+name);
	 
 }
	public static void main(String[] args) {
		// TODO Auto-generated method stub
Git g=new Git();
g.insert(101, "sri");
g.display();
	}

}
