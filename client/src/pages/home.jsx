function home() {
    return (
        <div className="containerHomepage">
            <h1 className="crimetime">Crime Time</h1>
            <div id="player1">
                <label for="player1">Player 1</label>
                <input type="text" name="player1" id="player1" />
            </div>
            <div id="player2">
                <label for="player2">Player 2</label>
                <input type="text" name="player2" id="player2" />
            </div>
            <button>Let's solve a crime</button>
        </div>
    )
}

export default home;