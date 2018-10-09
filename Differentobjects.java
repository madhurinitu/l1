package basic.java;

public class Differentobjects {


void fact(int a)
{
	int fact=1;
	for(int i=1;i<a;i++)
	{
		fact=fact*i;
		
	}
System.out.println("fact="+fact);
}
public static void main(String args[])
{
	new Differentobjects();//anonymous 
//new Differentobjects().fact(5);// calling method
	//Differentobjects d=new Differentobjects();//calling method with anonymous 
	//d.fact(5);
}

}





