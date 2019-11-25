let Customer = {
    "uid": 91194481,
    "credentials": {
        "username": "js2013",  // encrypt for extra security?
        "password": "qwerty1234", // salt passwords for extra security?
    },
    "name": "John Smith",
    "address": {
        "line1": "4400 SW 20th Avenue",
        "line2": "Apt. 1204B",
        "city": "Gainesville",
        "state": "FL",
        "zipcode": "32607",
    }, 
}

let Vendor = {
	"vid": 14779919,
	"credentials": {
        "username": "dominoes352",  // encrypt for extra security?
        "password": "pizzahutsux",  // salt passwords for extra security?
    },
	"name": "Domino's Pizza",
    "address": {
        "line1": "3309 W University Ave",
        "line2": "",
        "city": "Gainesville",
        "state": "FL",
        "zipcode": "32607",
    },
}

let Item = { // this could be simplified probably
    "id": 19518922,	   // item's unique id based on options
	"vid": 14779919,   // vendor's id
    "name": "Cheese Pizza",
    "type": "Food",  // for sorting by type of item
    "base_price": "$6.50", 
	"total_price": "$15.00",
    "options": { // upcharges added to base_price to get total_price
        "size": {
			"option": "large",
            "upcharge": "$4.50",
        },
        "addons": {
            "pepperoni": "$1.25",
			"olives": "0.75",
			"meatballs": "1.00",
			"bacon": "1.00",
        }
    }
}

let Transaction = {
    "id": 45132515,  // transaction's unique id based on customer and items
	"total": "$30.00",
	"timestamp": "11-13-2019-09:34:56AM",  // timestamp for logging transactions
	"numOfItems": 2,
	// possible store only the customer's uid? let me know what you guys think
	"customer": { // just store the customer's uid, name, and address
		"uid": 91194481,
		"name": "John Smith",
		"address": {
			"line1": "4400 SW 20th Avenue",
			"line2": "Apt. 1204B",
			"city": "Gainesville",
			"state": "FL",
			"zipcode": "32607",
		}
    }, 
	// not sure if just storing item's id is enough, so I stored the whole item
	// let me know what you guys think
    "items": [ // total_prices added together to get total
        {
			"id": 19518922,
			"name": "Cheese Pizza",
			"type": "Food",
			"base_price": "$6.50",
			"total_price": "$15.00",
			"options": {
				"size": {
					"option": "large",
					"upcharge": "$4.50",
				},
				"addons": {
					"pepperoni": "$1.25",
					"olives": "0.75",
					"meatballs": "1.00",
					"bacon": "1.00",
				}
			}
        },
        {
			"id": 19518922,
			"name": "Cheese Pizza",
			"type": "Food",
			"base_price": "$6.50",
			"options": {
				"size": {
					"option": "large",
					"upcharge": "$4.50",
				},
				"addons": {
					"pepperoni": "$1.25",
					"olives": "0.75",
					"meatballs": "1.00",
					"bacon": "1.00",
				}
			}
        },
    ]
}