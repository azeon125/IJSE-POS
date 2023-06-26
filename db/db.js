import {Customer} from "../model/Customer.js";
import {Item} from"../model/Item.js";
import {Order} from "../model/Order.js";
import {OrderDetail} from "../model/OrderDetail.js";

var customerList=[];
customerList.push(new Customer("C001","Sumudu","Tangalle",75000.00));
customerList.push(new Customer("C002","Saman","Panadura",85000.00));
customerList.push(new Customer("C003","Ashen","Anuradapura",25000.00));
customerList.push(new Customer("C004","Sudath","Mathara",95000.00));
customerList.push(new Customer("C005","Kasun","Galle",72000.00));

var itemList=[];
itemList.push(new Item("P001","Headset",25,800.00));
itemList.push(new Item("P002","Monitor",10,12000.00));
itemList.push(new Item("P003","Usb Hub",50,600.00));
itemList.push(new Item("P004","Cooling Pad",30,1800.00));
itemList.push(new Item("P005","Power Supply",35,2800.00));


var orderList=[];
orderList.push(new Order("D005",new Date().toISOString().split("T")[0],new Date().toLocaleTimeString(),"C001","0","1000.00"));

var orderDetailList=[];

export {customerList,itemList,orderList,orderDetailList}



