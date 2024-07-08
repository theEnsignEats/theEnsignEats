

export default function FloatingCartButton() {
    return (
        <div className="fixed bottom-2 right-2">
            <button type="button"
                    className="rounded-full bg-indigo-600 p-4 m-10 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    aria-label="Open Cart">
                <img src="cart.png" alt="Open Cart" width={30} height={30}/>
            </button>
        </div>
    );
}