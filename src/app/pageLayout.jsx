import FloatingCartButton from "../components/floatingCartButton";
import Cart from "../components/cart";
import { DialogProvider } from '@/components/dialogContext';
import Footer from "../components/footer";
import Header from "../components/header";


export default function Layout({ children }) {
    return (
        <DialogProvider>

            <Header />
            <main>{children}</main>
            <Footer />
            <FloatingCartButton/>
            <Cart/>
        </DialogProvider>
    )
}
