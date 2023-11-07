(function(){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text){
        let Img = `./img/${img}.png`
        let customer = new Customer(img, name, text)

        customers.push(customer)
    }

    createCustomer(0, 'John', ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,itaque? Velit voluptatibus iure neque nesciunt voluptas pariaturtempore omnis consequuntur.')
    createCustomer(1, 'John', ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,itaque? Velit voluptatibus iure neque nesciunt voluptas pariaturtempore omnis consequuntur.')
    createCustomer(2, 'John', ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,itaque? Velit voluptatibus iure neque nesciunt voluptas pariaturtempore omnis consequuntur.')
    createCustomer(3, 'John', ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,itaque? Velit voluptatibus iure neque nesciunt voluptas pariaturtempore omnis consequuntur.')
    createCustomer(4, 'John', ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,itaque? Velit voluptatibus iure neque nesciunt voluptas pariaturtempore omnis consequuntur.')
})()