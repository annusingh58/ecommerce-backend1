import Users from "../modals/Users.js";
import { v4 as uuidv4 } from 'uuid';

export const register = async (req, res) => {
    try {
        const { email, number } = req.body;
        if (!email) return res.send("Email is required!");
        if (!number) return res.send("Number is required!");

        console.log(number);

        var CodeEmail = uuidv4();
        var CodeNumber = uuidv4();

        const isEmail = await Users.find({ email }).exec();
        if (isEmail.length) return res.send("Email already present");

        const isNumber = await Users.find({ number }).exec();
        if (isNumber.length) return res.send("Number already present");

        const user = new Users({
            email,
            number,
            otpForEmail: CodeEmail,
            otpForNumber: CodeNumber,
            isEmailVerified: false,
            isNumberverified: false
        });
        await user.save();
        res.send("Check your mobile  number and email for OTP")
    } catch (error) {
        return res.send(error);
    }

}





export const otpcheckRegisterEmail = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email) return res.send("email is requires");
        if (!otp) return res.send("OTP is required");

        const user = await Users.find({ email }).exec();
        if (!user.length) return res.send("user not found");

        if (user[0].otpForEmail == otp) {
            const user = await Users.findOneAndUpdate({ email }, { isEmailVerified: true }).exec();
            await user.save();
            return res.send("Email OTP verified")
        }
        return res.send("otp wrong plz try again")
    }
    catch (error) {
        return res.send(error)
    }

}


export const otpcheckRegisterNumber = async (req, res) => {
    try {
        const { number, otp } = req.body;
        if (!number) return res.send("number is required");
        if (!otp) return res.send("OTP is required");

        const user = await Users.find({ number }).exec();
        if (!user.length) return res.send("user not found");

        if (user[0].otpForNumber == otp) {

            const user = await Users.findOneAndUpdate({ number }, { isNumberverified: true }).exec();
            await user.save();
            return res.send("Mobile Number OTP verified")
        }
        return res.send("Wrong otp plz try again")
    }
    catch (error) {
        return res.send(error)
    }

}




export const login = async (req, res) => {
    try {
        const { email, number } = req.body;
        if (!email) return res.send("Email is required");
        if (!number) return res.send("Number is required");

        const user = await Users.find({ email, number }).exec();
       
       
        if (user.length) {
            return res.send("You are Logedd in");
        }
        return res.send("Wrong password")

    } catch (error) {
        return res.send("error")
    }
}



