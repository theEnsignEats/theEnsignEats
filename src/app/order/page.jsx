import Layout from "../../pageLayout";
import OrderSummary from "../../components/orderSummary"; // Import OrderSummary component
import Hero from "../../components/hero"


const OrderPage = () => {
    return (
        <Layout>
            <Hero/>
            <OrderSummary />
        </Layout>
    );
};

export default OrderPage;
