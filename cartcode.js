let addtocart = "add_item_tocart"
let removefromcart = "removeitem_from_cart"
let clearcart = "remove_all_item_in_cart"
let emptycart = "empty_cart"


const item={
        id: 0
    }

    // create a empyter array or list to store data from add, remove, clear and update
let cartlist = []

function shoppingCart(addtocart, item, cartlist=[]){
    let newcart_list=cartlist.slice()

    switch(addtocart){
        case "add_item_tocart":
            newcart_list.push(item)
            return newcart_list ;
    
        case "removeitem_from_cart":
            for(const item_in_cart of newcart_list){
                if (item_in_cart===item){
                    newcart_list.pop(item)
                    return newcart_list ;
                }
            }
            return newcart_list ;
        
        case "remove_all_item_in_cart":
            for(const item_in_cart of newcart_list){
                if (item_in_cart===item){
                    newcart_list.pop(item)
                }
            }
            return newcart_list;

        case "empty_cart":
            for(const item_in_cart of newcart_list){
                item_in_cart.pop(item)
                }
            return newcart_list;
        
        default:
            console.log("Invalid action")
            break;
    }

}

console.log(shoppingCart(addtocart,item,cartlist))