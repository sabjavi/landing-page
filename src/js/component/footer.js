import React from "react";

export const Footer = () => {
	return (
		<footer className="bg-dark text-center text-lg-start">
			<div
				className="text-center p-3"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}>
				© 2020 Copyright:
				<a className="text-white" href="https://mdbootstrap.com/">
					MDBootstrap.com
				</a>
			</div>
		</footer>
	);
};
