const RazorPay = require('razorpay');
const instance = new RazorPay({
    key_id: process.env.RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_SECRECT,
});

const payMent = async (req, res) => {
    const { amount } = req.body;
    const option = {
        amount: amount * 100,
        currency: 'INR',
    };
    const order = await instance.orders.create(option);
    res.json({ success: true, order });
};

const paymentVerification = async (req, res) => {
    const { razorPayOrderId, razorpayPaymentId } = req.body;
    res.json({ razorPayOrderId, razorpayPaymentId });
};

module.exports = {
    payMent,
    paymentVerification,
};
