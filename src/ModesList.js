function ModesList() {

    // Mode buttons
    const modeButtons = ["1", "2", "3"];

    return (
        <>
            {modeButtons.map(modeButton => (
                <div>
                    <h2>Boton {modeButton}</h2>
                </div>
            ))}
        </>
    )
}

export default ModesList