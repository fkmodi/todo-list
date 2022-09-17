import React from "react";
import styled from "styled-components";
const Contact = () => {
	return (
		<Container>
			<a href="https://github.com/fkmodi">Github</a>
			<a href="https://twitter.com/FLONDON02">Twitter</a>
			<a href="https://www.linkedin.com/in/faruq-modibbo-9bb536241/">Linkedin</a>
		</Container>
	);
};

const Container = styled.div`
	right: 1rem;
	bottom: 1.5rem;
	font-size: 1rem;
	font-weight: 700;
	position: absolute;
	text-decoration: none;
	font-family: "Raleway", sans-serif;

	a {
		text-decoration: none;
		margin: 12px;
		color: black;
		opacity: 50%;
	}

	a:hover {
		opacity: 100%;
	}
`;
export default Contact;
