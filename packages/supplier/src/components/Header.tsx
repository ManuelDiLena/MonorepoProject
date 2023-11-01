function Header() {
    return (
        <header className='bg-first fixed top-0 left-0 right-0 z-50 sm:sticky'>
            <div className='container mx-auto flex flex-row justify-between py-3 sm:flex-row'>
                <div className='title-font text-third font-medium m-1 sm:mb-0'>
                    <h1 className="sm:text-xl">
                        Supplier
                    </h1>
                </div>
            </div>
        </header>
    );
}

export default Header;