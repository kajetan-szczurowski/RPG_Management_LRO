import './user-interface.css'

export default function UserInterface() {
    return(
        <>
        <main className = 'main-window'>
            <section className = 'left-side-container side-container'></section>
            <section className = 'right-side-container side-container'>

                <header className = 'header-bar'></header>

                
                <section className = 'character-buttons-bar buttons-bar'>
                    <button className = 'focusable-button'>Hi</button>
                </section>

                <section className = 'right-side-navigation buttons-bar'>
                    <button  className = 'focusable-button'>Hi</button>
                    <button  className = 'focusable-button'>Hi</button>
                    <button  className = 'focusable-button'>Hi</button>

                </section>
                <section className = 'right-box'></section>

            </section>
        </main>
        </>
    )
}
