import React from "react";

export default function Home() {
	return (
		<div id="home" className="text-center container">
			<div className="page-wrapper d-flex align-items-center flex-column">
				<div className="scroll-top">
					<img src="../img/scroll-top.png" />
				</div>
				<div className="page">
					<div className="welcome">Welcome to a fanmade portal for</div>
					<div className="home-text">War of the Visions Final Fantasy Brave Exvius</div>
					<img src="../img/char.png" height="350px" />
					<br />
					<img src="../img/divider.png" height="20px" />
					<div className="home-text">Tools</div>
				</div>
				<div className="scroll-bot">
					<img src="../img/scroll-bottom.png" />
				</div>
			</div>
			{/* <img className="bottom-right-image" src="../img/home_bg_castle.png" /> */}
		</div>
	);
}
