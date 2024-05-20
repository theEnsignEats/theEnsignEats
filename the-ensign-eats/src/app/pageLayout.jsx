import Footer from '@/app/components/footer'
import Header from "@/app/components/header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
