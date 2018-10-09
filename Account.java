package com.cg.javaobj;

public class Account
{
float amount=5000;
void deposite(float a)
{
	//float a;
amount=amount+a;
System.out.println("deposited"+a);
}
void withdraw(float b)
{
	amount=amount-b;
	System.out.println("withdraw"+b);
}
void check()
{

	//amount=(amount+a)-b;
}
void display()
{
	System.out.println("bal is "+amount);
}
public static void main(String args[])
{
	Account z=new Account();
	z.deposite(550);
	z.withdraw(400);
	z.check();
	z.display();
	
}








}
