import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { CardItem } from "./components/Cards";
import { Container, Row, Col } from "./components/Grid";
import Cards from "./components/Cards/CardObject";

class App extends Component {
	state = {
		cards: [
			{ href: "https://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg", imgId: 1 },
			{ href: "https://i.annihil.us/u/prod/marvel/i/mg/c/10/537ba5ff07aa4/standard_xlarge.jpg", imgId: 2 },
			{ href: "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg", imgId: 3 },
			{ href: "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg", imgId: 4 },
			{ href: "https://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg", imgId: 5 },
			{ href: "https://i.annihil.us/u/prod/marvel/i/mg/5/e0/537bb460046bd/standard_xlarge.jpg", imgId: 6 },
			{ href: "https://i.annihil.us/u/prod/marvel/i/mg/9/10/537ba3f27a6e0/standard_xlarge.jpg", imgId: 7 },
			{ href: "https://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg", imgId: 8 },
			{ href: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg", imgId: 9 },
			{ href: "https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg", imgId: 10 },
			{ href: "https://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b/standard_xlarge.jpg", imgId: 11 },
			{ href: "https://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a/standard_xlarge.jpg", imgId: 12 }
		],
		valuesArray: [],
		score: 0,
		topScore: 0,
		imageSearch: "",
		gameOverMsg: ""
	};

	// componentDidMount() {
	// 	this.state.cards = 
	// }

	handleInputChange = event => {
		// Destructure the name and value properties off of event.target
		// Update the appropriate state
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		// When the form is submitted, prevent its default behavior, get images update the images state
		event.preventDefault();
		API.getImages(this.state.imageSearch)
			.then(res => {
				console.log(res.data);
				this.setState({ images: res.data });
			})
			.catch(err => console.log(err));
	};

	onCardClick = (event) => {
		// const dataset = event.target.dataset.id;
		const clickVal = parseInt(event,10);
		const indexVal = this.state.valuesArray.indexOf(clickVal);
		//Check if it has already been clicked if not keep playing
		return (indexVal === -1) ?  this.keepGoing(clickVal) : this.gameOver();
	};

	keepGoing = (clickVal) => {
		const updatedArr = (this.state.valuesArray.concat(clickVal));
		const shuffledArray = this.shuffleArray(this.state.cards);
		const newScore = updatedArr.length;
		this.setState({
			valuesArray: updatedArr,
			cards: shuffledArray,
			score: newScore
		});

	}

	gameOver = () => {
		const newTopScore = this.state.topScore > this.state.score ? this.state.topScore : this.state.score;
		this.setGameOverMsg();
		this.setState({
			valuesArray: [],
			score: 0,
			topScore: newTopScore
		});
	};

	setScore = (newScore) => {
		this.state.score = newScore;
	}

	shuffleArray = (array) => {
		let i = array.length - 1;

		for (; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	setGameOverMsg = () => {
		const theScore = this.state.score;
		if(theScore <= 4){
			this.state.gameOverMsg = "You clicked " + theScore + " before clicking the same one. Kind of a novice performance, keep practicing.";
		}else if(theScore > 4 && theScore < 9){
			this.state.gameOverMsg = "You clicked " + theScore + " before clicking the same one. Not bad, I've seen better but could be worse.";
		}else if(theScore >= 9 && theScore < 12){
			this.state.gameOverMsg = "You clicked " + theScore + " before clicking the same one. Awesome, you're starting to get a hang of this.";
		}else{
			this.state.gameOverMsg = "You got them all! Good work!"
		}
	}

	render() {
		return (
			<div>
				<Nav 
					score={this.state.score}
					topScore={this.state.topScore}
				/>
				<Jumbotron 
					gameOverMsg={this.state.gameOverMsg}
				/>
				<Container>
					{/* <Row>
						<Col size="md-12">
							<form>
								<Container>
									<Row>
										<Col size="xs-9 sm-10">
											<Input
												name="imageSearch"
												value={this.state.imageSearch}
												onChange={this.handleInputChange}
												placeholder="Search for some images"
											/>
										</Col>
										<Col size="xs-3 sm-2">
											<Button
												onClick={this.handleFormSubmit}
												type="success"
												className="input-lg"
											>
												Search
                      </Button>
										</Col>
									</Row>
								</Container>
							</form>
						</Col>
					</Row> */}


					{/* <h1>{this.state.imageSearch}</h1> */}


					{this.state.cards.map((card, index) => {
						return <CardItem
							onClick={this.onCardClick}
							href={card.href}
							imgId={card.imgId}
							key={index}
						/>
					})}



				</Container>
			</div>
		);
	}
}

export default App;
