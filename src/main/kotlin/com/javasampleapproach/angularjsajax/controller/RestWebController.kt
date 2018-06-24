package com.javasampleapproach.angularjsajax.controller

import com.javasampleapproach.angularjsajax.model.Customer
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
class RestWebController {
 
	val custStore = mutableListOf<Customer>()
 
	@GetMapping(value = "/getallcustomer")
	fun getResource() : List<Customer>{
		return custStore;
	}
 
	@PostMapping(value = "/postcustomer")
	fun postCustomer(@RequestBody customer: Customer) : String{
		custStore.add(customer);
		return "Post sucessfully!" + " - " + customer.firstname;
	}
}