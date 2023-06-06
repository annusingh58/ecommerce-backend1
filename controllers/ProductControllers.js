

export const addProduct = async (req, res) => {
    try {
        console.log(req.body)

        const { Email, Name, Price } = req.body;
        if (!Email) return res.send("Email is required!")
        if(!Name) return res.send("Name is required")
        if(!Price) return res.send("price is required")


       
        
        const products= new products({
                        name:Name,
                    price:Price,
                    email:Email
                });


        console.log(products,"check here")

        await user.save();
        return res.send(user);
       

    } catch (error) {
        return res.send(error);
    }
}