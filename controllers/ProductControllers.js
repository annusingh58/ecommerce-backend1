

export const addProduct = async (req, res) => {
    try {
        console.log(req.body)

        const { email, name, price } = req.body;
        if (!email) return res.send("Email is required!")
        if(!name) return res.send("Name is required")
        if(!price) return res.send("price is required")


        const user = await user.find({ email }).exec();
        console.log(user[0])
        if (!user.length) 
        return res.send("User not found!")
        
        const products= ({
                        name:name,
                    price:price});
        user[0].products.push(products);
    
        await user[0].save();
        res.send(" Added Product");
       

    } catch (error) {
        return res.send(error);
    }
}