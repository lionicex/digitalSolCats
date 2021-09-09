import '../styles/faq.css'

const FAQ = () => {

	return (
		<div className="FAQ"><h2 className="Text Text-title FAQ-Title">Frequently Asked Questions</h2>
			<div className="FAQ-List">
				<div className="Question">
					<div className="Question-Row">
						<h3 className="Text Text-subtitle QuestionTitle">What is Piggy Sol Gang?</h3>
					</div>
					<p className="Text Text-body QuestionAnswer">They are algorithmically generated 10,000
						cute &amp; cruel piggies who are living on the #Solana blockchain.</p>
				</div>
				<div className="Question">
					<div className="Question-Row">
						<h3 className="Text Text-subtitle QuestionTitle">When I will get my
							Piggy after the mint?</h3>
					</div>
					<p className="Text Text-body QuestionAnswer">Your Piggy will be sent to your wallet right after
						the minting which might take few minutes.</p>
				</div>
				<div className="Question">
					<div className="Question-Row"><h3 className="Text Text-subtitle QuestionTitle">Which Solana wallets
						can I use?</h3>
					</div>
					<p className="Text Text-body QuestionAnswer">We will be using Sollet and Phantom wallet for the
						website connection.</p>
				</div>
				<div className="Question">
					<div className="Question-Row"><h3 className="Text Text-subtitle QuestionTitle">When is the
						launch?</h3>
					</div>
					<p className="Text Text-body QuestionAnswer">We are launching on Saturday, 4th September at 8 PM
						GMT+1. You can get the latest updates from our Twitter &amp; Discord.</p>
				</div>
				<div className="Question">
					<div className="Question-Row"><h3 className="Text Text-subtitle QuestionTitle">Who are you?</h3>
					</div>
					<p className="Text Text-body QuestionAnswer">We are a team of three friends/ex-colleagues from
						different parts of the world, who left their corporate lives behind and fully committed to
						make Piggy Sol Gang a reality!</p>
				</div>
			</div>
		</div>
	)
}
export default FAQ